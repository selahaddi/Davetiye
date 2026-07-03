'use client';
import React, { useState } from 'react';

export default function RsvpForm() {
  const [status, setStatus] = useState('pending'); // pending, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="w-full bg-green-50 p-8 rounded-2xl border border-green-100 text-center my-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-medium text-green-800 mb-2 font-serif">Teşekkürler!</h3>
        <p className="text-green-700">LCV formunuz başarıyla bize ulaştı. Sizi aramızda görmekten mutluluk duyacağız.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 my-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-gray-800 mb-2 font-serif">Katılım Durumu (LCV)</h3>
        <p className="text-sm text-gray-500">Lütfen katılım durumunuzu bizimle paylaşın.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adınız Soyadınız</label>
          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Örn: Ahmet Yılmaz" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kişi Sayısı</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
              <option>1 Kişi</option>
              <option>2 Kişi</option>
              <option>3 Kişi</option>
              <option>4+ Kişi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Çocuk Sayısı</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
              <option>Yok</option>
              <option>1 Çocuk</option>
              <option>2 Çocuk</option>
              <option>3+ Çocuk</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Menü Tercihi</label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
            <option>Standart Menü</option>
            <option>Vejetaryen Menü</option>
            <option>Çocuk Menüsü</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Özel Bir Notunuz Var Mı?</label>
          <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Eklemek istedikleriniz..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors duration-200 font-medium text-lg mt-4 disabled:opacity-70"
        >
          {status === 'submitting' ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </form>
    </div>
  );
}
