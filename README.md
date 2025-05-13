# Dojo-Blogs

Dojo-Blogs is a simple blog application built using **React**. It was developed as part of a React crash course titled **"Full React Tutorial"** by the [Net Ninja](https://www.youtube.com/@NetNinja) on YouTube. The project demonstrates the foundational concepts of building a modern front-end app with React.

## 🚀 Project Overview

This project showcases how to build a single-page application (SPA) using React. Users can:
- View a list of blogs
- View details of individual blog posts
- Create and delete blogs (via a mock backend)

It uses a mock REST API provided by **JSON Server** for simulating real data interaction.

## 📚 Topics Covered

This project touches on several key concepts and tools within the React ecosystem:

- 🔧 **Bundlers** – Using Create React App (CRA) under the hood
- ⚛️ **Components & Templates** – Breaking UI into reusable components
- 🪝 **React Hooks** – including:
  - `useState`
  - `useEffect`
- 🧩 **Custom Hooks** – Building reusable logic outside components
- 📦 **Props** – Passing data between components
- 🔌 **JSON Server** – Mock backend for data persistence
- 🌐 **Fetch API** – Getting and posting data to the mock backend
- 🧭 **React Router** – Handling client-side routing and navigation

## 🛠 Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dave-Njeru/dojo-blogs.git

# Navigate into the project folder
cd dojo-blogs

# Install dependencies
npm install
```
## Running the App
```bash
# Start the JSON server (mock backend)
npx json-server --watch data/db.json --port 8000

# In another terminal, start the React app
npm start
```
The React app will be available at http://localhost:3000.

## 📃 License
This project is for learning purposes and follows the usage permission outlined by the tutorial creator
