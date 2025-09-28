# Classic Cuts Barbershop Website

A modern, responsive static website for a barbershop built with React, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Welcoming hero section with business information
- **Services Page**: Catalog of barbershop services with booking via WhatsApp
- **Products Page**: Shop for grooming products with WhatsApp integration
- **Jobs Page**: Career opportunities and job listings
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **WhatsApp Integration**: Direct contact for bookings and product inquiries

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   └── Header.tsx    # Navigation component
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Products.tsx
│   └── Jobs.tsx
├── data/             # Static JSON data files
│   ├── services.json
│   ├── products.json
│   └── jobs.json
├── lib/
│   └── utils.ts      # Utility functions
└── App.tsx           # Main app component with routing
```

## Customization

### WhatsApp Integration

Update the phone number in the WhatsApp links throughout the application:

- Change `+60103802579` to your actual WhatsApp business number
- Update the message templates as needed

### Business Information

Update the following in the code:

- Business name and location in `src/pages/Home.tsx`
- Operating hours
- Services and pricing in `src/data/services.json`
- Products and pricing in `src/data/products.json`
- Job listings in `src/data/jobs.json`

### Styling and Theme

The website uses a black and white color scheme suitable for a barbershop:

- Primary colors: Black (#000000) and White (#FFFFFF)
- The theme can be customized in `tailwind.config.js`
- CSS variables are defined in `src/index.css`

## Development

This project was bootstrapped with Vite and follows modern React development practices:

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for utility-first styling
- Component-based architecture
- Responsive design principles

## Deployment

The website is built as a static site and can be deployed to any static hosting service:

1. Run `npm run build` to create the production build
2. Deploy the `dist` folder to your hosting service
3. Configure your hosting service to serve `index.html` for all routes (SPA mode)

Popular hosting options:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
