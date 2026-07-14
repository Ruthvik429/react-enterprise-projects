# 🛒 E-Commerce Catalog

A responsive multi-page e-commerce catalog application built with **React**, **Vite**, **React Router**, **Context API**, **SCSS**, **Axios**, **JSON Server**, and **Docker**.

The application simulates a real-world frontend architecture where users can browse products, view product details, manage a shopping cart, and interact with data served through a REST API.

---

# 📖 Overview

This project demonstrates the most common frontend application pattern used across modern web applications:

**List → Detail → User Action → Global State Update**

Examples of this pattern include:

* E-Commerce Platforms (Amazon, Flipkart, Myntra)
* Job Portals (LinkedIn Jobs, Indeed)
* Real Estate Platforms
* Streaming Services (Netflix, Prime Video)

By completing this project, you'll gain practical experience with routing, state management, API integration, component architecture, responsive UI development, and Docker-based deployment.

---

# ✨ Features

## Home Page

* Hero banner section
* Featured products display
* Responsive product grid

## Catalog Page

* Browse all products
* Category-based filtering
* Route and query parameter support
* Responsive product cards

## Product Detail Page

* Dynamic route (`/product/:id`)
* Product information
* Ratings and reviews
* Quantity selector
* Add to cart functionality

## Shopping Cart

* Add products
* Remove products
* Update quantity
* Cart total calculation
* Persisted cart state
* Live cart count in navbar

## Navigation

* Responsive navbar
* Mobile-friendly layout
* Cart badge indicator
* React Router navigation

## Backend API

* JSON Server REST API
* Products endpoint
* Categories endpoint
* Reviews endpoint

## Dockerized Environment

* React application container
* JSON Server container
* Shared Docker network
* Single-command startup

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* React Router
* Context API
* Axios
* SCSS (7-1 Architecture Pattern)

## Backend

* JSON Server

## DevOps

* Docker
* Docker Compose

---

# 📂 Project Structure

```text
ecommerce-catalog/
│
├── docker/
│   ├── Dockerfile.client
│   └── Dockerfile.server
│
├── db.json
│
├── public/
│
├── src/
│   ├── api/
│   │   └── productApi.js
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── product/
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CatalogPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── themes/
│   │   └── main.scss
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── docker-compose.yml
├── .dockerignore
├── package.json
└── vite.config.js
```

---

# 🏗 Application Architecture

```text
Browser (React App)
        │
        │ HTTP Requests (Axios)
        ▼
JSON Server REST API
        │
        ├── /products
        ├── /categories
        └── /reviews
```

The frontend and backend are completely separated and communicate through HTTP requests, mimicking a real production environment.

---

# 🔄 Data Flow

```text
JSON Server
      │
      ▼
API Layer (Axios)
      │
      ▼
Page Components
      │
      ▼
Reusable UI Components
```

### Example Flow

```text
/products
     │
     ▼
CatalogPage
     │
     ▼
ProductGrid
     │
     ▼
ProductCard
     │
     ▼
User Clicks Product
     │
     ▼
/product/:id
     │
     ▼
ProductDetailPage
```

---

# 🧠 State Management

The application uses React Context API for global cart management.

```text
CartContext
│
├── cartItems
├── addToCart()
├── removeFromCart()
├── updateQuantity()
└── cartTotal
```

### State Ownership

#### Global State

Stored in Context:

* Cart items
* Cart total
* Cart count

#### Local State

Stored in Components:

* Quantity selectors
* Active category filters
* UI interactions

---

# 🎨 SCSS Architecture

The project follows the industry-standard **7-1 SCSS Architecture Pattern**.

```text
styles/
│
├── abstracts/
├── base/
├── components/
├── layouts/
├── pages/
├── themes/
└── main.scss
```

### Naming Convention

BEM Methodology:

```scss
.product-card {}
.product-card__title {}
.product-card__title--sale {}
```

Benefits:

* Scalable
* Maintainable
* Collision-free styling

---

# 📦 JSON Server Data Model

## Products

```json
{
  "id": 1,
  "name": "Product Name",
  "price": 49.99,
  "categoryId": 2
}
```

## Categories

```json
{
  "id": 2,
  "name": "Electronics",
  "slug": "electronics"
}
```

## Reviews

```json
{
  "id": 101,
  "productId": 1,
  "user": "John",
  "rating": 5,
  "comment": "Excellent product"
}
```

---

# 🐳 Docker Architecture

```text
┌───────────────────────────────┐
│       Docker Network          │
│       ecommerce-net           │
│                               │
│  React Client Container       │
│          │                    │
│          ▼                    │
│  JSON Server Container        │
└───────────────────────────────┘
```

### Containers

#### React Container

* Vite Development Server
* Port: 5173

#### JSON Server Container

* REST API
* Port: 3001

### Benefits

* Isolation
* Independent deployment
* Consistent environments
* Easy onboarding

---

# 🚀 Getting Started

## Prerequisites

Install:

* Node.js
* npm
* Docker
* Docker Compose

---

## Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-catalog.git

cd ecommerce-catalog
```

---

## Install Dependencies

```bash
npm install
```

---

## Start JSON Server

```bash
npx json-server db.json --port 3001
```

---

## Start React Application

```bash
npm run dev
```

Application:

```text
http://localhost:5173
```

API:

```text
http://localhost:3001
```

---

# 🐳 Run with Docker

Build and start all services:

```bash
docker-compose up --build
```

Run in detached mode:

```bash
docker-compose up -d
```

Stop containers:

```bash
docker-compose down
```

---

# 📚 Concepts Practiced

### React

* Functional Components
* Props
* Component Composition
* Hooks
* Context API

### Routing

* Dynamic Routes
* Route Parameters
* Nested Navigation

### State Management

* Global State
* Derived State
* Context Provider Pattern

### API Integration

* Axios
* REST API Consumption
* Error Handling

### Styling

* SCSS
* BEM
* Responsive Design

### Docker

* Dockerfiles
* Docker Compose
* Container Networking
* Volumes

---

# 🎯 Learning Outcomes

After completing this project, you will understand:

* Frontend application architecture
* Data flow in React
* Global state management
* Component-driven development
* REST API integration
* Docker containerization
* Responsive UI development
* SCSS project organization

---

# 🔮 Future Enhancements

* Product Search
* Sorting Options
* Wishlist Functionality
* Pagination
* Authentication
* Protected Routes
* Dark Mode
* React Query Integration
* Redux Toolkit Migration
* Backend Replacement with Spring Boot API

---

# 📄 License

This project is intended for educational and portfolio purposes.

---

# 👨‍💻 Author

Built as part of a production-style frontend learning journey focused on React architecture, state management, API integration, and Docker fundamentals.
