# 🏠 Property Listing Frontend

A **React-based frontend application** for browsing, searching, and viewing real estate property listings.
The project demonstrates **component-based UI design**, **client-side routing**, and **API-based data handling** for a property marketplace.

---

## 📌 Project Overview

This project is a **property listing web application frontend** where users can:

* View available properties
* Search and filter listings
* View detailed information for individual properties
* Navigate across pages using a responsive navbar and footer

The application is designed as a **frontend-only system** and can be easily integrated with a backend or external property API.

---

## ✨ Features

* 🏘️ Home page with featured properties
* 🔍 Search bar for filtering property listings
* 📄 Property listing page with reusable property cards
* 🏠 Individual property detail page
* ℹ️ About page
* 🧭 Navbar & footer for consistent navigation
* 📦 Modular React components
* 🌐 API abstraction for property data

---

## 🧩 Application Pages & Components

### Pages

* **HomePage** – Landing page with property overview
* **PropertyListingPage** – Displays all properties
* **PropertyDetailPage** – Detailed view of a selected property
* **AboutPage** – Information about the platform

### Reusable Components

* **Navbar** – Navigation across pages
* **Footer** – Page footer
* **PropertyCard** – Displays summary of a property
* **SearchBar** – Handles property search/filter input

---

## 📂 Project Structure

```
property_listing_frontend/
│
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── PropertyListingPage.jsx
│   │   ├── PropertyDetailPage.jsx
│   │   └── AboutPage.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PropertyCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── api/
│   │   └── propertyAPI.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   ├── index.css
│
├── public/
│   └── index.html
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Technologies Used

* **React**
* **JavaScript (ES6+)**
* **CSS**
* **React Router**
* **REST API abstraction (propertyAPI.js)**
* **Create React App / Vite-style structure**

---

## 🔌 Property API

The file `propertyAPI.js` acts as an abstraction layer to:

* Fetch property data
* Separate data logic from UI components
* Allow easy replacement with a real backend or external API

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/snxhx294/property_listing_frontend.git
cd property_listing_frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm start
```

The app will be available at:

```
http://localhost:3000
```

---

## 🧪 Testing

This project focuses on UI and frontend behavior.
Testing can be extended using:

* Jest
* React Testing Library

---

## 🌱 Future Enhancements

* Backend integration (Node.js / Firebase)
* Advanced search filters (price, location, type)
* User authentication (login, favorites)
* Map-based property visualization
* Pagination & sorting
* Admin panel for property management
