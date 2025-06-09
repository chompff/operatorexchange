# Tenderforce - SaaS Project Structure

This document outlines the restructured architecture of Tenderforce, a comprehensive procurement SaaS platform.

## 🏗️ Project Architecture

```
src/
├── app/
│   └── routes.tsx                 # Centralized routing configuration
├── features/
│   ├── tools/                     # Modular procurement tools
│   │   ├── Index.tsx             # Main tools landing page
│   │   ├── AanbestedingsplichtCheck.tsx
│   │   ├── AanbestedingsplichtCheckResult.tsx
│   │   ├── Results.tsx
│   │   ├── Stappenslang.tsx
│   │   ├── SectoraleVerplichtingencheck.tsx
│   │   ├── Gunningsbriefbouwer.tsx
│   │   ├── WezenlijkeWijzigingscheck.tsx
│   │   ├── Opdrachtramer.tsx
│   │   └── GemengdeOpdrachtKwalificatie.tsx
│   └── auth/                      # Authentication flows
│       ├── Login.tsx             # Login page
│       ├── Register.tsx          # Registration page
│       └── Dashboard.tsx         # User dashboard
├── components/
│   ├── layout/                    # Navigation and layout components
│   │   ├── Layout.tsx            # Main layout wrapper
│   │   ├── Navigation.tsx        # Site navigation
│   │   └── Footer.tsx            # Site footer
│   └── ui/                       # Reusable UI components (shadcn/ui)
├── lib/                          # Core utilities and integrations
│   ├── utils.ts                  # General utilities
│   ├── auth.ts                   # Authentication utilities (Clerk)
│   └── billing.ts                # Billing utilities (Stripe)
├── styles/                       # Global styles and Tailwind
│   ├── globals.css               # Global CSS and Tailwind imports
│   └── button-overlay.css        # Component-specific styles
├── blog/                         # Markdown-based blog system
│   └── README.md                 # Blog structure documentation
├── pages/                        # Static/marketing pages
│   ├── OverTenderforce.tsx
│   ├── Prijzen.tsx
│   ├── Privacybeleid.tsx
│   ├── AlgemeneVoorwaarden.tsx
│   ├── Disclaimer.tsx
│   ├── Support.tsx
│   └── NotFound.tsx
├── hooks/                        # Custom React hooks
├── utils/                        # Utility functions
├── App.tsx                       # Main app component
└── main.tsx                      # App entry point
```

## 🎯 Key Features

### Modular Tool Architecture
- Each procurement tool is a self-contained feature
- Tools can be easily added, removed, or modified
- Consistent interface for all tools
- Reusable components across tools

### Authentication System (Future)
- Clerk integration for user management
- Role-based access control
- Protected routes for premium features
- User dashboard and profile management

### Billing Integration (Future)
- Stripe integration for subscriptions
- Multiple pricing tiers (Free, Pro, Enterprise)
- Feature gating based on subscription level
- Usage tracking and analytics

### Blog System (Future)
- Markdown-based blog posts
- SEO optimization
- Categories and tags
- RSS feed generation

## 🛣️ Routing Structure

### Public Routes
- `/` - Landing page with tool overview
- `/tools/*` - Individual procurement tools
- `/over-tenderforce` - About page
- `/prijzen` - Pricing page
- `/blog` - Blog listing (future)
- `/blog/:slug` - Individual blog posts (future)

### Tool Routes
- `/tools/stappenslang` - Step-by-step procurement guide
- `/tools/sectorale-verplichtingencheck` - Sectoral obligations checker
- `/tools/gunningsbriefbouwer` - Award letter builder
- `/tools/wezenlijke-wijzigingscheck` - Substantial changes checker
- `/tools/opdrachtramer` - Contract framework tool
- `/tools/gemengde-opdracht-kwalificatie` - Mixed contract qualification
- `/tools/aanbestedingsplicht-check` - Procurement obligation checker
- `/tools/results/:code` - Tool results display

### Auth Routes (Future)
- `/auth/login` - User login
- `/auth/register` - User registration
- `/auth/dashboard` - User dashboard

## 🔧 Technology Stack

### Core
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives

### State Management
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Future Integrations
- **Clerk** - Authentication and user management
- **Stripe** - Payment processing and subscriptions
- **Markdown** - Blog content management

## 🚀 Development Workflow

### Adding New Tools
1. Create new component in `src/features/tools/`
2. Add route in `src/app/routes.tsx`
3. Update navigation in `src/components/layout/Navigation.tsx`
4. Add any tool-specific utilities

### Adding New Features
1. Create feature folder in `src/features/`
2. Implement components and utilities
3. Add routes and navigation
4. Update documentation

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Keep component-specific styles in separate CSS files
- Follow the existing design system
- Ensure responsive design across all components

## 📈 Scalability Considerations

### Performance
- Code splitting by feature
- Lazy loading for routes
- Optimized bundle sizes
- Image optimization

### Maintainability
- Clear separation of concerns
- Consistent file structure
- Type safety throughout
- Comprehensive documentation

### Extensibility
- Plugin-like tool architecture
- Configurable routing
- Flexible authentication system
- Modular billing integration

## 🔮 Future Enhancements

### Phase 1: Authentication & Billing
- Implement Clerk authentication
- Add Stripe billing integration
- Create user dashboard
- Implement feature gating

### Phase 2: Advanced Features
- User project management
- Tool usage analytics
- Export capabilities
- Team collaboration features

### Phase 3: Content & Marketing
- Implement blog system
- SEO optimization
- Marketing automation
- Customer support integration

### Phase 4: Enterprise Features
- White-label options
- API access
- Custom integrations
- Advanced analytics

## 🛠️ Getting Started

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

## 📝 Contributing

When contributing to this project:

1. Follow the established folder structure
2. Use TypeScript for all new components
3. Implement responsive design
4. Add proper error handling
5. Update documentation as needed
6. Test across different browsers and devices

This structure provides a solid foundation for scaling Tenderforce into a comprehensive procurement SaaS platform while maintaining code quality and developer experience. 