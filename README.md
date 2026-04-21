# Developer Portfolio

A beautiful, modern developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

## 🎨 Features

✨ **Dark Mode Design** - Modern dark theme with vibrant neon accents (cyan, pink, purple, lime)  
🎭 **Smooth Animations** - Fade-in, slide-up, floating, and glow effects throughout  
📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop  
⚡ **High Performance** - Optimized with Next.js for fast load times  
🎯 **Interactive Elements** - Hover effects, transitions, and micro-interactions  
♿ **Accessible** - Semantic HTML and ARIA labels for accessibility  

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or open the project**
```bash
cd "d:\My Portfolio"
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage (all sections)
│   └── globals.css          # Global styles & animations
├── components/
│   ├── Navigation.tsx       # Top navigation bar
│   ├── Hero.tsx             # Hero/landing section
│   ├── FeaturedProjects.tsx # Projects showcase
│   ├── Skills.tsx           # Skills by category
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with links
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🎨 Design System

### Colors
- **Dark Base**: `#0a0a0a` (dark-950)
- **Cyan Accent**: `#00d9ff`
- **Pink Accent**: `#ff006e`
- **Purple Accent**: `#b537f2`
- **Lime Accent**: `#39ff14`

### Animations
- `fade-in` - Smooth opacity transition
- `slide-up` - Content slides up with fade
- `glow` - Glowing shadow effect
- `float` - Gentle floating motion

### Components
- `.glow-border` - Bordered element with cyan glow
- `.glow-text` - Gradient text effect
- `.btn-primary` - Main CTA button
- `.btn-secondary` - Secondary button

## 📝 Customization

### Update Content

**Hero Section** - Edit `components/Hero.tsx`:
- Change headline, description, and CTA text
- Update social media links

**Projects** - Edit `components/FeaturedProjects.tsx`:
- Update the `projects` array with your work
- Replace emojis with project images
- Update tech stack tags

**Skills** - Edit `components/Skills.tsx`:
- Modify `skillCategories` array
- Add/remove skill categories
- Update skill names

**About** - Edit `components/About.tsx`:
- Update bio and background text
- Modify stats (projects, years, clients)

**Contact** - Edit `components/Contact.tsx`:
- Update email address and social links
- Customize contact form fields

### Styling

All styling is in `app/globals.css` and configured in `tailwind.config.ts`:
- Modify colors in the Tailwind config
- Adjust animations by editing keyframes
- Customize component utilities

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Your portfolio is live! 🎉

### Deploy to Netlify

1. Run `npm run build`
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 📦 Dependencies

- **Next.js** - React framework with SSR
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 💡 Tips

- **Change Logo**: Update text "Dev" in `Navigation.tsx`
- **Add Pages**: Create new files in the `app/` folder
- **Smooth Scrolling**: Already enabled in globals.css
- **Dark Mode**: Always active (configured in Tailwind)
- **Mobile Menu**: Automatically appears on small screens

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using Next.js & Tailwind CSS**
