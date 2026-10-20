import React from 'react';
import { ShoppingBag, Search, Phone, MapPin, Menu, X, MessageCircle } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  searchTerm,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100/60">
      {/* Top Banner Notice */}
      <div className="bg-[#0F5257] text-amber-100 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex justify-between items-center max-w-7xl mx-auto">
        <span className="hidden sm:inline">✨ Welcome to BRKT Apparel — Dealer in All Kind of Abaya, Jalabia & Fabrics</span>
        <span className="sm:hidden text-center w-full">✨ BRKT Apparel — Abaya & Fashion Home</span>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-amber-200">
          <a href={`tel:${STORE_DETAILS.phone}`} className="hover:underline flex items-center gap-1">
            <Phone className="w-3 h-3" /> {STORE_DETAILS.phone}
          </a>
          <span>|</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Lugbe, Abuja
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#0F5257] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo Brand Header */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded-full border-2 border-[#C5A059] p-0.5 bg-emerald-950 shadow-sm w-12 h-12 flex items-center justify-center">
              <img
                src="/assets/logo_board.png"
                alt="BRKT Apparel Logo"
                className="w-16 h-16 object-cover object-center scale-125"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F5257] leading-none font-serif">
                BRKT <span className="text-[#C5A059]">APPAREL</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-500 tracking-wider uppercase font-medium mt-0.5">
                Abaya &amp; More • Abuja
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
            <button onClick={() => scrollToSection('catalog')} className="hover:text-[#0F5257] transition-colors">
              Collection
            </button>
            <button onClick={() => scrollToSection('categories')} className="hover:text-[#0F5257] transition-colors">
              Categories
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#0F5257] transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('location')} className="hover:text-[#0F5257] transition-colors">
              Store Location
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Toggle */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:text-[#0F5257] rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Search items"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello BRKT Apparel, I would like to make an inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#0F5257] text-white hover:bg-[#0B3C40] transition-colors shadow-sm"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-100 transition-all">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search Abayas, Jalabias, Veils, Turbans..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-[#100%] w-full pl-10 pr-10 py-2.5 rounded-full border border-amber-200 bg-amber-50/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5257] shadow-inner"
                autoFocus
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-2.5 text-xs text-gray-400 hover:text-gray-700 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection('catalog')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-gray-800 hover:bg-emerald-50 rounded-lg"
          >
            🛍️ Browse All Products
          </button>
          <button
            onClick={() => scrollToSection('categories')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-gray-800 hover:bg-emerald-50 rounded-lg"
          >
            🏷️ Product Categories
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-gray-800 hover:bg-emerald-50 rounded-lg"
          >
            👑 About BRKT Apparel
          </button>
          <button
            onClick={() => scrollToSection('location')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-gray-800 hover:bg-emerald-50 rounded-lg"
          >
            📍 Location &amp; Contact
          </button>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={`tel:${STORE_DETAILS.phone}`}
              className="flex items-center gap-2 text-sm text-gray-700 py-1.5 px-3"
            >
              <Phone className="w-4 h-4 text-[#0F5257]" /> {STORE_DETAILS.phone}
            </a>
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium py-2.5 rounded-lg text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
