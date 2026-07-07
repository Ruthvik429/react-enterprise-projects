# 📋 Task Tracker

A modern, responsive task management application built with **React** and **Vite**. The application allows users to create, organize, filter, and manage daily tasks while demonstrating the core concepts of React such as component-based architecture, state management, props, event handling, controlled forms, conditional rendering, and local data persistence using `localStorage`.

This project is intentionally designed without a backend to build a strong understanding of React's internal state management before introducing APIs and server communication.

---

## 🚀 Features

- Add new tasks
- Assign task categories
  - Work
  - Personal
  - Urgent
- Set task priorities
  - Low
  - Medium
  - High
- Mark tasks as completed or pending
- Delete tasks
- Filter tasks by:
  - Category
  - Completion Status
- Live task statistics
  - Total Tasks
  - Pending Tasks
  - Completed Tasks
- Persistent storage using Local Storage
- Responsive UI
- Component-based architecture

---



# 🛠 Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)
- JSX

### Styling

- Bootstrap 5
- CSS3

### Browser Storage

- Local Storage API

---

# 📂 Project Structure

# 📂 Project Structure

```text
task-tracker/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TaskFilters.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskStats.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

# 🧩 Component Architecture

```
App
│
├── TaskForm
│
├── TaskFilters
│
├── TaskStats
│
└── TaskList
      │
      └── TaskItem
```

### Component Responsibilities

| Component | Responsibility |
|------------|---------------|
| **App** | Maintains application state and business logic |
| **TaskForm** | Creates new tasks |
| **TaskFilters** | Filters tasks by category and status |
| **TaskStats** | Displays task statistics |
| **TaskList** | Renders filtered tasks |
| **TaskItem** | Displays an individual task |

---

# 📊 Task Data Model

Each task follows the structure below:

```javascript
{
    id: Number,
    title: String,
    category: "Work" | "Personal" | "Urgent",
    priority: "Low" | "Medium" | "High",
    completed: Boolean
}
```

---

# 🔄 Application Flow

```
User Input

      │

      ▼

TaskForm

      │

      ▼

App State

      │

      ▼

Task List Updated

      │

      ▼

React Re-renders UI

      │

      ▼

Changes Saved to Local Storage
```

---

# ⚙️ React Concepts Covered

- Functional Components
- JSX
- Props
- State Management (`useState`)
- Event Handling
- Controlled Components
- Conditional Rendering
- List Rendering
- Keys
- Component Composition
- Lifting State Up
- Derived State
- Custom Hooks
- `useEffect`
- Local Storage Integration

---

# 💾 Local Storage

Tasks are automatically stored in the browser using **Local Storage**.

This enables:

- Data persistence across page refreshes
- No backend dependency
- Fast client-side performance

---

# 📱 Responsive Design

The application is fully responsive and adapts to different screen sizes.

### Desktop

- Horizontal layout
- Inline filters
- Task cards with priority indicators

### Mobile

- Stacked form controls
- Full-width task cards
- Responsive Bootstrap grid

---

# 🧠 Learning Objectives

This project focuses on mastering the fundamentals of React development.

After completing this project, you will understand how to:

- Build reusable React components
- Manage application state effectively
- Pass data using props
- Handle user interactions
- Render dynamic lists
- Create controlled forms
- Persist application data
- Structure scalable React projects
- Organize UI into reusable components

---

# 🚀 Getting Started

## Prerequisites

- Node.js
- npm

---

## Installation

Clone the repository.

```bash
git clone https://github.com/your-username/task-tracker.git
```

Navigate to the project.

```bash
cd task-tracker
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Open your browser.

```
http://localhost:5173
```

---

# 📜 Available Scripts

```bash
npm run dev
```

Runs the development server.

---

```bash
npm run build
```

Creates a production build.

---

```bash
npm run preview
```

Preview the production build locally.

---

# 🔮 Future Enhancements

- Edit existing tasks
- Search functionality
- Due dates
- Drag and drop task ordering
- Dark mode
- Task labels
- Sorting by priority
- Sorting by creation date
- Multiple task views
- Backend integration
- User authentication
- Cloud synchronization
- REST API integration
- Redux/Context API support
- Unit testing
- PWA support

---

# 📚 Key Takeaways

This project serves as a foundation for modern React development by emphasizing:

- State-driven UI
- Component reusability
- Unidirectional data flow
- Separation of concerns
- Derived state
- Clean project architecture
- Responsive interface design
- Client-side persistence

These concepts form the building blocks for larger applications such as project management systems, dashboards, CRM platforms, issue trackers, and enterprise React applications.

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Ruthuvik Kyatham**

If you found this project helpful, consider giving it a ⭐ on GitHub.