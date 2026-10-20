export type Category =
  | 'All'
  | 'Abaya'
  | 'Jalabia'
  | 'Casual Wears'
  | 'Fabrics'
  | 'Veil'
  | 'Turban'
  | 'Cap';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // in NGN
  originalPrice?: number;
  image: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isFeatured?: boolean;
  badge?: string;
  isDemo?: boolean;
}

export interface CartItem {
  id: string; // unique cart item key (prodId + size + color)
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}
