# Quantumine Landing Page

A premium landing page for Quantumine - một platform trading thuật toán tiên tiến tại Việt Nam, featuring 3D interactive animations và modern web technologies.

## 🚀 Features

- **3D Interactive Hero Section** - Three.js animation hiển thị visualizations của quantitative trading concepts
- **Multi-language Support** - Hỗ trợ tiếng Việt và tiếng Anh với chuyển đổi liền mạch
- **Responsive Design** - Tối ưu cho mọi thiết bị từ mobile đến desktop
- **Lead Generation System** - Nhiều forms thu thập leads với validation và analytics tracking
- **Modern UI Components** - Glassmorphism design với smooth animations
- **Performance Optimized** - Fast loading với Core Web Vitals optimization
- **SEO Ready** - Meta tags, sitemap, robots.txt configured

## 🛠 Tech Stack

### Core Framework
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18+** - Modern React patterns

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Framer Motion** - Smooth animations
- **Custom Component Library** - Modular, reusable components

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React integration for Three.js
- **@react-three/drei** - Additional utilities

### Data & Forms
- **Recharts** - Data visualization
- **Zod** - Schema validation
- **React Intersection Observer** - Scroll-triggered effects

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── analytics/     # Analytics endpoints
│   │   ├── contact/       # Contact form handler
│   │   └── newsletter/    # Newsletter signup
│   ├── about/             # About page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── robots.ts          # SEO configuration
├── src/
│   ├── components/        # React components
│   │   ├── 3d/           # Three.js components
│   │   ├── charts/       # Data visualization
│   │   ├── forms/        # Form components
│   │   ├── navigation/   # Header/navigation
│   │   ├── sections/     # Page sections
│   │   ├── stats/        # Statistics components
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Static data files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── styles/           # Additional CSS files
│   └── types/            # TypeScript definitions
├── public/               # Static assets
│   ├── asset/           # 3D models and textures
│   ├── data/            # CSV data files
│   └── logo/            # Brand assets
└── docs/                # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Landing page"
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) trong browser

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
```

## 📝 Key Components

### Hero Section
- `HeroSection` - Main landing area với 3D animation
- `QuantumModel` - Three.js 3D model component
- `GradientOrbs` - Background animation effects

### Content Sections
- `CommunitySection` - Community showcase
- `PythonLibrarySection` - Technical product information
- `NewsSection` - Content updates
- `AIAgentSection` - AI product demonstration
- `ContactForms` - Lead generation forms

### UI Components
- `GlassmorphismCard` - Modern card design
- `AnimatedChart` - Data visualization components
- `ScrollToTopButton` - Navigation utility
- `Toaster` - Notification system

## 🌐 Multi-language Support

Website hỗ trợ 2 ngôn ngữ:
- **Vietnamese (vn)** - Ngôn ngữ mặc định
- **English (en)** - Alternative language

Language switching available trong header navigation.

## 📊 Analytics Integration

- **Google Analytics 4** - Page views và user behavior
- **Event Tracking** - Form submissions, demo requests, product interactions
- **Custom Analytics Hook** - `useAnalytics` for additional tracking

## 🎨 Design System

### Colors
- Primary: Blue/teal gradient themes
- Background: Dark gradient (gray-900 base)
- Accent: Custom blue và green highlights

### Typography
- Modern sans-serif font stack
- Responsive typography scaling
- Vietnamese character support

### Components
- Glassmorphism effects
- Smooth hover transitions
- Loading states và skeletons
- Mobile-first responsive design

## 🔧 Configuration

### Environment Variables
Create `.env.local` file:
```bash
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Tailwind Configuration
Custom configuration trong `tailwind.config.ts`:
- Extended color palette
- Custom animations
- Component variants

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1920px+
- **Ultra-wide**: 1920px+

## 🚀 Performance Features

- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Components load as needed
- **3D Optimization** - Efficient Three.js rendering
- **Bundle Analysis** - Optimized asset delivery

## 🔒 Security

- **Form Validation** - Zod schema validation
- **Type Safety** - Full TypeScript coverage
- **Secure Headers** - Next.js security defaults
- **Input Sanitization** - Protected form inputs

## 📈 SEO Features

- **Meta Tags** - Optimized for search engines
- **Structured Data** - JSON-LD markup (partial)
- **XML Sitemap** - Auto-generated sitemap
- **Robots.txt** - Search engine guidelines
- **Vietnamese Keywords** - Optimized for Vietnamese market

## 🧪 Testing

Testing infrastructure is available for setup:
```bash
# Future implementation
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run test:a11y   # Accessibility tests
```

## 🚀 Deployment

### Build Production
```bash
npm run build
npm run start
```

### Static Export (if needed)
```bash
npm run build && npm run export
```

## 📚 Documentation

- **PRD**: `docs/prd.md` - Product Requirements Document
- **Improvements**: Various improvement documentation files
- **Component Docs**: Inline documentation trong components

## 🤝 Contributing

1. Follow TypeScript best practices
2. Use existing component patterns
3. Maintain responsive design principles
4. Test across different devices
5. Follow code style guidelines

## 📄 License

Proprietary - Quantumine Company

## 🔄 Version History

- **v1.0.0** - Initial release với full feature set
- **v2.0.0** - Enhanced 3D animations và performance improvements

## 📞 Support

For technical issues or questions:
- Email: support@quantumine.com
- Documentation: Check `docs/` folder
- Issues: Create issue trong repository

---

**Built với ❤️ by Quantumine Team**