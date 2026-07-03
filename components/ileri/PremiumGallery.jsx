'use client';
import React, { useState } from 'react';

export default function PremiumGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const images = [
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 my-6">
      <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-xl font-medium text-gray-800 font-serif flex items-center gap-2">
            Profesyonel Galeri
            <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Premium</span>
          </h3>
          <p className="text-xs text-gray-500 mt-1">Düğün fotoğraflarınızı filigransız indirin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {/* Filigran (Watermark) Overlay Effect için Container */}
        {images.map((img, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden group">
            <img src={img} alt="Premium Davetiye Fotoğrafı" className="w-full h-48 object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-300" />
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-overlay">
              <span className="text-white text-2xl font-bold uppercase transform -rotate-45 tracking-widest">Örnek</span>
            </div>

            {/* Satın Alma / İndirme Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-auto">
              <button 
                onClick={() => alert('Iyzico/Stripe ödeme modalı açılacak...')}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                Satın Al & İndir
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        Güvenli ödeme altyapısı (Iyzico/Stripe)
      </div>
    </div>
  );
}
