"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#0a234f', color: '#fff' }} className="py-16 px-8 md:px-16 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="bg-white p-3 rounded-lg inline-block mb-6">
            <img src="/assets/logomarymax.webp" alt="Marymax" className="w-36" />
          </div>
          <p className="text-sm text-gray-300">
            {t('footer_desc')}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#e5232f]">{t('services')}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/medicare" className="hover:text-white transition-colors">{t('nav_medicare')}</Link></li>
            <li><Link href="/medicaid" className="hover:text-white transition-colors">{t('nav_medicaid')}</Link></li>
            <li><Link href="/life-insurance" className="hover:text-white transition-colors">{t('nav_life')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#e5232f]">{t('company')}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white transition-colors">{t('nav_about')}</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">{t('nav_resources')}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{t('contactUs')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#e5232f]">{t('contactUs')}</h3>
          <p className="text-sm text-gray-300 mb-2">{t('contact_desc')}</p>
          <a href="tel:8008410519" className="text-xl font-bold hover:text-[#e5232f] transition-colors">800-841-0519</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#123f9b] text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} {t('rights')}</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link>
          <Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
