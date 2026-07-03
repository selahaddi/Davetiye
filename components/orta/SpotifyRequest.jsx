'use client';
import React, { useState } from 'react';

export default function SpotifyRequest() {
  const [songs, setSongs] = useState([
    { id: 1, name: 'Perfect', artist: 'Ed Sheeran' },
  ]);
  const [formData, setFormData] = useState({ name: '', artist: '' });
  const [status, setStatus] = useState('idle'); // idle, analyzing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.artist.trim()) return;

    setStatus('analyzing');

    // 1.5 saniyelik yapay zeka analiz simülasyonu
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newSong = {
      id: Date.now(),
      name: formData.name.trim(),
      artist: formData.artist.trim(),
    };

    setSongs((prev) => [newSong, ...prev]);
    setFormData({ name: '', artist: '' });
    setStatus('idle');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 my-8 relative overflow-hidden">
      
      {/* Zarif Dekorasyon */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-amber-50 rounded-full opacity-60 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-[#1DB954]/10 rounded-full opacity-60 blur-2xl pointer-events-none"></div>

      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-50 rounded-2xl mb-4 shadow-sm border border-gray-100">
          <svg className="w-8 h-8 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM19.08 10.5c-3.96-2.34-10.44-2.58-14.22-1.44-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.26.36z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-gray-800 mb-2 font-serif">Müzik Kutusu</h3>
        <p className="text-sm text-gray-500">Gecemize renk katacak o özel şarkıyı ekleyin.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10 mb-8">
        
        <div className="space-y-4">
          <div>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#1DB954]/50 focus:border-[#1DB954] outline-none transition-all text-gray-800 placeholder-gray-400 text-sm" 
              placeholder="Şarkı Adı" 
            />
          </div>
          <div>
            <input 
              type="text" 
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#1DB954]/50 focus:border-[#1DB954] outline-none transition-all text-gray-800 placeholder-gray-400 text-sm" 
              placeholder="Sanatçı" 
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={status === 'analyzing'}
          className={`w-full py-4 px-6 rounded-2xl font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 mt-2 ${
            status === 'analyzing' 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200' 
              : 'bg-gray-900 hover:bg-[#1DB954] text-white shadow-lg hover:shadow-xl hover:shadow-[#1DB954]/20 hover:-translate-y-0.5 border border-transparent'
          }`}
        >
          {status === 'analyzing' ? (
            <>
              <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Yapay Zeka şarkıyı analiz ediyor...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <span>Listeye Ekle</span>
            </>
          )}
        </button>
      </form>

      {/* Son Eklenenler Listesi */}
      <div className="relative z-10 border-t border-gray-100 pt-6">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 ml-1">Son Eklenenler</h4>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {songs.length === 0 ? (
            <p className="text-sm text-gray-400 italic ml-1">Henüz şarkı eklenmedi. İlk şarkıyı siz isteyin!</p>
          ) : (
            songs.map((song) => (
              <div 
                key={song.id} 
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 animate-fade-in-up"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{song.name}</p>
                  <p className="text-xs text-gray-500 truncate">{song.artist}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Özel Scrollbar CSS'i (global.css'e de taşınabilir) */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f3f4f6;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
}
