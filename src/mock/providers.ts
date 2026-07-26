export interface LocalServiceProvider {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  distance: string;
  address: string;
  expressFulfillment: boolean;
  avatar: string;
  specialties: string[];
}

export const MOCK_PROVIDERS: LocalServiceProvider[] = [
  {
    id: 'prov-1',
    name: 'Apex Craft & Print Studio',
    verified: true,
    rating: 4.9,
    reviewCount: 482,
    distance: '0.8 miles away',
    address: '142 Market Street, Downtown',
    expressFulfillment: true,
    avatar: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&auto=format&fit=crop&q=80',
    specialties: ['Business Cards', 'Laser Engraving', 'Custom Packaging'],
  },
  {
    id: 'prov-2',
    name: 'Metro Design & Apparel Lab',
    verified: true,
    rating: 4.85,
    reviewCount: 310,
    distance: '1.4 miles away',
    address: '88 Tech Boulevard, Suite 200',
    expressFulfillment: true,
    avatar: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&auto=format&fit=crop&q=80',
    specialties: ['Custom Apparel', 'Embroidery', 'Brand Identity'],
  },
  {
    id: 'prov-3',
    name: 'City Maker & 3D Hub',
    verified: true,
    rating: 4.95,
    reviewCount: 194,
    distance: '2.1 miles away',
    address: '500 Innovation Way',
    expressFulfillment: true,
    avatar: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&auto=format&fit=crop&q=80',
    specialties: ['3D Printing', 'Laser Cutting', 'Rapid Prototyping'],
  },
  {
    id: 'prov-4',
    name: 'Swift Sign & Large Format Works',
    verified: true,
    rating: 4.8,
    reviewCount: 265,
    distance: '2.8 miles away',
    address: '120 Industrial Park Road',
    expressFulfillment: true,
    avatar: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&auto=format&fit=crop&q=80',
    specialties: ['Vinyl Banners', 'Acrylic Signage', 'Window Graphics'],
  },
];
