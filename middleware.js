import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase bilgileri (Kullanıcının projeden aldıklarını kullanıyoruz)
const SUPABASE_URL = 'https://bwzfhmskhcwbysdkwrtk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emZobXNraGN3YnlzZGt3cnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NzYwNjEsImV4cCI6MjA5ODU1MjA2MX0.txjA3C2iaca6kKhWnwU4E_l_s0-HgGTkV1fvwEmadVM';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function middleware(req) {
  const url = req.nextUrl.clone();
  
  // Gelen isteğin host bilgisini alıyoruz (örn: ayse-ahmet.seninmarkan.com)
  const hostname = req.headers.get('host') || '';
  
  // Localhost ve ana domain'i (seninmarkan.com) hariç tut
  // Sadece subdomain varsa işlem yap
  const isLocalhost = hostname.includes('localhost');
  const domainParts = hostname.split('.');
  
  // Subdomain yoksa veya doğrudan www / kök domain gelirse ana sayfayı göster
  if (!isLocalhost && domainParts.length <= 2) {
    return NextResponse.next();
  }
  
  if (isLocalhost && domainParts.length === 1) {
    return NextResponse.next();
  }

  // Subdomain'i çıkarıyoruz (örn: "ayse-ahmet")
  const subdomain = domainParts[0];

  // Ana sayfalar (www vb.) atlanıyor
  if (subdomain === 'www') {
    return NextResponse.next();
  }

  // Sadece kök döküman (/) istendiğinde rewrite yap, diğer asset'leri (resim, css) normal geçir
  if (url.pathname !== '/') {
    return NextResponse.next();
  }

  try {
    // Supabase'den bu subdomain'in hangi template'i aldığını sor
    const { data: couple, error } = await supabase
      .from('couples')
      .select('template_id, is_active')
      .eq('subdomain', subdomain)
      .single();

    if (error || !couple || !couple.is_active) {
      console.error('Subdomain bulunamadı veya pasif:', subdomain);
      // Bulunamazsa 404 sayfasına (veya ana sayfaya) yönlendir
      return NextResponse.next();
    }

    // Bulunduysa: Kullanıcıya fark ettirmeden ilgili klasördeki code.html'i render et
    // public/ klasörü kök '/' dizini olarak algılanır. 
    // Örn: public/4_ileri/code.html dosyası -> /4_ileri/code.html
    url.pathname = `/${couple.template_id}/code.html`;
    return NextResponse.rewrite(url);

  } catch (err) {
    console.error('Middleware Error:', err);
    return NextResponse.next();
  }
}

export const config = {
  // Sadece kök URL ve statik olmayan dosyalarda tetiklenmesi için matcher optimizasyonu
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Tüm statik assetleri hariç tutmak için resim uzantıları
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|js|css)$).*)',
  ],
};
