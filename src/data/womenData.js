export const womenCategories = [
  {
    id: 'sarees',
    name: 'Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    count: 124
  },
  {
    id: 'kurtis',
    name: 'Kurtis',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
    count: 98
  },
  {
    id: 'lehengas',
    name: 'Lehengas',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80',
    count: 76
  },
  {
    id: 'dresses',
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
    count: 68
  },
  {
    id: 'coord-sets',
    name: 'Co-ord Sets',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    count: 52
  },
  {
    id: 'ethnic-wear',
    name: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80',
    count: 41
  },
  {
    id: 'western-wear',
    name: 'Western Wear',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
    count: 39
  }
];

export const womenFilterOptions = {
  categories: [
    { label: 'Sarees', count: 124 },
    { label: 'Kurtis', count: 98 },
    { label: 'Lehengas', count: 76 },
    { label: 'Dresses', count: 68 },
    { label: 'Co-ord Sets', count: 52 },
    { label: 'Ethnic Wear', count: 41 },
    { label: 'Western Wear', count: 39 },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
  colors: [
    { name: 'Cream / Beige', hex: '#EAE5D9' },
    { name: 'Blush Pink', hex: '#E8B4B8' },
    { name: 'Sage Green', hex: '#A3B19B' },
    { name: 'Sky Blue', hex: '#A1C4D0' },
    { name: 'Terracotta', hex: '#C27C60' },
    { name: 'Gold', hex: '#D4AF37' },
    { name: 'Black', hex: '#222222' },
  ],
  prices: [
    { label: 'Under ₹1,000', min: 0, max: 1000 },
    { label: '₹1,000 - ₹2,500', min: 1000, max: 2500 },
    { label: '₹2,500 - ₹5,000', min: 2500, max: 5000 },
    { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { label: 'Above ₹10,000', min: 10000, max: 999999 },
  ],
  occasions: ['Wedding', 'Festive', 'Party', 'Office Wear', 'Daily Wear', 'Travel'],
};

export const womenProducts = [
  {
    id: 1,
    name: 'Embroidered Organza Saree',
    category: 'Sarees',
    price: 4299,
    originalPrice: 5699,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    colors: ['#EAE5D9', '#E8B4B8', '#D4AF37'],
    occasion: 'Wedding',
    size: 'Free Size'
  },
  {
    id: 2,
    name: 'Floral Printed Anarkali Set',
    category: 'Kurtis',
    price: 2899,
    originalPrice: 3999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    colors: ['#E8B4B8', '#A3B19B', '#C27C60'],
    occasion: 'Festive',
    size: 'M'
  },
  {
    id: 3,
    name: 'Cotton Kurta Set',
    category: 'Kurtis',
    price: 1999,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    colors: ['#A3B19B', '#EAE5D9', '#A1C4D0'],
    occasion: 'Office Wear',
    size: 'S'
  },
  {
    id: 4,
    name: 'Block Print Co-ord Set',
    category: 'Co-ord Sets',
    price: 2299,
    originalPrice: 2999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    colors: ['#222222', '#EAE5D9', '#C27C60'],
    occasion: 'Daily Wear',
    size: 'L'
  },
  {
    id: 5,
    name: 'Kundan Neckpiece Saree Edit',
    category: 'Sarees',
    price: 3599,
    originalPrice: 4499,
    badge: '-20%',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    colors: ['#D4AF37', '#EAE5D9', '#E8B4B8'],
    occasion: 'Wedding',
    size: 'Free Size'
  },
  {
    id: 6,
    name: 'Lehenga Set',
    category: 'Lehengas',
    price: 8999,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    colors: ['#E8B4B8', '#D4AF37', '#EAE5D9'],
    occasion: 'Wedding',
    size: 'M'
  },
  {
    id: 7,
    name: 'Embroidered Midi Dress',
    category: 'Dresses',
    price: 3299,
    originalPrice: null,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    colors: ['#A1C4D0', '#EAE5D9', '#222222'],
    occasion: 'Party',
    size: 'S'
  },
  {
    id: 8,
    name: 'Silk Co-ord Set',
    category: 'Co-ord Sets',
    price: 2799,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    colors: ['#EAE5D9', '#D4AF37', '#C27C60'],
    occasion: 'Festive',
    size: 'M'
  },
  {
    id: 9,
    name: 'Chiffon Saree',
    category: 'Sarees',
    price: 2499,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    colors: ['#222222', '#D4AF37', '#EAE5D9'],
    occasion: 'Party',
    size: 'Free Size'
  },
  {
    id: 10,
    name: 'Straight Kurta Set',
    category: 'Kurtis',
    price: 2199,
    originalPrice: 2999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    colors: ['#A1C4D0', '#EAE5D9', '#E8B4B8'],
    occasion: 'Daily Wear',
    size: 'L'
  },
  {
    id: 11,
    name: 'Embroidered Lehenga',
    category: 'Lehengas',
    price: 7999,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    colors: ['#A3B19B', '#D4AF37', '#EAE5D9'],
    occasion: 'Wedding',
    size: 'M'
  },
  {
    id: 12,
    name: 'Printed Maxi Dress',
    category: 'Dresses',
    price: 2299,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    colors: ['#C27C60', '#EAE5D9', '#A3B19B'],
    occasion: 'Travel',
    size: 'S'
  },
];
