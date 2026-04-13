export interface Service {
  id: string;
  name: string;
  nameEn: string;
  nameKo: string;
  description: string;
  descriptionEn: string;
  descriptionKo: string;
  image: string;
  category: 'massage' | 'hair' | 'skincare';
  duration: number;
  price: number;
  variants?: ServiceVariant[];
  featured?: boolean;
}

export interface ServiceVariant {
  duration: number;
  price: number;
}

export interface PriceItem {
  id: string;
  name: string;
  nameEn: string;
  nameKo: string;
  description?: string;
  descriptionEn?: string;
  descriptionKo?: string;
  duration: string;
  price: number;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  titleKo: string;
  excerpt: string;
  excerptEn: string;
  excerptKo: string;
  image: string;
  date: string;
  slug: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'space' | 'services' | 'staff' | 'customers';
}

export interface Branch {
  name: string;
  address: string;
  addressEn: string;
  addressKo: string;
  phone: string;
  mapUrl: string;
}

export type Language = 'vi' | 'en' | 'ko';
