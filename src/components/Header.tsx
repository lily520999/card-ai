import React, { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '@/contexts/LocaleContext';

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLocale();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            {t('app.name')}
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-primary">
                  Browse Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing Plans
                </Link>
              </li>
              <li className="relative">
                <button 
                  className="hover:text-primary flex items-center"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  Resources
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {resourcesOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Blog
                    </Link>
                    <Link href="/tutorials" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Tutorials
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher 
              currentLocale={locale} 
              onChange={setLocale} 
            />
            <Link href="/login" className="btn text-primary border border-primary bg-white hover:bg-gray-50">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign up Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 