export const jewelryCategories = [
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80',
    count: 86
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80',
    count: 124
  },
  {
    id: 'bangles',
    name: 'Bangles',
    image: 'https://images.unsplash.com/photo-1611591475285-a36ad5e14391?auto=format&fit=crop&w=400&q=80',
    count: 67
  },
  {
    id: 'rings',
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80',
    count: 52
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
    count: 34
  },
  {
    id: 'sets',
    name: 'Sets',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
    count: 28
  },
  {
    id: 'mangalsutra',
    name: 'Mangalsutra',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80',
    count: 16
  },
  {
    id: 'anklets',
    name: 'Anklets',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=400&q=80',
    count: 12
  },
  {
    id: 'brooches',
    name: 'Brooches',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=400&q=80',
    count: 8
  }
];

export const filterOptions = {
  categories: [
    { label: 'Necklaces', count: 86 },
    { label: 'Earrings', count: 124 },
    { label: 'Bangles', count: 67 },
    { label: 'Rings', count: 52 },
    { label: 'Bracelets', count: 34 },
    { label: 'Sets', count: 28 },
    { label: 'Mangalsutra', count: 16 },
    { label: 'Anklets', count: 12 },
    { label: 'Brooches', count: 8 },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
  colors: [
    { name: 'Gold', hex: '#C59B27' },
    { name: 'Rose Gold', hex: '#D18D80' },
    { name: 'Bronze', hex: '#9E7448' },
    { name: 'Emerald', hex: '#1E6B4C' },
    { name: 'Ruby', hex: '#A82531' },
    { name: 'Sapphire', hex: '#264A7F' },
    { name: 'Onyx', hex: '#222222' },
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

export const jewelryProducts = [
  {
    id: 1,
    name: 'Kundan Choker Necklace Set',
    category: 'Necklaces',
    price: 4999,
    originalPrice: 6999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#D18D80', '#9E7448'],
    occasion: 'Wedding',
    size: 'Free Size'
  },
  {
    id: 2,
    name: 'Minimal Pearl Pendant Necklace',
    category: 'Necklaces',
    price: 2499,
    originalPrice: 3499,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#E5E0D8', '#9E7448'],
    occasion: 'Daily Wear',
    size: 'M'
  },
  {
    id: 3,
    name: 'Temple Necklace Set',
    category: 'Necklaces',
    price: 5999,
    originalPrice: 8999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#9E7448', '#D18D80'],
    occasion: 'Festive',
    size: 'Free Size'
  },
  {
    id: 4,
    name: 'Pearl Layered Necklace',
    category: 'Necklaces',
    price: 3999,
    originalPrice: 5999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#D18D80', '#E5E0D8'],
    occasion: 'Party',
    size: 'L'
  },
  {
    id: 5,
    name: 'Traditional Jhumka Earrings',
    category: 'Earrings',
    price: 2299,
    originalPrice: 3299,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#9E7448', '#D18D80'],
    occasion: 'Festive',
    size: 'Free Size'
  },
  {
    id: 6,
    name: 'Emerald Drop Earrings',
    category: 'Earrings',
    price: 3499,
    originalPrice: 4999,
    badge: null,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#1E6B4C', '#E5E0D8'],
    occasion: 'Party',
    size: 'M'
  },
  {
    id: 7,
    name: 'Pearl Floral Earrings',
    category: 'Earrings',
    price: 1999,
    originalPrice: 2999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#9E7448', '#E5E0D8'],
    occasion: 'Wedding',
    size: 'S'
  },
  {
    id: 8,
    name: 'Gold Hoop Earrings',
    category: 'Earrings',
    price: 1499,
    originalPrice: 2299,
    badge: null,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#9E7448', '#E5E0D8'],
    occasion: 'Daily Wear',
    size: 'S'
  },
  {
    id: 9,
    name: 'Kundan Bangles Set',
    category: 'Bangles',
    price: 3299,
    originalPrice: 4599,
    badge: null,
    image: 'https://images.unsplash.com/photo-1611591475285-a36ad5e14391?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#9E7448', '#D18D80'],
    occasion: 'Wedding',
    size: 'M'
  },
  {
    id: 10,
    name: 'Floral Statement Ring',
    category: 'Rings',
    price: 2199,
    originalPrice: 3299,
    badge: null,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#E5E0D8', '#D18D80'],
    occasion: 'Party',
    size: 'Free Size'
  },
  {
    id: 11,
    name: 'Diamond Cut Bracelet',
    category: 'Bracelets',
    price: 2999,
    originalPrice: 4499,
    badge: null,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#9E7448', '#222222'],
    occasion: 'Office Wear',
    size: 'L'
  },
  {
    id: 12,
    name: 'Mangalsutra',
    category: 'Mangalsutra',
    price: 2499,
    originalPrice: 3699,
    badge: null,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    colors: ['#C59B27', '#222222', '#E5E0D8'],
    occasion: 'Wedding',
    size: 'Free Size'
  },
];
