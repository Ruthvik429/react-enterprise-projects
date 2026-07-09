# 🍲 Recipe Finder

A responsive React application that allows users to browse, search, and filter recipes fetched from a mock backend powered by JSON Server. The project demonstrates modern React concepts such as data fetching with Axios, custom hooks, loading and error states, debounced search, and component-based architecture.

---

## 📖 Overview

Recipe Finder enables users to:

* Browse a collection of recipes
* Search recipes by name or ingredients
* Filter recipes by cuisine
* View detailed recipe information
* Experience professional loading skeletons during data fetching
* Handle API errors gracefully
* Enjoy smooth animations and responsive layouts

This project serves as an introduction to frontend-backend communication and asynchronous data handling in React applications.

---

## 🚀 Features

### Recipe Browsing

* Display recipes in a responsive card grid
* Show recipe image, title, cuisine, cook time, difficulty, rating, and servings

### Search Functionality

* Real-time recipe search
* Debounced input using `useRef`
* Search by recipe name or ingredients

### Cuisine Filtering

* Filter recipes by cuisine/category
* Dynamic dropdown populated from recipe data

### Recipe Details

* View complete recipe information
* Ingredients list
* Step-by-step cooking instructions
* Nutrition information

### Loading & Error Handling

* Animated skeleton cards while data loads
* User-friendly error messages
* Empty state when no recipes match filters

### Modern UI/UX

* Responsive Bootstrap grid layout
* Hover animations with Framer Motion
* Lucide React icons
* Clean and accessible interface

---

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* Axios
* Bootstrap
* Framer Motion
* Lucide React

### Backend (Mock API)

* JSON Server

---

## 📂 Project Structure

```text
recipe-finder/
├── db.json
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── api/
│   │   └── recipeApi.js
│   ├── components/
│   │   ├── RecipeCard/
│   │   │   ├── RecipeCard.jsx
│   │   │   └── RecipeCard.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── FilterBar/
│   │   │   └── FilterBar.jsx
│   │   ├── RecipeList/
│   │   │   └── RecipeList.jsx
│   │   ├── RecipeDetail/
│   │   │   └── RecipeDetail.jsx
│   │   └── SkeletonCard/
│   │       └── SkeletonCard.jsx
│   ├── hooks/
│   │   └── useRecipes.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── RecipeDetailPage.jsx
│   └── styles/
│       └── global.css
```

---

## 🏗️ Architecture

### Presentation Layer

Responsible only for rendering UI.

* RecipeCard
* SkeletonCard
* SearchBar
* FilterBar

### Container Layer

Responsible for state management and orchestration.

* HomePage

### Data Layer

Responsible for API communication and data fetching.

* api/recipeApi.js
* hooks/useRecipes.js

This separation improves maintainability, reusability, and scalability.

---

## 🔄 Data Flow

```text
JSON Server (db.json)
        │
        ▼
 recipeApi.js
        │
        ▼
 useRecipes Hook
        │
        ▼
   HomePage
    │    │
    │    ├── SearchBar
    │    ├── FilterBar
    │    └── RecipeList
    │             │
    │             ▼
    │        RecipeCard
    │
    ▼
Filtered Recipes
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone  https://github.com/Ruthvik429/react-enterprise-projects.git

cd recipe-finder
```

### Install Dependencies

```bash
npm install
```

### Install JSON Server Globally

```bash
npm install -g json-server
```

---

## 📦 Required Dependencies

```bash
npm install axios
npm install bootstrap
npm install framer-motion
npm install lucide-react
```

---

## ▶️ Running the Application

### Start JSON Server

```bash
json-server --watch db.json --port 5000
```

The API will be available at:

```text
http://localhost:5000/recipes
```

### Start React Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## 📚 React Concepts Demonstrated

### useEffect

Used for:

* Fetching data on component mount
* Managing side effects
* Cleanup functions

### useRef

Used for:

* Debounce timer storage
* Mutable values without re-renders

### Custom Hooks

Used to:

* Encapsulate API logic
* Reuse stateful behavior
* Improve code organization

### Derived State

Filtered recipes are computed from:

```javascript
recipes + searchTerm + selectedCuisine
```

instead of storing duplicate state.

### Async Data Lifecycle

```text
Request Started
       │
       ▼
 Loading State
       │
       ▼
 Success / Error
       │
       ▼
 Render UI
```

---

## 🎨 UI Features

### Responsive Layout

| Device  | Layout    |
| ------- | --------- |
| Mobile  | 1 Column  |
| Tablet  | 2 Columns |
| Desktop | 4 Columns |

### Animations

* Skeleton shimmer effect
* Card hover animations
* Fade-in transitions
* Smooth UI interactions

### Icons

Implemented using Lucide React:

* Search
* Clock
* Users
* Star
* Chef Hat
* Flame

---

## 📋 Sample API Endpoint

### Get All Recipes

```http
GET /recipes
```

### Example Response

```json
{
  "id": 1,
  "title": "Margherita Pizza",
  "image": "image-url",
  "cuisine": "Italian",
  "difficulty": "Medium",
  "cookTimeMinutes": 30,
  "servings": 4,
  "rating": 4.8,
  "ingredients": [],
  "steps": [],
  "nutrition": {}
}
```

---

## 🎯 Learning Outcomes

By completing this project, you will understand:

* React component architecture
* Data fetching with Axios
* REST API consumption
* JSON Server setup
* Loading and error state management
* Custom hooks
* Debouncing techniques
* Responsive design principles
* Component communication via props
* Derived state patterns
* Animation with Framer Motion

---

## 🔮 Future Enhancements

* React Router integration
* Recipe favorites
* Pagination
* Infinite scrolling
* React Query
* Backend integration with Spring Boot
* Authentication and user profiles
* Recipe creation and editing
* Dark mode support

---

## 👨‍💻 Author

Developed as part of a React learning journey focused on building real-world frontend applications using modern React practices and scalable architecture.
