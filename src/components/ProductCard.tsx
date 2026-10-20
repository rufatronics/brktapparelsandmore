import React from 'react';
import type { Product, Category } from '../types';
import { CATEGORIES } from '../data/storeData';
import { Eye, Info } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 px-1 scrollbar-none no-scrollbar">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
              isSelected
                ? 'bg-[#0F5257] text-white shadow-md border border-amber-300/40 scale-105'
                : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-[#0F5257] border border-gray-200'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">

      {/* Top Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-white/95 text-gray-900 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-[#C5A059] hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" /> Quick View &amp; Order
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-[#C5A059] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          {product.isDemo && (
            <span className="bg-slate-900/80 text-amber-200 text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-sm border border-amber-400/30 flex items-center gap-1">
              <Info className="w-3 h-3 text-amber-300" /> Demo Item
            </span>
          )}
        </div>
      </div>

      {/* Details Area */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white">
        <div>
          <span className="text-[11px] font-semibold text-[#0F5257] uppercase tracking-wider block mb-1">
            {product.category}
          </span>
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-gray-900 text-sm sm:text-base line-clamp-1 cursor-pointer hover:text-[#0F5257] transition-colors"
          >
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-[#0F5257]">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-xs text-gray-400 line-through font-normal">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>
            <p className="text-[10px] text-gray-400 font-medium">Multiple sizes &amp; colors</p>
          </div>

          <button
            onClick={() => onQuickView(product)}
            className="p-2.5 rounded-xl bg-amber-50 text-[#0F5257] border border-amber-200/60 hover:bg-[#0F5257] hover:text-white transition-colors text-xs font-semibold"
            aria-label="Select size and order"
          >
            View
          </button>
        </div>
      </div>

    </div>
  );
};
