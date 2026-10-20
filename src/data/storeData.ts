import type { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  'All',
  'Abaya',
  'Jalabia',
  'Casual Wears',
  'Fabrics',
  'Veil',
  'Turban',
  'Cap'
];

export const STORE_DETAILS = {
  name: "BRKT Apparel, Abaya and More",
  tagline: "Fashion Home For All",
  phone: "+234 807 452 0598",
  whatsappNumber: "2348074520598",
  altPhone: "+234 806 912 9899",
  address: "BH 1, 2 Minister Line, Lugbe, Abuja, FCT, Nigeria 900107",
  email: "bukkyeleyinla@yahoo.com",
  instagram: "@brkt__apparel",
  tiktok: "@brkt_20",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.485292837315!2d7.3698243!3d8.9734125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7195c80ba1b3%3A0x8e833fbbd09cfbb3!2sMinister%20Line%2C%20Lugbe%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'brkt-001',
    name: 'Luxury Velvet Regal Abaya',
    category: 'Abaya',
    price: 45000,
    originalPrice: 52000,
    image: '/assets/products/abaya_royal_emerald.jpg',
    description: 'Exquisite handcrafted velvet abaya with gold metallic thread embroidery and matching Sheila headscarf. Perfect for special occasions and Eid celebrations.',
    sizes: ['52', '54', '56', '58', '60'],
    colors: [
      { name: 'Emerald Green', hex: '#0B3C40' },
      { name: 'Royal Onyx', hex: '#111111' },
      { name: 'Imperial Blue', hex: '#1E293B' }
    ],
    isFeatured: true,
    badge: 'Bestseller',
    isDemo: true
  },
  {
    id: 'brkt-002',
    name: 'Dubai Hand-Beaded Gold Abaya',
    category: 'Abaya',
    price: 38000,
    originalPrice: 42000,
    image: '/assets/products/abaya_midnight_gold.jpg',
    description: 'Premium lightweight Nidha fabric trimmed with intricate gold hand-sewn embellishments down the front and cuffs. Features breathable, graceful movement.',
    sizes: ['52', '54', '56', '58'],
    colors: [
      { name: 'Midnight Black', hex: '#1C1917' },
      { name: 'Mocha Gold', hex: '#8B5A2B' }
    ],
    isFeatured: true,
    badge: 'New Arrival',
    isDemo: true
  },
  {
    id: 'brkt-003',
    name: 'Imperial Maroon Embroidered Abaya',
    category: 'Abaya',
    price: 42000,
    image: '/assets/products/abaya_luxe_maroon.jpg',
    description: 'Deep burgundy velvet and chiffon overlay abaya styled with cuff motifs and subtle gemstone accents. Elegant fluid silhouette.',
    sizes: ['54', '56', '58', '60'],
    colors: [
      { name: 'Deep Burgundy', hex: '#58111A' },
      { name: 'Plum Noir', hex: '#3B0764' }
    ],
    isFeatured: true,
    badge: 'Trending',
    isDemo: true
  },
  {
    id: 'brkt-004',
    name: 'Royal White Embroidered Jalabia',
    category: 'Jalabia',
    price: 28000,
    originalPrice: 32000,
    image: '/assets/products/jalabia_dubai_white.jpg',
    description: 'Soft cotton-viscose blend white Jalabia featuring golden collar embroidery. Ideal for Jummah, prayers, and elegant home hosting.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Soft Cream', hex: '#FDFBF7' }
    ],
    isFeatured: false,
    isDemo: true
  },
  {
    id: 'brkt-005',
    name: 'Chic Flowing Silk Casual Dress',
    category: 'Casual Wears',
    price: 25000,
    image: '/assets/products/casual_silk_maxi.jpg',
    description: 'Comfortable modest maxi apparel crafted from soft satin silk. Elasticated cuffs and tiered flare design for effortless everyday sophistication.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Dusty Rose', hex: '#D4A373' },
      { name: 'Olive Green', hex: '#556B2F' },
      { name: 'Navy Blue', hex: '#1E3A8A' }
    ],
    isFeatured: true,
    badge: 'Must Have',
    isDemo: true
  },
  {
    id: 'brkt-006',
    name: 'Premium Brocade & Silk Fabric Piece (4 Yards)',
    category: 'Fabrics',
    price: 22000,
    image: '/assets/products/fabric_luxury_silk.jpg',
    description: 'High-grade imported Swiss lace and textured silk fabric for tailored custom abayas, kaftans, and traditional outfits. Smooth skin feel.',
    sizes: ['4 Yards', '8 Yards'],
    colors: [
      { name: 'Gold Emerald', hex: '#2A9D8F' },
      { name: 'Champagne', hex: '#E9C46A' }
    ],
    isFeatured: false,
    isDemo: true
  },
  {
    id: 'brkt-007',
    name: 'Luxe Chiffon Sheila Veil / Hijab',
    category: 'Veil',
    price: 8500,
    image: '/assets/products/veil_premium_chiffon.jpg',
    description: 'Non-slip premium bubble chiffon veil crafted with delicate satin hem border. Ultra-soft and non-transparent when folded.',
    sizes: ['Standard (180cm x 75cm)'],
    colors: [
      { name: 'Nude Beige', hex: '#D7C0AE' },
      { name: 'Classic Black', hex: '#000000' },
      { name: 'Terracotta', hex: '#9C6644' },
      { name: 'Teal Green', hex: '#0F5257' }
    ],
    isFeatured: false,
    badge: 'Popular',
    isDemo: true
  },
  {
    id: 'brkt-008',
    name: 'Pleated Velvet Royal Turban',
    category: 'Turban',
    price: 12000,
    image: '/assets/products/turban_royal_velvet.jpg',
    description: 'Pre-tied elasticated stretch velvet turban with crystal brooche detail. Ready-to-wear comfort for weddings and formal events.',
    sizes: ['Free Size'],
    colors: [
      { name: 'Emerald', hex: '#0F5257' },
      { name: 'Royal Gold', hex: '#C5A059' },
      { name: 'Crimson Red', hex: '#991B1B' }
    ],
    isFeatured: false,
    isDemo: true
  },
  {
    id: 'brkt-009',
    name: 'Embroidered Crown Cap & Headpiece',
    category: 'Cap',
    price: 9500,
    image: '/assets/products/cap_embroidered_crown.jpg',
    description: 'Custom handcrafted under-cap with crown-pattern metallic thread stitching. Keeps scarves secure with luxury aesthetic.',
    sizes: ['Free Size'],
    colors: [
      { name: 'Black & Gold Thread', hex: '#1F2937' },
      { name: 'Teal & Gold Thread', hex: '#0B3C40' }
    ],
    isFeatured: false,
    isDemo: true
  }
];
