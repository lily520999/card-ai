import React from 'react';
import { Locale } from '@/i18n/translations';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  onChange: (locale: Locale) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, onChange }) => {
  return (
    <div className="relative inline-block">
      <select 
        value={currentLocale}
        onChange={(e) => onChange(e.target.value as Locale)}
        className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="zh-CN">中文</option>
        <option value="en-US">English</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 