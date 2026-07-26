export interface ProductService {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  providerId: string;
  providerName: string;
  basePrice: number;
  rating: number;
  reviewCount: number;
  turnaroundTime: string;
  expressAvailable: boolean;
  image: string;
  description: string;
  specifications: {
    materials: string[];
    finishes: string[];
    turnaround: string;
  };
}

export const MOCK_PRODUCTS: ProductService[] = [
  {
    id: 'prod-101',
    name: 'Luxury Velvet Soft-Touch Business Cards',
    category: 'Business Branding & Print',
    categoryId: 'business-branding',
    providerId: 'prov-1',
    providerName: 'Apex Craft Studio',
    basePrice: 19.99,
    rating: 4.9,
    reviewCount: 342,
    turnaroundTime: '2-Hour Express',
    expressAvailable: true,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    description: 'Ultra-thick 16pt & 32pt cardstock with velvet touch lamination and optional gold foil accents.',
    specifications: {
      materials: ['14pt Standard', '16pt Heavyweight', '32pt Ultra-Thick Double Layer'],
      finishes: ['Silky Matte', 'Velvet Touch', 'Gold Foil Accent'],
      turnaround: '2-Hour Express or Standard 24h',
    },
  },
  {
    id: 'prod-102',
    name: 'Custom Embroidered Fleece Hoodie',
    category: 'Apparel & Embroidery',
    categoryId: 'apparel-embroidery',
    providerId: 'prov-2',
    providerName: 'Metro Design Lab',
    basePrice: 34.50,
    rating: 4.8,
    reviewCount: 189,
    turnaroundTime: 'Same Day Express',
    expressAvailable: true,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
    description: 'Premium 100% organic cotton hoodie with high-density precision chest & sleeve embroidery.',
    specifications: {
      materials: ['80/20 Organic Cotton Fleece', 'Heavyweight 400 GSM Terry'],
      finishes: ['High-Density Embroidery', 'Chest & Sleeve Monogram'],
      turnaround: 'Same Day (4 Hours)',
    },
  },
  {
    id: 'prod-103',
    name: 'Rapid Engineering SLA 3D Prototype',
    category: '3D Printing & Prototyping',
    categoryId: '3d-printing-prototyping',
    providerId: 'prov-3',
    providerName: 'City Maker Hub',
    basePrice: 28.00,
    rating: 4.95,
    reviewCount: 96,
    turnaroundTime: '3-Hour Express',
    expressAvailable: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    description: 'High-precision SLA resin 3D printing with 50-micron layer resolution for engineering parts & enclosures.',
    specifications: {
      materials: ['Tough Resin', 'Standard Clear Resin', 'ABS-Like Polymer'],
      finishes: ['Sanded & Polished', 'UV Sealed Matte'],
      turnaround: '3 Hours Express',
    },
  },
  {
    id: 'prod-104',
    name: 'Heavy-Duty Outdoor Vinyl Banner',
    category: 'Signage & Large Format',
    categoryId: 'signage-displays',
    providerId: 'prov-4',
    providerName: 'Swift Print & Sign',
    basePrice: 42.00,
    rating: 4.75,
    reviewCount: 215,
    turnaroundTime: '2-Hour Express',
    expressAvailable: true,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    description: 'Weatherproof 13oz vinyl banner with nickel grommets & reinforced heat-welded hems.',
    specifications: {
      materials: ['13oz Matte Vinyl', '18oz Heavy Outdoor Vinyl', 'Wind Mesh Vinyl'],
      finishes: ['Reinforced Hems & Grommets', 'Pole Pockets'],
      turnaround: '2-Hour Express',
    },
  },
  {
    id: 'prod-105',
    name: 'Laser Engraved Stainless Steel Tumbler',
    category: 'Custom Gifts & Laser Engraving',
    categoryId: 'custom-gifts-laser',
    providerId: 'prov-1',
    providerName: 'Apex Craft Studio',
    basePrice: 24.99,
    rating: 4.9,
    reviewCount: 142,
    turnaroundTime: 'Same Day',
    expressAvailable: true,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    description: 'Double-wall vacuum insulated 20oz stainless tumbler with permanent fiber laser vector engraving.',
    specifications: {
      materials: ['18/8 Food Grade Stainless Steel'],
      finishes: ['Matte Black Laser Etched', 'Brushed Steel Silver'],
      turnaround: '2 to 4 Hours',
    },
  },
  {
    id: 'prod-106',
    name: 'Corporate Brand Identity & Logo Package',
    category: 'Graphic & Creative Services',
    categoryId: 'graphic-creative-services',
    providerId: 'prov-2',
    providerName: 'Metro Design Lab',
    basePrice: 149.00,
    rating: 5.0,
    reviewCount: 88,
    turnaroundTime: '24 Hours',
    expressAvailable: false,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    description: 'Complete brand guide, vector logo package (AI, EPS, SVG, PNG), font pairings, and social kit.',
    specifications: {
      materials: ['Vector Master Files (AI, SVG, PDF)'],
      finishes: ['Complete Brand Guidelines'],
      turnaround: '24-48 Hours',
    },
  },
];
