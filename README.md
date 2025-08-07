# Resume Lite - Lightweight Resume Builder

A lightweight, static resume builder built with Vite, TypeScript, and TailwindCSS. This is a simplified version of the original Next.js resume builder, optimized for static hosting and minimal bundle size.

## 🚀 Features

- **Bilingual Support**: English and Spanish versions
- **PDF Export**: High-quality PDF generation with exact formatting
- **Dark/Light Theme**: Automatic system preference detection + manual toggle
- **Responsive Design**: Mobile-friendly with print optimization
- **US Letter Format**: Professional resume layout (8.5" x 11")
- **Static Hosting Ready**: No server dependencies, deploy anywhere

## 📦 Bundle Size

- **Total Bundle**: ~180KB gzipped (vs 1MB+ in Next.js version)
- **Dependencies**: Only 3 runtime dependencies (html2canvas, jsPDF, core libs)
- **First Paint**: <100ms on fast networks

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm or pnpm

### Setup
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🎯 Key Improvements Over Original

1. **90% Bundle Size Reduction**: From ~1MB to ~180KB
2. **Zero Runtime Dependencies**: Removed React, Next.js, Radix UI
3. **Faster Load Times**: Vanilla TS + Vite for optimal performance
4. **Static Deployment**: Works with GitHub Pages, Vercel, Netlify
5. **Simplified Maintenance**: Single HTML file output

## 📁 Project Structure

```
src/
├── data/
│   └── resume.ts          # Resume data (bilingual)
├── utils/
│   ├── theme.ts           # Theme management
│   └── pdf-export.ts      # PDF export functionality
├── main.ts                # Main application
└── style.css              # TailwindCSS + custom styles
```

## 🔧 Customization

### Update Resume Data
Edit `src/data/resume.ts` to modify resume content for both languages.

### Styling
Modify `src/style.css` for custom styling. Uses TailwindCSS utilities.

### PDF Export
PDF settings can be adjusted in `src/utils/pdf-export.ts`.

## 🚀 Deployment

### Static Hosting (GitHub Pages, Vercel, Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Local Serving
```bash
npm run preview
```

## 📊 Performance Comparison

| Metric | Original (Next.js) | Lightweight (Vite) |
|--------|-------------------|-------------------|
| Bundle Size | ~1MB | ~180KB |
| Dependencies | 50+ packages | 3 packages |
| Build Time | ~30s | ~2s |
| First Load | ~500ms | ~100ms |
| Runtime | React/Next.js | Vanilla TypeScript |

## 🎨 Features Preserved

- ✅ Exact visual design match
- ✅ Bilingual support (EN/ES)  
- ✅ PDF export with same quality
- ✅ Dark/light theme toggle
- ✅ Responsive mobile design
- ✅ Print optimization
- ✅ US Letter format (8.5" x 11")

## 📝 License

This project is for portfolio/personal use.