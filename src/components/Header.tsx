"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Marymax Insurance Services home">
          <img src="/assets/logomarymax.webp" alt="Marymax Insurance Services" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className="nav-item" href="/medicare">Medicare <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/medicaid">Medicaid <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/life-insurance">Life Insurance <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/resources">Resources <span className="chevron" aria-hidden="true"></span></Link>
          <Link className="nav-item" href="/about">About Us</Link>
        </nav>
        <div className="language"><span>EN</span> <span>/ ES</span></div>
        <a className="call-header" href="tel:8008410519">Call 800-841-0519</a>
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
          <Link href="/medicare" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>Medicare</Link>
          <Link href="/medicaid" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>Medicaid</Link>
          <Link href="/life-insurance" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>Life Insurance</Link>
          <Link href="/resources" className="p-4 text-lg font-semibold text-[#0a234f] border-b border-gray-100" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link href="/about" className="p-4 text-lg font-semibold text-[#0a234f]" onClick={() => setIsOpen(false)}>About Us</Link>
          <a href="tel:8008410519" className="mt-4 p-4 text-center bg-[#123f9b] text-white rounded-lg font-bold shadow-md" onClick={() => setIsOpen(false)}>Call 800-841-0519</a>
        </div>
      )}
    </header>
  );
}
