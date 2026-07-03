import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase bilgileri
const SUPABASE_URL = 'https://bwzfhmskhcwbysdkwrtk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emZobXNraGN3YnlzZGt3cnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NzYwNjEsImV4cCI6MjA5ODU1MjA2MX0.txjA3C2iaca6kKhWnwU4E_l_s0-HgGTkV1fvwEmadVM';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function middleware(req) {
  const url = req.nextUrl.clone();
  
  // Gelen isteğin host bilgisini alıyoruz (örn: ayse-ahmet.seninmarkan.com veya davetiye-pearl.vercel.app)
  const hostname = req.headers.get('host') || '';
  
  const isVercelApp = hostname.includes('.vercel.app');
  const isLocalhost = hostname.includes('localhost');
  const domainParts = hostname.split('.');
  
  let tenantId = null;

  // SENARYO 1: Vercel Domaini (davetiye-pearl.vercel.app/ayse-ahmet) -> Path bazlı yönlendirme
  if (isVercelApp || isLocalhost) {
    const pathParts = url.pathname.split('/').filter(Boolean);
    
    // Eğer bir path varsa (örn: /ayse-ahmet), bunu tenant olarak kabul et
    if (pathParts.length > 0) {
      // Özel Vercel ve Next.js path'lerini yoksay
      if (pathParts[0] !== '_next' && pathParts[0] !== 'api') {
         tenantId = pathParts[0];
      }
    }
  } 
  // SENARYO 2: Özel Domain Wildcard (ayse-ahmet.seninmarkan.com) -> Subdomain bazlı yönlendirme
  else if (domainParts.length > 2) {
    tenantId = domainParts[0];
    if (tenantId === 'www') tenantId = null;
  }

  // Eğer aranacak bir çift ID'si (tenant) bulunamadıysa standart ana sayfaya git
  if (!tenantId) {
    return NextResponse.next();
  }

  // Sadece ana dizin veya tenant dizini çağrıldığında çalış (Statik asset'leri engellememek için)
  if (url.pathname !== '/' && url.pathname !== `/${tenantId}`) {
      // Eğer kullanıcı /ayse-ahmet/resim.jpg gibi bir şey çağırıyorsa karışma
      if(!isVercelApp && !isLocalhost) return NextResponse.next();
  }

  try {
    // Supabase'den bu çiftin (tenant) hangi template'i aldığını sor
    const { data: couple, error } = await supabase
      .from('couples')
      .select('template_id, is_active')
      .eq('subdomain', tenantId)
      .single();

    if (error || !couple || !couple.is_active) {
      console.error('Müşteri bulunamadı veya pasif:', tenantId);
      return NextResponse.next();
    }

    // Bulunduysa: Arka planda ilgili klasördeki code.html'i render et
    // Örn: public/4_ileri/code.html
    url.pathname = `/${couple.template_id}/code.html`;
    return NextResponse.rewrite(url);

  } catch (err) {
    console.error('Middleware Error:', err);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|js|css)$).*)',
  ],
};
