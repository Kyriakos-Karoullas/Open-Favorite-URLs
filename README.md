# Open Favorite URLs (Windows Only)

A simple TypeScript + Express + Prisma web app that lets you save your favorite websites, manage them, and open them all with one click — **built intentionally for Windows**.

The “Open All” feature uses `cmd /c start` to launch URLs in your default browser, leveraging Windows shell behavior.

---

## ⚠ Windows-Only Notice

This application is designed **exclusively for Windows**.  
It uses Windows Command Prompt commands to open URLs and will not run correctly on macOS or Linux.

---

## ✨ Features

- **Add & Remove Favorites** – Store your most-visited sites with a friendly name and URL.
- **Open All in One Click** – Launch all saved websites at once in your default Windows browser.
- **Persistent Storage** – Uses PostgreSQL with Prisma ORM to store favorites.
- **Simple UI** – EJS templates + Bootstrap for a clean layout.

---

## 🛠 Tech Stack

- **Backend:** [Express](https://expressjs.com/) + [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) + [Prisma](https://www.prisma.io/)
- **Frontend:** [EJS](https://ejs.co/), [Bootstrap](https://getbootstrap.com/)
- **Utilities:** [dotenv](https://github.com/motdotla/dotenv), [zod](https://zod.dev/)

---

## 📦 Requirements

- **Windows 10 or 11**
- **Node.js** ≥ 18.x
- **PostgreSQL** ≥ 14.x

---

## 🚀 Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Copy the example env file and fill in your own values
copy .env.example .env

# Example .env content:
# DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/favorites?schema=public"
# PORT=2626

# 4. Run database migrations
npx prisma migrate dev

# 5. Start the development server
npm run dev

# 6. Or build & run in production mode
npm run build
npm start
```
