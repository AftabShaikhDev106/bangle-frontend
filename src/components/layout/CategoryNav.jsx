import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navCategories } from '../../data/landingData';

const CategoryNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full border-t border-stone-200/60 pt-3 mt-3">
      <div className="flex items-center justify-center gap-x-8 gap-y-2 flex-wrap text-xs uppercase font-sans tracking-[0.15em]">
        {navCategories.map((item) => {
          const isActive =
            (item.name === 'HOME' && location.pathname === '/') ||
            (item.name === 'WOMEN' && location.pathname === '/women') ||
            (item.name === 'JEWELRY' && location.pathname === '/jewelry') ||
            (item.name === 'COLLECTIONS' && location.pathname === '/collections') ||
            (item.name === 'ABOUT' && location.pathname === '/about') ||
            (item.name === 'CONTACT' && location.pathname === '/contact');

          if (item.hasDropdown && item.subCategories) {
            return (
              <div key={item.name} className="relative group py-1">
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 transition-all border-b-2 py-0.5 ${
                    isActive
                      ? 'border-stone-800 text-tertiary font-semibold'
                      : 'border-transparent text-tertiary/80 hover:text-heading font-medium'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown size={13} className="text-stone-500 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px]">
                  <div className="bg-[#FAF8F5] border border-stone-200 shadow-xl rounded-xs py-2 px-1 flex flex-col space-y-0.5">
                    {item.subCategories.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="px-4 py-2 text-[11px] font-sans text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 rounded-xs tracking-wider transition-colors uppercase"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`transition-all py-1 border-b-2 ${
                isActive
                  ? 'border-stone-800 text-tertiary font-semibold'
                  : 'border-transparent text-tertiary/80 hover:text-heading font-medium'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryNav;