
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">NAIL DISEASE DETECTION</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                HOME
              </a>
              <a href="/about" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                ABOUT
              </a>
              <a href="/nail-info" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                NAIL INFO
              </a>
              <a href="/predict" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                PREDICT
              </a>
              <Button variant="ghost" size="sm" className="text-white hover:text-teal-200 hover:bg-teal-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-teal-200 hover:bg-teal-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-teal-700 rounded-lg mt-2">
              <a href="/" className="text-white hover:text-teal-200 block px-3 py-2 rounded-md text-base font-medium">
                HOME
              </a>
              <a href="/about" className="text-white hover:text-teal-200 block px-3 py-2 rounded-md text-base font-medium">
                ABOUT
              </a>
              <a href="/nail-info" className="text-white hover:text-teal-200 block px-3 py-2 rounded-md text-base font-medium">
                NAIL INFO
              </a>
              <a href="/predict" className="text-white hover:text-teal-200 block px-3 py-2 rounded-md text-base font-medium">
                PREDICT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
