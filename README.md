# Lam An Spa Website

A luxurious, multi-page spa website featuring Lam An Spa aesthetics, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Multi-language Support**: Vietnamese (default), English, and Korean
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Zen minimalist design with elegant animations
- **7 Main Pages**:
  - Home (Hero slider, About, Services highlights, Price table, Special offers)
  - Gallery (Masonry grid with lightbox)
  - Services (Detailed service cards with filtering)
  - Booking (Online menu & booking form)
  - News (Blog layout)
  - Contact (Contact form with Google Maps)

## Design System

### Colors
- Background: `#FDF8F4` (warm cream)
- Main Text: `#1A1A1A` (near black)
- Gold Accent: `#D4AF37` (imperial gold)
- Secondary: `#4A5D4E` (moss green)

### Typography
- Headings: 'Playfair Display' (serif)
- Body: 'Inter' (sans-serif)

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Carousel**: Swiper

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header & Footer
│   ├── ui/            # Reusable UI components
│   └── sections/      # Page sections
├── contexts/          # React contexts (Language)
├── data/              # Static data & translations
├── pages/             # Route pages
├── types/             # TypeScript interfaces
├── App.tsx            # Main app with routing
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Key Features

### Multi-Language System
The website supports three languages with a custom Language Context:
- Vietnamese (vi)
- English (en)
- Korean (ko)

Switch languages using the language selector in the header.

### Responsive Design
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

### Page Highlights

#### Home Page
- Full-screen hero slider with autoplay
- About section with parallax effects
- Service highlights grid
- Elegant price table
- Special offer banner (20% discount)

#### Gallery Page
- Masonry grid layout
- Category filtering (Space, Services, Staff, Customers)
- Lightbox for full-size image viewing
- Smooth animations on scroll

#### Services Page
- Service cards with images, descriptions, and pricing
- Category tabs (All, Massage, Hair Care, Skin Care)
- Featured "Lam An Signature Massage"

#### Booking Page
- Digital service menu with tabs
- Comprehensive booking form
- Branch selection (2 locations in Hue)
- Date and time slot picker
- Success modal confirmation

#### News Page
- Featured article showcase
- Blog grid layout
- Date formatting based on language
- Read more functionality

#### Contact Page
- Contact information for 2 branches
- Contact form with validation
- Embedded Google Maps for both locations
- Operating hours display

## Contact Information

- **Hotline**: 0905 686 226
- **Email**: maiaspahue@gmail.com
- **Branch 1**: 21 Đống Đa, TP. Huế
- **Branch 2**: 103 Tùng Thiện Vương, TP. Huế
- **Hours**: 9:00 AM - 10:00 PM (Daily)

## Notes

- All images are currently placeholder URLs from Unsplash
- Forms console.log submissions (no backend integration yet)
- Google Maps use placeholder embed URLs
- Replace placeholder content with actual content and images

## License

All rights reserved © 2024 Lam An Spa
