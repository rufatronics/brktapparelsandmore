import React from 'react';
import { STORE_DETAILS } from '../data/storeData';
import { MessageCircle, Phone, ShoppingBag, MapPin } from 'lucide-react';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Mobile) */}
      <a
        href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello BRKT Apparel! 👋 I would like to make an inquiry about your Abayas & Jalabias.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-emerald-500" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-1">
          Chat on WhatsApp
        </span>
      </a>

      {/* Mobile Sticky Bottom Action Navigation Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-amber-200 px-4 py-2 flex items-center justify-around shadow-lg">
        <a
          href="#catalog"
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#0F5257] text-[10px] font-medium"
        >
          <ShoppingBag className="w-5 h-5 text-[#0F5257]" />
          <span>Shop</span>
        </a>

        <a
          href={`tel:${STORE_DETAILS.phone}`}
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#0F5257] text-[10px] font-medium"
        >
          <Phone className="w-5 h-5 text-[#0F5257]" />
          <span>Call Us</span>
        </a>

        <a
          href="#location"
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#0F5257] text-[10px] font-medium"
        >
          <MapPin className="w-5 h-5 text-[#0F5257]" />
          <span>Location</span>
        </a>

        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center gap-0.5 text-[#0F5257] text-[10px] font-medium"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#C5A059] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span>Bag</span>
        </button>
      </div>
    </>
  );
};
