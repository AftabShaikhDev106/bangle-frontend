export const collectionsCategories = [
  {
    id: 'all-collections',
    name: 'All Collections',
    isGridIcon: true,
    count: 432
  },
  {
    id: 'bridal-wear',
    name: 'Bridal Wear',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80',
    count: 86
  },
  {
    id: 'festive-wear',
    name: 'Festive Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
    count: 112
  },
  {
    id: 'everyday-ethnic',
    name: 'Everyday Ethnic',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80',
    count: 94
  },
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    count: 65
  },
  {
    id: 'lehengas',
    name: 'Lehengas',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
    count: 76
  },
  {
    id: 'sarees',
    name: 'Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    count: 124
  },
  {
    id: 'coord-sets',
    name: 'Co-ord Sets',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    count: 52
  },
  {
    id: 'kurta-sets',
    name: 'Kurta Sets',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80',
    count: 98
  }
];

export const collectionsFilterOptions = {
  categories: [
    { label: 'Sarees', count: 124 },
    { label: 'Kurtas', count: 98 },
    { label: 'Lehengas', count: 76 },
    { label: 'Dresses', count: 61 },
    { label: 'Co-ord Sets', count: 52 },
    { label: 'Ethnic Wear', count: 41 },
    { label: 'Western Wear', count: 39 },
    { label: 'Anarkalis', count: 32 },
    { label: 'Bottoms', count: 18 },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
  colors: [
    { name: 'Ivory / Cream', hex: '#F7F4EF' },
    { name: 'Blush Pink', hex: '#E8B4B8' },
    { name: 'Sage Green', hex: '#A3B19B' },
    { name: 'Maroon', hex: '#7A1C28' },
    { name: 'Royal Blue', hex: '#1F3A60' },
    { name: 'Onyx Black', hex: '#222222' },
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

export const collectionsProducts = [
  {
    id: 1,
    name: 'Ivory Bloom Saree',
    category: 'Sarees',
    price: 4999,
    originalPrice: 6999,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    colors: ['#F7F4EF', '#E8B4B8', '#D4AF37'],
    occasion: 'Wedding',
    size: 'Free Size'
  },
  {
    id: 2,
    name: 'Blush Heritage Lehenga',
    category: 'Lehengas',
    price: 12999,
    originalPrice: 16999,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    colors: ['#E8B4B8', '#7A1C28', '#F7F4EF'],
    occasion: 'Wedding',
    size: 'M'
  },
  {
    id: 3,
    name: 'Meadow Kurta Set',
    category: 'Kurtas',
    price: 3499,
    originalPrice: 4999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    colors: ['#A3B19B', '#F7F4EF', '#1F3A60'],
    occasion: 'Festive',
    size: 'S'
  },
  {
    id: 4,
    name: 'Noir Embroidered Suit',
    category: 'Ethnic Wear',
    price: 6999,
    originalPrice: 9999,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    colors: ['#222222', '#D4AF37', '#F7F4EF'],
    occasion: 'Party',
    size: 'L'
  },
  {
    id: 5,
    name: 'Mustard Grace Saree',
    category: 'Sarees',
    price: 3999,
    originalPrice: 4999,
    badge: '-20%',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    colors: ['#D4AF37', '#F7F4EF', '#E8B4B8'],
    occasion: 'Festive',
    size: 'Free Size'
  },
  {
    id: 6,
    name: 'Lavender Co-ord Set',
    category: 'Co-ord Sets',
    price: 3299,
    originalPrice: 4499,
    badge: null,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    colors: ['#E8B4B8', '#F7F4EF', '#A3B19B'],
    occasion: 'Daily Wear',
    size: 'M'
  },
  {
    id: 7,
    name: 'Ivory Anarkali Set',
    category: 'Anarkalis',
    price: 7999,
    originalPrice: 10999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    colors: ['#F7F4EF', '#D4AF37', '#E8B4B8'],
    occasion: 'Wedding',
    size: 'S'
  },
  {
    id: 8,
    name: 'Maroon Regal Lehenga',
    category: 'Lehengas',
    price: 14999,
    originalPrice: 19999,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    colors: ['#7A1C28', '#D4AF37', '#F7F4EF'],
    occasion: 'Wedding',
    size: 'M'
  },
  {
    id: 9,
    name: 'Midnight Saree',
    category: 'Sarees',
    price: 4299,
    originalPrice: 5999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    colors: ['#222222', '#1F3A60', '#F7F4EF'],
    occasion: 'Party',
    size: 'Free Size'
  },
  {
    id: 10,
    name: 'Sage Embroidered Suit',
    category: 'Kurtas',
    price: 5499,
    originalPrice: 7999,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    colors: ['#A3B19B', '#F7F4EF', '#D4AF37'],
    occasion: 'Festive',
    size: 'L'
  },
  {
    id: 11,
    name: 'Rust Kurta Set',
    category: 'Kurtas',
    price: 3199,
    originalPrice: 4499,
    badge: null,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    colors: ['#7A1C28', '#F7F4EF', '#D4AF37'],
    occasion: 'Daily Wear',
    size: 'M'
  },
  {
    id: 12,
    name: 'Royal Purple Lehenga',
    category: 'Lehengas',
    price: 15999,
    originalPrice: 21999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    colors: ['#1F3A60', '#7A1C28', '#F7F4EF'],
    occasion: 'Wedding',
    size: 'L'
  },
];
