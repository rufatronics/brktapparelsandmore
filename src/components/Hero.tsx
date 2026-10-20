import React from 'react';
import { ShoppingBag, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

interface HeroProps {
  onShopNowClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNowClick }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-teal-950 to-[#0F5257] text-white">
      {/* Background Decorative Graphic Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-amber-200 text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Fashion Home For All</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Elegance Defined in Every <span className="text-[#C5A059]">Abaya</span> &amp; Modern Apparel
            </h1>

            <p className="text-amber-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Discover Abuja's premier destination for luxury Abayas, Jalabias, Casual Wear, Premium Fabrics, Veils, Turbans &amp; Caps. Tailored for comfort, modesty, and undeniable style.
            </p>

            {/* Quick Badges / USPs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-amber-100/80">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Direct WhatsApp Ordering
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Nationwide Delivery
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-[#C5A059]" /> Store in Lugbe, Abuja
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onShopNowClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A059] text-gray-950 font-bold text-base hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 transform active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Explore Catalog</span>
              </button>

              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello! I am browsing your online store and would like to learn more about your latest Abayas & Jalabias.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-600/90 text-white font-semibold text-base hover:bg-emerald-500 transition-all border border-emerald-400/40 flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Hero Image Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">

              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#C5A059] via-emerald-500 to-[#0F5257] opacity-60 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-teal-900 border border-amber-200/20">
                <img
                  src="/assets/products/abaya_royal_emerald.jpg"
                  alt="BRKT Apparel Royal Abaya Collection"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center"
                />

                {/* Floating Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-950/80 backdrop-blur-md p-4 rounded-xl border border-amber-400/30 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider">Featured Item</p>
                    <p className="font-serif font-bold text-sm sm:text-base">Luxury Velvet Regal Abaya</p>
                    <p className="text-amber-200 font-semibold text-sm">₦45,000</p>
                  </div>
                  <button
                    onClick={onShopNowClick}
                    className="px-3.5 py-2 rounded-lg bg-[#0F5257] hover:bg-[#0B3C40] text-xs font-semibold border border-amber-300/30 text-amber-100"
                  >
                    View Details
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
