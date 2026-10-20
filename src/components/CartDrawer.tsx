import React from 'react';
import type { CartItem } from '../types';
import { STORE_DETAILS } from '../data/storeData';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(totalAmount);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let text = `Hello BRKT Apparel! 👋\nI would like to place an order from your online store:\n\n`;

    items.forEach((item, index) => {
      const itemTotal = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0,
      }).format(item.product.price * item.quantity);

      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   • Size: ${item.selectedSize}\n`;
      text += `   • Color: ${item.selectedColor.name}\n`;
      text += `   • Qty: ${item.quantity}\n`;
      text += `   • Subtotal: ${itemTotal}\n\n`;
    });

    text += `💰 *TOTAL ORDER:* ${formattedTotal}\n`;
    text += `📍 *Delivery Region:* Abuja / Nationwide\n\nPlease confirm order processing details and payment method. Thank you!`;

    const url = `https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">

          {/* Cart Header */}
          <div className="p-4 sm:p-6 bg-[#0F5257] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h2 className="text-lg font-serif font-bold">Your Shopping Bag</h2>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono">
                {items.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-gray-500 py-12">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-[#0F5257]">
                  <ShoppingBag className="w-8 h-8 text-[#C5A059]" />
                </div>
                <p className="font-serif font-bold text-gray-800 text-lg">Your bag is empty</p>
                <p className="text-xs max-w-xs text-gray-500">
                  Browse our luxury collection of Abayas, Jalabias, Veils &amp; Fabrics to add items.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#0F5257] text-white text-xs font-bold hover:bg-[#0B3C40]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => {
                const formattedPrice = new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 0,
                }).format(item.product.price * item.quantity);

                return (
                  <div
                    key={item.id}
                    className="p-3 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3 relative group"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl bg-gray-200 flex-shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-gray-900 line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Size: <span className="font-semibold text-gray-800">{item.selectedSize}</span> | Color: <span className="font-semibold text-gray-800">{item.selectedColor.name}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-2 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 text-gray-600 hover:text-gray-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 text-gray-600 hover:text-gray-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-[#0F5257]">
                          {formattedPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-gray-100 space-y-4 shadow-lg">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">{formattedTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Estimate</span>
                  <span className="text-emerald-700 font-medium">Calculated on WhatsApp</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0F5257] pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>{formattedTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Send Order to WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>

              <div className="flex justify-between items-center text-[11px] text-gray-400">
                <span>Direct WhatsApp checkout</span>
                <button
                  onClick={onClearCart}
                  className="hover:text-red-500 underline"
                >
                  Clear Bag
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
