"use client";

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Bilgileri
const SUPABASE_URL = 'https://bwzfhmskhcwbysdkwrtk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emZobXNraGN3YnlzZGt3cnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NzYwNjEsImV4cCI6MjA5ODU1MjA2MX0.txjA3C2iaca6kKhWnwU4E_l_s0-HgGTkV1fvwEmadVM';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const TEMPLATES = [
  "1", "1_baslangic", "1_orta", "1_ileri",
  "2", "2_baslangic", "2_orta", "2_ileri",
  "3", "3_baslangic", "3_orta", "3_ileri",
  "4", "4_baslangic", "4_orta", "4_ileri",
  "5", "5_baslangic", "5_orta", "5_ileri",
  "6", "6_baslangic", "6_orta", "6_ileri",
  "7", "7_baslangic", "7_orta", "7_ileri"
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [subdomain, setSubdomain] = useState('');
  const [templateId, setTemplateId] = useState(TEMPLATES[0]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Hatalı şifre!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subdomain) return alert('Lütfen bir URL adı girin.');

    setLoading(true);
    setMessage({ text: '', type: '' });

    // Boşlukları ve Türkçe karakterleri İngilizce'ye çeviren basit bir regex
    const cleanSubdomain = subdomain
      .toLowerCase()
      .trim()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9-]/g, '-');

    try {
      const { data, error } = await supabase
        .from('couples')
        .insert([{ subdomain: cleanSubdomain, template_id: templateId }]);

      if (error) {
        if (error.code === '23505') {
          setMessage({ text: 'Bu URL adı zaten alınmış!', type: 'error' });
        } else {
          setMessage({ text: 'Veritabanı Hatası: ' + error.message, type: 'error' });
        }
      } else {
        setMessage({ text: `Başarılı! Yeni adresiniz: /${cleanSubdomain}`, type: 'success' });
        setSubdomain('');
      }
    } catch (err) {
      setMessage({ text: 'Beklenmeyen hata: ' + err.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
        <form onSubmit={handleLogin} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '1rem', color: '#111827' }}>Yönetim Paneli Girişi</h2>
          <input 
            type="password" 
            placeholder="Şifreyi giriniz" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Giriş Yap</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>Müşteri (Davetiye) Oluştur</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>URL Adı (Subdomain / Path)</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '4px', overflow: 'hidden' }}>
              <span style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', color: '#6b7280', borderRight: '1px solid #d1d5db' }}>domain.com/</span>
              <input 
                type="text" 
                placeholder="mehmet-ayse"
                value={subdomain}
                onChange={(e) => setSubdomain(e.target.value)}
                style={{ flex: 1, padding: '0.5rem', border: 'none', outline: 'none' }}
                required
              />
            </div>
            <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>Türkçe karakter ve boşluk kullanmayınız.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>Uygulanacak Şablon & Paket</label>
            <select 
              value={templateId} 
              onChange={(e) => setTemplateId(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', backgroundColor: 'white', outline: 'none' }}
            >
              {TEMPLATES.map(t => <option key={t} value={t}>{t.replace('_', ' ').toUpperCase()}</option>)}
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: loading ? '#93c5fd' : '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            {loading ? 'Kaydediliyor...' : 'Müşteriyi Oluştur & Yayına Al'}
          </button>
        </form>

        {message.text && (
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '4px', backgroundColor: message.type === 'success' ? '#dcfce3' : '#fee2e2', color: message.type === 'success' ? '#166534' : '#991b1b' }}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
