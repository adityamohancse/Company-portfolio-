# TechVision Portfolio - Standalone HTML/CSS/JS Version

This is a standalone, fully functional portfolio website converted from the Django version. It runs entirely in the browser without any backend server required.

## 📁 Files Structure

```
Company Portfolio/
├── index.html          - Main HTML file (complete portfolio)
├── style.css           - All CSS styles
├── main.js            - All JavaScript functionality
└── README_STANDALONE.md - This file
```

## 🚀 How to Use

### Option 1: Open Directly in Browser
1. Simply double-click `index.html`
2. The website will open in your default browser
3. All features work immediately!

### Option 2: Use a Local Server (Recommended for development)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Hosting
You can deploy these files to any static hosting service:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag & drop deployment
- **Vercel**: One-click deployment
- **Cloudflare Pages**: Fast global CDN
- **AWS S3**: Amazon cloud storage
- Any traditional web hosting (cPanel, etc.)

## ✨ Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **Animated Particles Background** - Interactive background effects
- ✅ **Smooth Scrolling** - Elegant page navigation
- ✅ **Project Filtering** - Filter projects by category
- ✅ **Testimonials Slider** - Auto-playing carousel
- ✅ **Contact Form** - With client-side validation
- ✅ **AOS Animations** - Scroll-triggered animations
- ✅ **Modern Design** - Dark theme with glassmorphism

## 🎨 Customization

### Change Company Information
Edit `index.html` and replace:
- **Company Name**: "TechVision" → Your company name
- **Tagline**: "Transforming Ideas Into Digital Reality" → Your tagline
- **Contact Info**: Update email, phone, address in the contact section
- **Founded Year**: "2014" → Your founding year

### Change Colors
Edit `style.css` CSS variables (lines 7-57):
```css
:root {
    --accent-primary: #6366f1;  /* Primary brand color */
    --accent-secondary: #8b5cf6; /* Secondary color */
    --accent-tertiary: #ec4899;  /* Tertiary accent */
}
```

### Add/Edit Projects
In `index.html`, find the Projects Section and modify or add project cards:
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="YOUR_IMAGE_URL" alt="Project Name">
    </div>
    <div class="project-content">
        <span class="project-category">Category</span>
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Description...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
    </div>
</div>
```

### Add/Edit Services
Find the Services Section in `index.html` and modify service cards.

### Modify Testimonials
Edit testimonial cards in the Testimonials Section of `index.html`.

## 🔧 Technical Details

### External Dependencies (CDN-loaded)
- **Font Awesome 6.5.1** - Icons
- **Google Fonts** - Inter & Space Grotesk fonts
- **Particles.js 2.0.0** - Particle background effects
- **AOS 2.3.1** - Scroll animations

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

### Performance
- Optimized images (loaded from Unsplash CDN)
- Lazy loading for images
- Smooth 60fps animations
- Minimal JavaScript footprint

## 📱 Responsive Breakpoints

- **Desktop**: > 900px
- **Tablet**: 600px - 900px
- **Mobile**: < 600px

## 🐛 Troubleshooting

### Contact Form Doesn't Submit
The form includes client-side validation. To make it fully functional:
1. Add a backend endpoint (PHP, Node.js, etc.)
2. Or use a service like Formspree, Form Backend, or EmailJS
3. Update the form's `action` or modify the JavaScript in `main.js`

### Animations Not Working
Ensure you have an internet connection (AOS and Particles.js load from CDN).

### Images Not Loading
The template uses Unsplash placeholder images. Replace with your own images for production.

## 📄 License

This is a converted version of your Django portfolio. All rights reserved.

## 🎯 Next Steps

1. Replace placeholder images with your own
2. Update all text content with your information
3. Customize colors to match your brand
4. Add your actual projects and testimonials
5. Set up contact form backend (if needed)
6. Deploy to your preferred hosting platform

---

**Created**: March 31, 2026
**Converted From**: Django Portfolio Website
**Status**: Production Ready ✅
