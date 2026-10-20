import React from 'react';
import type { Product } from '../types';
import { STORE_DETAILS } from '../data/storeData';
import { X, MessageCircle, ShoppingBag, Check, ShieldCheck, Ruler, Truck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: { name: string; hex: string }) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = React.useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = React.useState<{ name: string; hex: string }>(
    product.colors[0] || { name: 'Default', hex: '#000000' }
  );
  const [added, setAdded] = React.useState(false);

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(product.price);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDirectWhatsAppOrder = () => {
    const text = `Hello BRKT Apparel! 👋\nI would like to order this item directly:\n\n📌 *Product:* ${product.name}\n🏷️ *Category:* ${product.category}\n📏 *Size:* ${selectedSize}\n🎨 *Color:* ${selectedColor.name}\n💰 *Price:* ${formattedPrice}\n\nPlease confirm availability and payment details. Thank you!`;
    const url = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-100 my-8 animate-in fade-in zoom-in-95 duration-200">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 text-gray-700 transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image Side */}
          <div className="relative bg-gray-100 aspect-square md:aspect-auto h-64 md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.isDemo && (
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-amber-200 text-[11px] px-2.5 py-1 rounded-md font-medium backdrop-blur-sm border border-amber-300/30">
                ⚠️ Sample product (Demo item)
              </div>
            )}
          </div>

          {/* Product Form Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#0F5257] uppercase tracking-wider">
                  {product.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mt-0.5">
                  {product.name}
                </h2>
                <p className="text-2xl font-bold text-[#0F5257] mt-2">
                  {formattedPrice}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Color: <span className="text-gray-900 font-bold">{selectedColor.name}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    {product.colors.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColor(col)}
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor.name === col.name
                            ? 'ring-2 ring-offset-2 ring-[#0F5257] border-white scale-110'
                            : 'border-gray-200 hover:scale-105'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      >
                        {selectedColor.name === col.name && (
                          <Check className={`w-4 h-4 ${col.hex.toLowerCase() === '#ffffff' ? 'text-gray-900' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Size: <span className="text-gray-900 font-bold">{selectedSize}</span>
                    </label>
                    <span className="text-[11px] text-[#0F5257] flex items-center gap-1 font-medium cursor-pointer hover:underline">
                      <Ruler className="w-3 h-3" /> Size Guide
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          selectedSize === sz
                            ? 'bg-[#0F5257] text-white border-[#0F5257] shadow-sm'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Guarantee bullets */}
              <div className="pt-2 text-[11px] text-gray-500 space-y-1">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Authentic Fabrics &amp; High Quality Stitching
                </p>
                <p className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" /> Fast Pick-Up or Nationwide Delivery in Nigeria
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                onClick={handleDirectWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Order Now via WhatsApp</span>
              </button>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm border transition-colors flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-amber-100 text-[#0F5257] border-amber-300'
                    : 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{added ? 'Added to Bag! ✓' : 'Add to Bag'}</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
