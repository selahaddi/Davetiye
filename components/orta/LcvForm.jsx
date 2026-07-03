'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase istemcisini çevre değişkenleri ile başlatıyoruz
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);


export default function LcvForm() {
  const [formData, setFormData] = useState({
    name: '',
    isAttending: 'yes', // 'yes' veya 'no'
    guestCount: '1',
    menuPreference: 'standart',
    songRequest: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Supabase Insert İşlemi
    try {
      const { error } = await supabase
        .from('rsvp_responses')
        .insert([
          {
            full_name: formData.name,
            is_attending: formData.isAttending === 'yes',
            guest_count: formData.isAttending === 'yes' ? parseInt(formData.guestCount) || 1 : 0,
            menu_preference: formData.isAttending === 'yes' ? formData.menuPreference : null,
            song_request: formData.isAttending === 'yes' ? formData.songRequest : null
          }
        ]);

      if (error) {
        throw error;
      }

      setStatus('success');
      
      // 4 saniye sonra formu sıfırla
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name: '',
          isAttending: 'yes',
          guestCount: '1',
          menuPreference: 'standart',
          songRequest: ''
        });
      }, 4000);

    } catch (error) {
      console.error('Supabase Gönderim hatası:', error.message);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 my-8 relative overflow-hidden">
      
      {/* Zarif Dekorasyon */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-100 rounded-full opacity-50 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-rose-100 rounded-full opacity-50 blur-2xl pointer-events-none"></div>

      <div className="text-center mb-8 relative z-10">
        <h3 className="text-2xl font-medium text-gray-800 mb-2 font-serif">LCV</h3>
        <p className="text-sm text-gray-500">Lütfen katılım durumunuzu bildirin.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        
        {/* Ad Soyad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Adınız Soyadınız</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-gray-800 placeholder-gray-400" 
            placeholder="Örn: Ahmet Yılmaz" 
          />
        </div>

        {/* Katılım Durumu */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Katılım Durumu</label>
          <div className="flex gap-4">
            <label className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border cursor-pointer transition-all ${formData.isAttending === 'yes' ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm' : 'border-gray-200 bg-gray-50/50 text-gray-500 hover:bg-gray-100'}`}>
              <input type="radio" name="isAttending" value="yes" checked={formData.isAttending === 'yes'} onChange={handleChange} className="hidden" />
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.isAttending === 'yes' ? 'border-amber-500' : 'border-gray-300'}`}>
                {formData.isAttending === 'yes' && <div className="w-2 h-2 rounded-full bg-amber-500"></div>}
              </div>
              <span className="text-sm font-medium">Katılıyorum</span>
            </label>
            <label className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border cursor-pointer transition-all ${formData.isAttending === 'no' ? 'border-gray-800 bg-gray-900 text-white shadow-sm' : 'border-gray-200 bg-gray-50/50 text-gray-500 hover:bg-gray-100'}`}>
              <input type="radio" name="isAttending" value="no" checked={formData.isAttending === 'no'} onChange={handleChange} className="hidden" />
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.isAttending === 'no' ? 'border-gray-700 bg-gray-800' : 'border-gray-300'}`}>
                {formData.isAttending === 'no' && <div className="w-2 h-2 rounded-full bg-white"></div>}
              </div>
              <span className="text-sm font-medium">Katılamayacağım</span>
            </label>
          </div>
        </div>

        {/* Koşullu Render: Sadece Katılıyorsa Göster */}
        {formData.isAttending === 'yes' && (
          <div className="space-y-5 animate-fade-in-up">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Kişi Sayısı</label>
                <select 
                  name="guestCount" 
                  value={formData.guestCount} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-gray-800 appearance-none"
                >
                  <option value="1">1 Kişi</option>
                  <option value="2">2 Kişi</option>
                  <option value="3">3 Kişi</option>
                  <option value="4+">4+ Kişi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Menü Tercihi</label>
                <select 
                  name="menuPreference" 
                  value={formData.menuPreference} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-gray-800 appearance-none"
                >
                  <option value="standart">Standart Menü</option>
                  <option value="vejetaryen">Vejetaryen</option>
                  <option value="cocuk">Çocuk Menüsü</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Şarkı İsteğiniz (Opsiyonel)</label>
              <input 
                type="text" 
                name="songRequest"
                value={formData.songRequest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-gray-800 placeholder-gray-400" 
                placeholder="Çalmasını istediğiniz bir şarkı..." 
              />
            </div>
          </div>
        )}

        {/* Submit Butonu */}
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`w-full py-4 px-6 rounded-2xl font-medium text-lg transition-all duration-300 mt-2 ${
            status === 'submitting' 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
          }`}
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gönderiliyor...
            </span>
          ) : 'Gönder'}
        </button>
      </form>

      {/* Başarı Toast Bildirimi */}
      {status === 'success' && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h4 className="text-xl font-medium text-gray-800 font-serif mb-2">Harika!</h4>
          <p className="text-gray-600">
            {formData.isAttending === 'yes' 
              ? 'Katılımınız onaylandı! Sizi aramızda göreceğimiz için çok mutluyuz.' 
              : 'Geri bildiriminiz için teşekkürler. Aramızda olamayacağınıza üzüldük!'}
          </p>
        </div>
      )}
      
    </div>
  );
}
