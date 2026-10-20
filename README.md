# Paradise Nursery — E-Plant Shopping Application

A responsive React + Redux Toolkit houseplant shopping experience built for the Coursera Paradise Nursery final project.

## Features
- Beautiful landing page with hero background, company introduction, and Get Started button.
- 18 unique plants across three categories (6 per category), each with a photo, name, and price.
- Add to Cart buttons that become disabled when a plant is in the cart.
- Navigation links to Home, Plants, and Cart, with a live cart quantity badge.
- Shopping cart with thumbnails, unit price, line totals, increase/decrease quantity, remove, and total cost.
- Continue Shopping navigation and a Coming Soon checkout message.
- Redux Toolkit state management and cart persistence using localStorage.
- Responsive mobile-friendly design.

## Technology
React, Vite, React Router, Redux Toolkit, React Redux, Lucide React, CSS.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create or rename your **public** repository to `e-plantShopping`.
2. Upload and commit all project files to the repository root.
3. Clone the repository locally and run `npm install`.
4. Run `npm run deploy` (uses `gh-pages` to publish the built `dist` folder to the `gh-pages` branch).
5. In GitHub **Settings → Pages**, choose **Deploy from a branch**, branch **gh-pages**, folder **/(root)**, then save.
6. Visit `https://YOUR_USERNAME.github.io/e-plantShopping/` once GitHub Pages finishes publishing.

The Vite `base` is set to `/e-plantShopping/`. Change it if you use a different repository name.

## Required submission files
- `README.md`
- `src/components/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/redux/CartSlice.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`

## Notes
Plant photos are fetched from Unsplash and require an internet connection. Checkout is a demonstration and does not process payments.
