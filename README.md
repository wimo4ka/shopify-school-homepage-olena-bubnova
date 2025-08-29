# Shopify School Homepage by Olena Bubnova

## 1. Project Description
This is a static web page created based on a provided Figma design.  
The goal of the project was to implement the layout as closely as possible to the design, ensuring responsiveness and usability.

The project is fully responsive and optimized for **desktop, tablet, and mobile** devices (Desktop (≥1280px); Tablet (768–1279px), Mobile (<768px))

---

## 2. How to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/wimo4ka/shopify-school-homepage-olena-bubnova.git
2. Open the project folder and run index.html in your browser.

3. Alternatively, you can view the deployed version on GitHub Pages.

## 3. Technologies Used

- **HTML5** 
  Semantic HTML5 using attributes (`alt`, `aria-*`), 
  FAQ accordion using native `<details>` / `<summary>`
- **CSS3** 
  (Flexbox, Media Queries, styling layout)
- **JavaScript (Vanilla)**
  - Burger menu for mobile desktop, which is closed on taping close button or navigation link.
  - Product spotlight section: Dynamic switching of product details, including images and prices;
  - Need-Help form;
  - Popup using session storage (avaliable once per session appears after 1 second on page);
  - Footer-menu with multi-column navigation and accordion form for mobile view.
- **[Swiper.js](https://swiperjs.com/)** for carousels
  Hero banner swiper and feature collection swiper
- **[Google Fonts: Poppins](https://fonts.google.com/specimen/Poppins)**

## 4. Possible Improvements

If I had more time, I would:

Make CSS more reusable and universal.

Decompose CSS and JavaScript into smaller, more maintainable modules.

Refactor the color cards with thumbnails and implement them using Swiper for smoother interaction.