import React from 'react';
import { STORE_DETAILS } from '../data/storeData';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-24 sm:pb-12 border-t-4 border-[#C5A059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A059] bg-emerald-900 overflow-hidden flex items-center justify-center p-0.5">
                <img
                  src="/assets/logo_board.png"
                  alt="BRKT Apparel Logo"
                  className="w-14 h-14 object-cover scale-125"
                />
              </div>
              <span className="font-serif font-bold text-lg text-white">
                BRKT <span className="text-[#C5A059]">APPAREL</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dealer in all kinds of Abaya, Jalabia, Casual Wear, Fabrics, Veils, Turbans &amp; Caps. Fashion home for all in Abuja, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-[#C5A059] text-sm uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#catalog" className="hover:text-amber-200 transition-colors">Luxury Abayas</a></li>
              <li><a href="#catalog" className="hover:text-amber-200 transition-colors">Men &amp; Women Jalabias</a></li>
              <li><a href="#catalog" className="hover:text-amber-200 transition-colors">Modest Casual Wear</a></li>
              <li><a href="#catalog" className="hover:text-amber-200 transition-colors">Brocade &amp; Silk Fabrics</a></li>
              <li><a href="#catalog" className="hover:text-amber-200 transition-colors">Veils, Turbans &amp; Caps</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif font-bold text-[#C5A059] text-sm uppercase tracking-wider mb-4">
              Contact &amp; Orders
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <a href={`tel:${STORE_DETAILS.phone}`} className="hover:underline">{STORE_DETAILS.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <a href={`mailto:${STORE_DETAILS.email}`} className="hover:underline">{STORE_DETAILS.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Lugbe, Abuja, FCT</span>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${STORE_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-[11px] hover:bg-emerald-500"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Location */}
          <div>
            <h4 className="font-serif font-bold text-[#C5A059] text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/brktapparelandmore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-pink-400"
              >
                <span className="text-pink-500 font-bold">📷 Instagram:</span>
                <span>{STORE_DETAILS.instagram}</span>
              </a>
              <a
                href="https://www.tiktok.com/@brktapparelandmore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-amber-200"
              >
                <span className="text-gray-300 font-bold">🎵 TikTok:</span>
                <span>{STORE_DETAILS.tiktok}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} BRKT Apparel. All rights reserved.</p>
          <p className="flex items-center gap-1 text-gray-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for BRKT Apparel, Abuja
          </p>
        </div>
      </div>
    </footer>
  );
};
