export const navCategories = [
  { name: 'HOME', href: '/' },
  {
    name: 'WOMEN',
    href: '/women',
    hasDropdown: true,
    subCategories: [
      { name: 'Ethnic Wear', href: '/women?category=ethnic' },
      { name: 'Western Wear', href: '/women?category=western' },
      { name: 'Dresses', href: '/women?category=dresses' },
      { name: 'Tops', href: '/women?category=tops' },
      { name: 'Bottoms', href: '/women?category=bottoms' },
    ]
  },
  { name: 'JEWELRY', href: '/jewelry' },
  { name: 'COLLECTIONS', href: '/collections' },
  { name: 'NEW ARRIVALS', href: '/women' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
];

export const quickCategories = [
  { id: 1, name: 'Women', color: 'from-amber-100 to-amber-200' },
  { id: 2, name: 'New', color: 'from-stone-200 to-stone-300' },
  { id: 3, name: 'Dresses', color: 'from-orange-100 to-rose-200' },
  { id: 4, name: 'Tops', color: 'from-zinc-200 to-neutral-300' },
  { id: 5, name: 'Bottoms', color: 'from-amber-200 to-stone-400' },
  { id: 6, name: 'Ethnic', color: 'from-red-100 to-amber-200' },
  { id: 7, name: 'Kurtas', color: 'from-yellow-100 to-amber-300' },
  { id: 8, name: 'Co-ord Sets', color: 'from-stone-300 to-amber-100' },
  { id: 9, name: 'Jewelry', color: 'from-amber-300 to-yellow-500' },
  { id: 10, name: 'Handbags', color: 'from-orange-200 to-stone-400' },
  { id: 11, name: 'Footwear', color: 'from-stone-200 to-amber-200' },
  { id: 12, name: 'Accessories', color: 'from-neutral-200 to-stone-300' },
  { id: 13, name: 'Sale', color: 'from-rose-200 to-red-300' },
];

export const curatedCategories = [
  {
    id: 'western',
    subTitle: 'COLLECTION',
    title: 'Western Collection',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    colSpanClass: 'lg:col-start-1 lg:col-span-1 lg:row-start-1',
    heightClass: 'h-[360px] sm:h-[400px] lg:h-[440px]',
  },
  {
    id: 'ethnic',
    subTitle: 'COLLECTION',
    title: 'Ethnic Collection',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    colSpanClass: 'lg:col-start-2 lg:col-span-1 lg:row-start-1',
    heightClass: 'h-[360px] sm:h-[400px] lg:h-[440px]',
  },
  {
    id: 'office',
    subTitle: 'COLLECTION',
    title: 'Office Wear',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    colSpanClass: 'col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-2',
    heightClass: 'h-[200px] sm:h-[220px] lg:h-[240px]',
  },
  {
    id: 'party',
    subTitle: 'COLLECTION',
    title: 'Party Wear',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    colSpanClass: 'col-span-1 sm:col-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-2',
    heightClass: 'h-[360px] sm:h-[400px] lg:h-[460px]',
  },
  {
    id: 'wedding',
    subTitle: 'COLLECTION',
    title: 'Wedding Collection',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    colSpanClass: 'col-span-1 sm:col-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-3',
    heightClass: 'h-[360px] sm:h-[400px] lg:h-[440px]',
  },
  {
    id: 'jewelry',
    subTitle: 'COLLECTION',
    title: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    colSpanClass: 'col-span-1 sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-3',
    heightClass: 'h-[200px] sm:h-[220px] lg:h-[240px]',
  },
];

export const bestSellers = [
  {
    id: 1,
    category: 'Outerwear',
    name: 'Camel Wool Overcoat',
    price: 8990,
    originalPrice: 12990,
    discount: '-31%',
    rating: 4.8,
    sizes: ['XS', 'S', 'M', 'L'],
    bgGradient: 'from-[#D2C3B0] via-[#C5B49F] to-[#B3A08A]',
  },
  {
    id: 2,
    category: 'Dresses',
    name: 'Cowl Neck Slip Dress',
    price: 4490,
    originalPrice: 5990,
    discount: '-25%',
    rating: 4.9,
    sizes: ['S', 'M', 'L'],
    bgGradient: 'from-[#E7DDD0] via-[#DDD0BF] to-[#CEBEAA]',
  },
  {
    id: 3,
    category: 'Sets',
    name: 'Belted Wide-Leg Jumpsuit',
    price: 6290,
    originalPrice: null,
    discount: null,
    rating: 4.7,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    bgGradient: 'from-[#3A3530] via-[#2A2622] to-[#1E1B18]',
    darkPlaceholder: true,
  },
  {
    id: 4,
    category: 'Knits',
    name: 'Cable Knit Turtleneck',
    price: 3790,
    originalPrice: 4990,
    discount: '-24%',
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    bgGradient: 'from-[#E9E4DC] via-[#DBD4C8] to-[#C9BFB0]',
  },
];

export const newArrivals = [
  {
    id: 101,
    category: 'Dresses',
    name: 'Linen Column Dress',
    price: 5290,
    isNew: true,
    bgGradient: 'from-[#EFE7DC] to-[#DECFC0]',
  },
  {
    id: 102,
    category: 'Outerwear',
    name: 'Structured Trench',
    price: 9990,
    isNew: true,
    bgGradient: 'from-[#D2C3B0] to-[#BCAB97]',
  },
  {
    id: 103,
    category: 'Sets',
    name: 'Silk Camisole Set',
    price: 4790,
    isNew: true,
    bgGradient: 'from-[#DFD3C4] to-[#CBBBA8]',
  },
  {
    id: 104,
    category: 'Bottoms',
    name: 'Tailored Trouser',
    price: 3990,
    isNew: true,
    bgGradient: 'from-[#2D2A26] to-[#1C1A18]',
    darkPlaceholder: true,
  },
  {
    id: 105,
    category: 'Ethnic',
    name: 'Cotton Kurta',
    price: 2990,
    isNew: true,
    bgGradient: 'from-[#C48970] to-[#A66952]',
    darkPlaceholder: true,
  },
  {
    id: 106,
    category: 'Jewelry',
    name: 'Gold Chain Set',
    price: 3490,
    isNew: true,
    bgGradient: 'from-[#E5D2B5] to-[#CAA87A]',
  },
];

export const occasions = [
  {
    id: 'office',
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'casual',
    name: 'Casual',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vacation',
    name: 'Vacation',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'party',
    name: 'Party',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'date-night',
    name: 'Date Night',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80',
  },
];

export const valueProps = [
  {
    id: 1,
    title: 'Free Shipping',
    desc: 'On all orders above ₹999',
    iconName: 'Truck',
  },
  {
    id: 2,
    title: 'Easy Returns',
    desc: '30-day hassle free returns',
    iconName: 'RotateCcw',
  },
  {
    id: 3,
    title: 'Premium Quality',
    desc: 'Sourced from finest ateliers',
    iconName: 'Sparkles',
  },
  {
    id: 4,
    title: 'Secure Payment',
    desc: '100% encrypted checkout',
    iconName: 'ShieldCheck',
  },
  {
    id: 5,
    title: '24×7 Support',
    desc: 'Style concierge always on',
    iconName: 'Headphones',
  },
  {
    id: 6,
    title: 'Fast Delivery',
    desc: '2-4 day metro dispatch',
    iconName: 'Zap',
  },
];

export const testimonials = [
  {
    id: 1,
    initial: 'A',
    name: 'Ananya R.',
    city: 'Bengaluru',
    rating: 5,
    text: '“The tailoring is exceptional. Everything I\'ve ordered feels considered, elegant, and made to last a decade not a season.”',
  },
  {
    id: 2,
    initial: 'M',
    name: 'Meera K.',
    city: 'Mumbai',
    rating: 5,
    text: '“Finally, a homegrown label with international polish. The linen dress became my summer uniform. Packaging feels like a gift.”',
  },
  {
    id: 3,
    initial: 'I',
    name: 'Ishita D.',
    city: 'New Delhi',
    rating: 5,
    text: '“Their ethnic edit is my go to for occasions. Beautiful embroidery, and the fit is spot on. Zero fuss returns experience.”',
  },
];

export const feedPosts = [
  { id: 1, tag: '#InMaisonOra', bgGradient: 'from-[#DDD2C1] to-[#C8B8A2]' },
  { id: 2, tag: '#InMaisonOra', bgGradient: 'from-[#3A332C] to-[#201B17]' },
  { id: 3, tag: '#InMaisonOra', bgGradient: 'from-[#EBE0D2] to-[#D2C0AB]' },
  { id: 4, tag: '#InMaisonOra', bgGradient: 'from-[#C27C60] to-[#9C573C]' },
  { id: 5, tag: '#InMaisonOra', bgGradient: 'from-[#DBCBB5] to-[#BFA88D]' },
  { id: 6, tag: '#InMaisonOra', bgGradient: 'from-[#4D4238] to-[#2B231D]' },
  { id: 7, tag: '#InMaisonOra', bgGradient: 'from-[#C5B7A5] to-[#9F8F7B]' },
  { id: 8, tag: '#InMaisonOra', bgGradient: 'from-[#6E4F42] to-[#453028]' },
];

export const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '#' },
    { name: 'Dresses', href: '#' },
    { name: 'Tops', href: '#' },
    { name: 'Bottoms', href: '#' },
    { name: 'Ethnic Wear', href: '#' },
    { name: 'Jewelry', href: '#' },
    { name: 'Sale', href: '#' },
  ],
  collections: [
    { name: 'Spring/Summer 26', href: '#' },
    { name: 'Wedding', href: '#' },
    { name: 'Office', href: '#' },
    { name: 'Vacation Edit', href: '#' },
    { name: 'Party', href: '#' },
    { name: 'Occasion', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns & Exchange', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'Order Tracking', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Ateliers', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Journal', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
};
