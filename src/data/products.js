// =============================================
// Product Data - Local array of all products
// Each product has: id, name, price, rating,
// image, category, and description
// =============================================

// Vite provides this variable to handle the base path
// This ensures images load correctly on GitHub Pages
const BASE = import.meta.env.BASE_URL;

const products = [
  // --- Electronics ---
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2499,
    rating: 4,
    image: BASE + "images/headphones.jpg",
    category: "Electronics",
    description: "Premium sound quality with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Smartphone 128GB",
    price: 14999,
    rating: 4,
    image: BASE + "images/smartphone.jpg",
    category: "Electronics",
    description: "6.5-inch AMOLED display, 48MP camera, and fast charging support.",
  },
  {
    id: 3,
    name: "Laptop Stand Adjustable",
    price: 1299,
    rating: 5,
    image: BASE + "images/laptop-stand.jpg",
    category: "Electronics",
    description: "Ergonomic aluminium stand with adjustable height for laptops up to 17 inches.",
  },
  {
    id: 4,
    name: "USB-C Hub Multiport Adapter",
    price: 1799,
    rating: 4,
    image: BASE + "images/usb-hub.jpg",
    category: "Electronics",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.",
  },
  {
    id: 5,
    name: "Wireless Mouse Ergonomic",
    price: 899,
    rating: 4,
    image: BASE + "images/mouse.jpg",
    category: "Electronics",
    description: "Silent click wireless mouse with ergonomic design and long battery life.",
  },

  // --- Fashion ---
  {
    id: 6,
    name: "Men's Casual Slim Fit Shirt",
    price: 799,
    rating: 4,
    image: BASE + "images/shirt.jpg",
    category: "Fashion",
    description: "Comfortable cotton blend shirt perfect for casual and semi-formal occasions.",
  },
  {
    id: 7,
    name: "Women's Running Shoes",
    price: 2199,
    rating: 5,
    image: BASE + "images/shoes.jpg",
    category: "Fashion",
    description: "Lightweight running shoes with breathable mesh upper and cushioned sole.",
  },
  {
    id: 8,
    name: "Leather Wallet for Men",
    price: 599,
    rating: 4,
    image: BASE + "images/wallet.jpg",
    category: "Fashion",
    description: "Genuine leather bi-fold wallet with RFID protection and multiple card slots.",
  },
  {
    id: 9,
    name: "Analog Wrist Watch Classic",
    price: 3499,
    rating: 5,
    image: BASE + "images/watch.jpg",
    category: "Fashion",
    description: "Classic analog watch with stainless steel strap and water-resistant design.",
  },
  {
    id: 10,
    name: "Sunglasses Polarized UV400",
    price: 999,
    rating: 4,
    image: BASE + "images/sunglasses.jpg",
    category: "Fashion",
    description: "Polarized sunglasses with UV400 protection and lightweight metal frame.",
  },

  // --- Books ---
  {
    id: 11,
    name: "The Psychology of Money",
    price: 349,
    rating: 5,
    image: BASE + "images/book-psychology.jpg",
    category: "Books",
    description: "Timeless lessons on wealth, greed, and happiness by Morgan Housel.",
  },
  {
    id: 12,
    name: "Atomic Habits by James Clear",
    price: 399,
    rating: 5,
    image: BASE + "images/book-atomic.jpg",
    category: "Books",
    description: "An easy and proven way to build good habits and break bad ones.",
  },
  {
    id: 13,
    name: "Rich Dad Poor Dad",
    price: 299,
    rating: 4,
    image: BASE + "images/book-richdad.jpg",
    category: "Books",
    description: "What the rich teach their kids about money that the poor and middle class do not.",
  },
  {
    id: 14,
    name: "JavaScript: The Good Parts",
    price: 499,
    rating: 4,
    image: BASE + "images/book-js.jpg",
    category: "Books",
    description: "A deep dive into the reliable and beautiful parts of JavaScript.",
  },

  // --- Home & Kitchen ---
  {
    id: 15,
    name: "Stainless Steel Water Bottle",
    price: 699,
    rating: 4,
    image: BASE + "images/bottle.jpg",
    category: "Home & Kitchen",
    description: "Double-wall insulated bottle that keeps drinks hot or cold for 24 hours.",
  },
  {
    id: 16,
    name: "Non-Stick Frying Pan Set",
    price: 1499,
    rating: 4,
    image: BASE + "images/pan.jpg",
    category: "Home & Kitchen",
    description: "Set of 3 non-stick frying pans with heat-resistant handles.",
  },
  {
    id: 17,
    name: "LED Desk Lamp with USB Port",
    price: 1199,
    rating: 5,
    image: BASE + "images/desk-lamp.jpg",
    category: "Home & Kitchen",
    description: "Adjustable LED desk lamp with 3 brightness levels and built-in USB charging.",
  },

  // --- Sports ---
  {
    id: 18,
    name: "Yoga Mat Premium 6mm",
    price: 899,
    rating: 5,
    image: BASE + "images/yoga-mat.jpg",
    category: "Sports",
    description: "Extra thick, non-slip yoga mat with carrying strap included.",
  },
  {
    id: 19,
    name: "Resistance Bands Set",
    price: 649,
    rating: 4,
    image: BASE + "images/bands.jpg",
    category: "Sports",
    description: "Set of 5 resistance bands with different tension levels for full-body workout.",
  },
  {
    id: 20,
    name: "Skipping Rope Adjustable",
    price: 349,
    rating: 4,
    image: BASE + "images/skipping-rope.jpg",
    category: "Sports",
    description: "Adjustable length skipping rope with comfortable foam grip handles.",
  },
];

export default products;
