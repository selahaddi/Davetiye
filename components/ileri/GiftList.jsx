'use client';
import React, { useState } from 'react';

export default function GiftList({ iban, accountHolder }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-tr from-amber-50 to-orange-50 p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-amber-100 my-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-3">
          <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-gray-800 mb-2 font-serif">Dijital Takı Merasimi</h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto">
          Mutluluğumuzu paylaşmak ve bize destek olmak isterseniz aşağıdaki hesap bilgilerini kullanabilirsiniz.
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
        <div className="mb-2">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Alıcı Adı</p>
          <p className="font-medium text-gray-800">{accountHolder || 'Damat & Gelin'}</p>
        </div>
        
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">IBAN No</p>
          <div className="flex items-center justify-between gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <code className="text-sm sm:text-base font-mono text-gray-700 tracking-tight break-all">
              {iban || 'TR00 0000 0000 0000 0000 0000 00'}
            </code>
            <button 
              onClick={handleCopy}
              className={`p-2 rounded-md transition-colors ${copied ? 'bg-green-100 text-green-600' : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              title="Kopyala"
            >
              {copied ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {copied && <p className="text-center text-xs font-medium text-green-600 mt-3 animate-pulse">IBAN kopyalandı!</p>}
    </div>
  );
}
