# 📸 Wedding Diary - Fullstack Web Application

A modern full-stack web application for Wedding Diary (Fine Art Photography & Cinematography).

---

## 📁 Project Structure

```
Wedding-Diary-React-Web/
│
├── frontend/             # 🎨 React 18 + Vite + Tailwind CSS Frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/              # 🚀 Node.js + Express + MySQL 8.x REST API
│   ├── config/           # Database connection pool
│   ├── controllers/      # Portfolio, Blogs, Inquiries, Auth controllers
│   ├── middleware/       # JWT Auth & Sharp WebP image processing
│   ├── routes/           # API routes
│   ├── scripts/seed.js   # DB schema setup and default seeder
│   ├── uploads/          # Uploaded photos (WebP optimized)
│   ├── server.js         # Server entry point
│   └── DEPLOYMENT_ORACLE.md # Oracle Cloud VPS deployment guide
│
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Backend Setup (`backend/`)
1. Ensure MySQL (or WampServer) is running.
2. Navigate to `backend/` and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Initialize the database and seed initial data:
   ```bash
   npm run seed
   ```
4. Start the server (runs on `http://localhost:5000`):
   ```bash
   npm run dev
   ```

### 2. Frontend Setup (`frontend/`)
1. Navigate to `frontend/` and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server (runs on `http://localhost:5173`):
   ```bash
   npm run dev
   ```

---

## ☁️ Deployment

For deploying on an **Oracle Cloud Infrastructure (OCI)** Ubuntu VPS with Nginx, PM2, and Let's Encrypt SSL, follow the full step-by-step guide in [`backend/DEPLOYMENT_ORACLE.md`](./backend/DEPLOYMENT_ORACLE.md).
