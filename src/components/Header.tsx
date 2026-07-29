"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Marymax Insurance Services home">
          <img src="/assets/logomarymax.webp" alt="Marymax Insurance Services" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className="nav-item" href="/medicare">{t('nav_medicare')} <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/medicaid">{t('nav_medicaid')} <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/life-insurance">{t('nav_life')} <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/resources">{t('nav_resources')} <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/about">{t('nav_about')}</Link>
        </nav>
        <div className="language">
          <button 
            className={`font-bold hover:text-[#e5232f] transition-colors ${lang === 'en' ? 'text-[#103477]' : 'text-[#4b5a79]'}`} 
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <span className="mx-1 text-[#4b5a79]">/</span>
          <button 
            className={`font-bold hover:text-[#e5232f] transition-colors ${lang === 'es' ? 'text-[#103477]' : 'text-[#4b5a79]'}`} 
            onClick={() => setLang('es')}
          >
            ES
          </button>
        </div>
        <a className="call-header" href="tel:8008410519">{t('call')} 800-841-0519</a>
        <button 
          className="mobile-menu" 
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={isOpen ? "rotate-45 translate-y-[8px] transition-transform" : "transition-transform"}></span>
          <span className={isOpen ? "opacity-0 transition-opacity" : "transition-opacity"}></span>
          <span className={isOpen ? "-rotate-45 -translate-y-[8px] transition-transform" : "transition-transform"}></span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 flex flex-col p-4 z-50">
          <Link href="/medicare" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>{t('nav_medicare')}</Link>
          <Link href="/medicaid" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>{t('nav_medicaid')}</Link>
          <Link href="/life-insurance" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>{t('nav_life')}</Link>
          <Link href="/resources" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>{t('nav_resources')}</Link>
          <Link href="/about" className="p-4 text-lg font-semibold text-[#0a234f]" onClick={() => setIsOpen(false)}>{t('nav_about')}</Link>
          
          <div className="flex justify-center gap-4 mt-4 py-2 border-t border-gray-100">
            <button className={`font-bold text-lg ${lang === 'en' ? 'text-[#e5232f]' : 'text-[#103477]'}`} onClick={() => { setLang('en'); setIsOpen(false); }}>EN</button>
            <span className="text-gray-300">|</span>
            <button className={`font-bold text-lg ${lang === 'es' ? 'text-[#e5232f]' : 'text-[#103477]'}`} onClick={() => { setLang('es'); setIsOpen(false); }}>ES</button>
          </div>

          <a href="tel:8008410519" className="mt-4 p-4 text-center bg-[#123f9b] text-white rounded-lg font-bold shadow-md" onClick={() => setIsOpen(false)}>{t('call')} 800-841-0519</a>
        </div>
      )}
    </header>
  );
}
