import { useState, useMemo, useEffect } from 'react';
import type { Category, Product, CartItem } from './types';
import { SAMPLE_PRODUCTS, STORE_DETAILS } from './data/storeData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter, ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { LocationAndContact } from './components/LocationAndContact';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Persistent Cart state stored in localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('brkt_apparel_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  // Sync Cart changes to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('brkt_apparel_cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to cache:', err);
    }
  }, [cart]);

  // Filter products based on Category and Search keyword
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'All' || prod.category === selectedCategory;
      const matchesSearch =
        searchTerm === '' ||
        prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Cart operations
  const handleAddToCart = (
    product: Product,
    selectedSize: string,
    selectedColor: { name: string; hex: string }
  ) => {
    setCart((prevCart) => {
      const itemKey = `${product.id}-${selectedSize}-${selectedColor.name}`;
      const existingIndex = prevCart.findIndex((item) => item.id === itemKey);

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: itemKey,
            product,
            selectedSize,
            selectedColor,
            quantity: 1,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900 flex flex-col font-sans selection:bg-[#0F5257] selection:text-white">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero onShopNowClick={scrollToCatalog} />

        {/* Brand Promise Banner */}
        <div className="bg-white border-y border-amber-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="font-serif font-bold text-sm sm:text-base text-[#0F5257]">✨ Authentic Abaya</p>
              <p className="text-xs text-gray-500">Dubai &amp; Luxury Fabrics</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif font-bold text-sm sm:text-base text-[#0F5257]">📱 Instant WhatsApp</p>
              <p className="text-xs text-gray-500">Direct order processing</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif font-bold text-sm sm:text-base text-[#0F5257]">🚚 Nationwide Delivery</p>
              <p className="text-xs text-gray-500">Abuja &amp; across Nigeria</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif font-bold text-sm sm:text-base text-[#0F5257]">📍 Physical Store</p>
              <p className="text-xs text-gray-500">Lugbe, Abuja</p>
            </div>
          </div>
        </div>

        {/* Catalog Section */}
        <section id="catalog" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Curated Collection
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900">
                Abaya, Apparel &amp; Fashion Home
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              Explore elegant Abayas, Jalabias, Casual Wears, Fabrics, Veils, Turbans &amp; Caps. Click any item to select options and order directly via WhatsApp.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div id="categories" className="mb-8">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300 p-8">
              <p className="text-lg font-bold font-serif text-gray-800">No items match your search</p>
              <p className="text-xs text-gray-500 mt-1">
                Try searching for a different keyword or select another category above.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0F5257] text-white text-xs font-bold hover:bg-[#0B3C40]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setSelectedProductModal}
                  onAddToCart={(p) =>
                    handleAddToCart(
                      p,
                      p.sizes[0] || 'Standard',
                      p.colors[0] || { name: 'Default', hex: '#000000' }
                    )
                  }
                />
              ))}
            </div>
          )}
        </section>

        {/* About BRKT Section */}
        <section id="about" className="py-16 bg-gradient-to-r from-emerald-950 to-[#0F5257] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                About BRKT Apparel
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
                Quality, Comfort &amp; Regal Grace for Every Woman &amp; Family
              </h2>
              <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed font-light">
                BRKT Apparel is Abuja's premier modesty fashion boutique. We deal in all kinds of high-grade Abayas, Jalabias, Casual Wears, Premium Swiss &amp; Silk Fabrics, Veils, Turbans, and Caps. Whether you are dressing for daily grace, Jummah, or special occasions, we bring you timeless craftsmanship with unmatched value.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs">
                <a
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="px-4 py-2.5 rounded-full bg-[#C5A059] text-gray-950 font-bold hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Store: {STORE_DETAILS.phone}
                </a>
                <span className="px-4 py-2.5 rounded-full bg-white/10 text-amber-200 font-medium flex items-center gap-1.5 border border-amber-300/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> 100% Quality Guaranteed
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="p-4 rounded-3xl bg-white/10 border border-amber-200/30 backdrop-blur-md max-w-sm text-center space-y-3">
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#C5A059] overflow-hidden bg-emerald-900 p-1">
                  <img src="/assets/logo_board.png" alt="Logo" className="w-28 h-28 object-cover scale-125" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white">BRKT Apparel, Abaya &amp; More</h3>
                <p className="text-xs text-amber-200">Lugbe, Abuja, FCT, Nigeria</p>
                <div className="pt-2 text-[11px] text-gray-300 border-t border-white/10">
                  Phone/WhatsApp: {STORE_DETAILS.phone}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <LocationAndContact />
      </main>

      {/* Floating Action Buttons */}
      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Product Quick View & Order Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
