import React from 'react';

export default function CalendarAdd({ title, date, location }) {
  // Basit bir Google Takvim ekleme linki oluşturucu
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${date}&details=Davetiyemiz&location=${encodeURIComponent(location)}`;

  return (
    <div className="w-full bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 my-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full mb-4">
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-2 font-serif">Takvime Ekle</h3>
      <p className="text-sm text-gray-500 mb-6">Bu özel günü unutmamanız için takviminize kaydedin.</p>
      
      <div className="flex flex-col gap-3">
        <a 
          href={googleCalendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors duration-200 text-sm font-medium shadow-md shadow-indigo-200"
        >
          Google Takvim
        </a>
        <button 
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors duration-200 text-sm font-medium border border-gray-200"
          onClick={() => alert('Apple/Outlook için .ics dosyası indirme işlevi eklenebilir.')}
        >
          Apple / Outlook (.ics)
        </button>
      </div>
    </div>
  );
}
