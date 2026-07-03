'use client';
import React, { useState } from 'react';

export default function PhotoWall() {
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', user: 'Ahmet' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', user: 'Ayşe' },
  ]);

  const handleUpload = () => {
    alert('QR Kod tarayıcı kamerası açılacak veya dosya seçici tetiklenecektir.');
  };

  return (
    <div className="w-full bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 my-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-medium text-gray-800 font-serif">Canlı Fotoğraf Duvarı</h3>
          <p className="text-xs text-gray-500 mt-1">Anı yakalayın ve herkesle paylaşın</p>
        </div>
        <button 
          onClick={handleUpload}
          className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-pink-200 transition-transform active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {photos.map(photo => (
          <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
            <img src={photo.url} alt="Düğün anısı" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-white text-xs font-medium">{photo.user} tarafından eklendi</span>
            </div>
          </div>
        ))}
        
        {/* Placeholder for QR Upload */}
        <div 
          onClick={handleUpload}
          className="aspect-square rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-300 transition-colors cursor-pointer bg-gray-50/50"
        >
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span className="text-xs font-medium">Fotoğraf Yükle</span>
        </div>
      </div>
    </div>
  );
}
