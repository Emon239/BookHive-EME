## BookHive — Online Book Store 📚🛍️

Modern, responsive single‑page bookstore built with semantic HTML, modular CSS, and vanilla JavaScript. Includes sliders, newsletter validation, loader, and accessible UI controls.

### 🔗 Live demo
[View on GitHub Pages](https://emon239.github.io/BookHive-EME/)

---

### ✨ Features
- **Sticky header**: 📌 Secondary nav (`.header-2`) becomes fixed after scrolling
- **Search toggle**: 🔎 Mobile search bar toggled via the search icon
- **Login modal**: 👤 Slide‑in login form with open/close controls
- **Multiple sliders**: 🖼️ Swiper sliders for Home books, Featured, Arrivals, Reviews, and Blogs (autoplay + breakpoints)
- **Cart UX**: 🛒 “Add to Cart” buttons provide toast notification and temporary state
- **Newsletter**: ✉️ Client-side email validation with inline feedback
- **Scroll‑to‑top**: ⬆️ Floating button appears after scrolling
- **Loader**: ⏳ Initial loading screen with body scroll lock
- **Accessibility**: ♿ Landmark roles and ARIA labels across key elements
- **Performance**: ⚡ `requestAnimationFrame` scroll throttling and `will-change` hints

----

### 🧰 Tech stack
- **Frontend**: 🌐 HTML, CSS, JavaScript (no frameworks)
- **UI libraries**: 🎯 Swiper (CDN), 🎨 Font Awesome (CDN), 🔤 Google Fonts (Poppins)
- **Hosting**: ☁️ GitHub Pages or any static host

---

### 🗂️ Project structure
```
BookHive-EME-main/
  CSS/
    style.css
  Images/
    ...image assets (books, backgrounds, avatars)
  js/
    index.js
  index.html
  README.md
```

Key files:
- `index.html`: Sections for header, home, features, featured, newsletter, arrivals, deal, reviews, blogs, and footer
- `CSS/style.css`: Design tokens, layout, components, responsive rules
- `js/index.js`: Modals, sticky header, sliders, loader, form validation, UI effects

---

---

### 🛠️ Development tips
- Keep assets in `Images/` and reference with relative paths
- Update design tokens defined near the top of `CSS/style.css` for quick theming
- Adjust Swiper settings (autoplay, breakpoints) in `js/index.js`
- Sections are modular; you can remove or duplicate them as needed

---

### 🎛️ Customization
- **Colors/Theme**: Edit CSS custom properties in `CSS/style.css`
- **Books/Images**: Replace images in `Images/` and update `index.html`
- **Sliders**: Tune `slidesPerView`, `spaceBetween`, `autoplay.delay` in `index.js`
- **Copy/SEO**: Update `<title>`, meta `description`, and `keywords` in `index.html`

---

### ☁️ Deployment (GitHub Pages)
1. Push the repository to GitHub
2. In Settings → Pages, choose the `main` branch (root)
3. Use the generated URL (same format as the live demo)

---

### 🐞 Troubleshooting
- **Swiper not working**: Ensure the Swiper CDN script (`unpkg.com/swiper@7`) loads (internet required)
- **Icons missing**: Verify Font Awesome CDN is reachable
- **Fonts fallback**: Check Google Fonts link or host fonts locally if needed
- **Loader never hides**: Confirm `DOMContentLoaded` runs and no JS errors in console

---

### 🧭 Roadmap
- Real cart with item persistence (localStorage)
- API-driven catalog and filters
- Dark mode via CSS variables
- Lighthouse pass for PWA add‑to‑home‑screen

---

### 🤝 Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

---

### 👥 Contributors
- **Emon**
  
  <img src="Images/pic1.jpg" alt="Emon" width="100" style="border-radius:50%; margin:6px;"/>

- **Mehedi**
  
  <img src="Images/pic3.jpg" alt="Mehedi" width="100" style="border-radius:50%; margin:6px;"/>

- **Ema**
  
  <img src="Images/pic2.jpg" alt="Ema" width="100" style="border-radius:50%; margin:6px;"/>

### 📈 Credits
Icons by Font Awesome. Typography by Google Fonts. Sliders by Swiper.

---

### 📄 License
No explicit license yet. To use or redistribute, please open an issue to discuss or add a license (e.g., MIT).
