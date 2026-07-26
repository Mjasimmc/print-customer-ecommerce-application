export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  itemCount: number;
  featured?: boolean;
  image: string;
  subcategories: string[];
}

export const MOCK_CATEGORIES: ServiceCategory[] = [
  {
    id: 'business-branding',
    name: 'Business Branding & Print',
    icon: '📇',
    description: 'Business cards, letterheads, brochures, presentation folders & collateral.',
    itemCount: 48,
    featured: true,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Luxury Business Cards', 'Corporate Stationery', 'Brochures & Flyers', 'Presentation Folders'],
  },
  {
    id: 'apparel-embroidery',
    name: 'Apparel & Embroidery',
    icon: '👕',
    description: 'Custom embroidered hoodies, printed t-shirts, uniforms & merchandise.',
    itemCount: 52,
    featured: true,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Embroidered Hoodies', 'Screen Printed Tees', 'Corporate Uniforms', 'Custom Caps'],
  },
  {
    id: '3d-printing-prototyping',
    name: '3D Printing & Prototyping',
    icon: '🧩',
    description: 'FDM & SLA resin 3D printing, rapid engineering prototypes & custom parts.',
    itemCount: 34,
    featured: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Resin 3D Prints', 'FDM Industrial Prototypes', 'Architectural Models', 'Custom Enclosures'],
  },
  {
    id: 'signage-displays',
    name: 'Signage & Large Format',
    icon: '🖼️',
    description: 'Vinyl outdoor banners, acrylic signs, trade show displays & window graphics.',
    itemCount: 29,
    featured: true,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Outdoor Vinyl Banners', 'Acrylic Wall Logos', 'Roll-Up Standees', 'Neon LED Signs'],
  },
  {
    id: 'custom-gifts-laser',
    name: 'Custom Gifts & Laser Engraving',
    icon: '🎁',
    description: 'Laser engraved wood, personalized metal tumblers, awards & corporate gifts.',
    itemCount: 41,
    featured: true,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Laser Engraved Gifts', 'Custom Tumblers', 'Crystal Trophies', 'Leather Accessories'],
  },
  {
    id: 'graphic-creative-services',
    name: 'Graphic & Creative Services',
    icon: '🎨',
    description: 'Logo design, brand identity packages, vector illustration & photo retouching.',
    itemCount: 38,
    featured: true,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Brand Identity Design', 'Vector Illustration', 'Packaging Graphics', 'Photo Retouching'],
  },
  {
    id: 'photo-video-production',
    name: 'Photo & Video Production',
    icon: '📸',
    description: 'Commercial product photography, event videography & studio sessions.',
    itemCount: 26,
    featured: false,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Product Photography', 'Corporate Videography', 'Portrait Sessions', 'Drone Aerial Shots'],
  },
  {
    id: 'packaging-labels',
    name: 'Custom Packaging & Labels',
    icon: '📦',
    description: 'Printed mailer boxes, product sleeves, pouch packaging & die-cut labels.',
    itemCount: 33,
    featured: false,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=80',
    subcategories: ['Printed Mailer Boxes', 'Product Sleeves', 'Die-Cut Stickers', 'Roll Labels'],
  },
];
