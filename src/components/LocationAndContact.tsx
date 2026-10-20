import React from 'react';
import { STORE_DETAILS } from '../data/storeData';
import { MapPin, Phone, Mail, Navigation, Clock, ShieldAlert } from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-white border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-1">
            Visit Our Store or Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            Store Location &amp; Contact
          </h2>
          <div className="w-16 h-1 bg-[#0F5257] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-amber-50/40 rounded-3xl p-6 sm:p-8 border border-amber-200/60 flex flex-col justify-between space-y-6">
            <div className="space-y-6">

              <div>
                <h3 className="font-serif font-bold text-xl text-[#0F5257]">
                  {STORE_DETAILS.name}
                </h3>
                <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider mt-0.5">
                  "{STORE_DETAILS.tagline}"
                </p>
              </div>

              {/* Location Info */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-[#0F5257] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Store Address</h4>
                    <p className="text-gray-600 leading-relaxed mt-0.5">
                      {STORE_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-[#0F5257] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone &amp; WhatsApp</h4>
                    <p className="text-gray-600 mt-0.5">
                      <a href={`tel:${STORE_DETAILS.phone}`} className="hover:text-[#0F5257] underline font-medium">
                        {STORE_DETAILS.phone}
                      </a>
                    </p>
                    <p className="text-gray-500 text-xs">
                      Alt: {STORE_DETAILS.altPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-[#0F5257] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Store Hours</h4>
                    <p className="text-gray-600 mt-0.5">
                      Monday - Saturday: 8:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-500 text-xs">
                      Sunday: 1:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-[#0F5257] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a href={`mailto:${STORE_DETAILS.email}`} className="text-gray-600 hover:text-[#0F5257] underline mt-0.5 block">
                      {STORE_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-amber-200/60 space-y-2">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                  Follow Our Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/brkt__apparel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-800 hover:text-pink-600 transition-colors shadow-2xs"
                  >
                    <span className="font-bold text-pink-600">📷 Instagram:</span>
                    <span>{STORE_DETAILS.instagram}</span>
                  </a>

                  <a
                    href="https://tiktok.com/@brkt_20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-800 hover:text-black transition-colors shadow-2xs"
                  >
                    <span className="font-bold">🎵 TikTok:</span>
                    <span>{STORE_DETAILS.tiktok}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Map Directions CTA */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_DETAILS.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#0F5257] text-white font-bold text-xs sm:text-sm hover:bg-[#0B3C40] transition-colors flex items-center justify-center gap-2 shadow-sm mt-4"
            >
              <Navigation className="w-4 h-4 text-[#C5A059]" />
              <span>Get Directions on Google Maps</span>
            </a>

          </div>

          {/* Interactive Google Map Frame Container */}
          <div className="lg:col-span-7 bg-gray-100 rounded-3xl overflow-hidden border border-amber-200/80 shadow-md min-h-[350px] relative flex flex-col">
            <iframe
              title="BRKT Apparel Location Map"
              src="https://maps.google.com/maps?q=Minister%20Line,%20Lugbe,%20Abuja,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] flex-1 border-0"
              loading="lazy"
              allowFullScreen
            />
            <div className="bg-emerald-950 text-amber-100 px-4 py-2 text-xs flex justify-between items-center">
              <span>📍 Lugbe, Abuja, FCT, Nigeria</span>
              <span className="text-amber-300 font-medium">Dealer in All Kind of Abaya &amp; Jalabia</span>
            </div>
          </div>

        </div>

        {/* Demo Notice Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Demonstration Item Notice:</span> Sample product images displayed across the storefront serve as luxury product representations for demo &amp; preview purposes. Actual stock and fabric variants are constantly updated in-store and on WhatsApp.
          </div>
        </div>

      </div>
    </section>
  );
};
