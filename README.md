# 💰 CashFlow: Full Stack Mobile Expense Tracker

This repository contains the code for **CashFlow**, a full-stack mobile application designed for expense tracking. Built using **React Native** and **Expo**, it runs seamlessly on both **Android** and **iOS** devices or simulators. The project includes a complete **backend API** and a **mobile frontend application**.

## 🌟 Key Features

- **User Management**: Sign up and log in with email/password, including 6-digit email verification.
- **Transaction Management**: Add, categorize (income/expense), and delete transactions.
- **Balance Tracking**: Automatically updates the current balance based on transaction history.
- **Data Display**: Homepage shows recent transactions and a financial summary (balance, income, expenses).
- **User Experience**: Classic pull-to-refresh functionality on the Home screen.
- **Security & Performance**: Rate limiting to prevent server abuse.

## 💻 Tech Stack Overview

### 🧩 Backend (API)
The backend follows an industry-standard architecture with structured folders for configuration, controllers, middleware, and routes.

- **Framework**: Node.js with Express 4.21.0
- **Database**: PostgreSQL hosted via Neon
- **Data Layer**: Raw SQL queries (no ORM) for the transactions table
- **Authentication**: Managed by Clerk
- **Rate Limiting**: Implemented with Upstash Redis (100 requests / 60s)
- **Deployment**: Hosted on Render.com
- **Maintenance**: Cron job sends health checks every 14 minutes to keep the Render instance active

### 📱 Frontend (Mobile Application)
The frontend is built using React Native with Expo for streamlined development and deployment.

- **Core Frameworks**: React Native + Expo
- **UI Components**: React Native primitives (`View`, `Text`, etc.)
- **Navigation**: Stack Navigator with Expo Router and `_layout.jsx`
- **Styling**: Defined using `StyleSheet.create()` and applied via the `style` prop
- **Theming**: Dynamic themes (Coffee, Forest, Ocean, Purple) via `colors.js`
- **Safe Screen**: Custom component ensures content visibility below status bar/notch
- **Keyboard Handling**: `react-native-keyboard-aware-scroll-view` prevents overlap
- **List Performance**: Large lists rendered using `FlatList` for efficiency

## 🔗 API Endpoints

| Method | Endpoint                            | Description                                      |
|--------|-------------------------------------|--------------------------------------------------|
| POST   | `/api/transactions`                | Create a new transaction (requires title, amount, category, user ID) |
| GET    | `/api/transactions/:userID`        | Fetch all transactions for a specific user       |
| DELETE | `/api/transactions/:id`            | Delete a transaction by ID                       |
| GET    | `/api/transactions/summary/:userID`| Get total balance, income, and expenses summary  |

## 🚀 Getting Started

The project is organized into two primary folders:
- `backend/` → Express API
- `mobile/` → React Native / Expo application

### ✅ Prerequisites
To run locally on a physical device:
- Update the API URL in the mobile app to point to a deployed backend (not `localhost`).
- Install the **Expo Go** app on your phone (iOS/Android) to test by scanning a QR code.

### 🧠 Development Setup

1. **Initialize Folders**:
   ```bash
   mkdir wallet && cd wallet
   mkdir backend mobile
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm init -y
   npm install express@4.21.0 @upstash/redis dotenv cors @neondatabase/serverless
   ```

3. **Frontend Setup**:
   ```bash
   cd ../mobile
   npx create-expo-app@latest .
   ```

4. **Environment Variables** (`.env`):
   - Both backend and frontend require `.env` files containing:
     - Neon database URL
     - Clerk API keys
     - Upstash Redis credentials
   - Add `.env` and `.env.local` to `.gitignore`.

5. **Running Locally**:
   - **Backend**:
     ```bash
     npm run dev
     ```
   - **Mobile**:
     ```bash
     npx expo start
     ```
     Press `I` for iOS, `A` for Android, or scan the QR code to test on a device.

## 🧾 Folder Structure

```
wallet/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── config/
│   ├── index.js
│   └── .env
│
└── mobile/
    ├── app/
    │   ├── (auth)/
    │   ├── (home)/
    │   ├── _layout.jsx
    │   ├── index.jsx
    │   └── create.jsx
    ├── assets/
    ├── components/
    ├── constants/colors.js
    ├── hooks/
    ├── .env.local
    └── app.json
```

## 🧰 Tools & Services

- **Backend Hosting**: Render.com
- **Database**: Neon (PostgreSQL)
- **Authentication**: Clerk
- **Rate Limiting**: Upstash Redis
- **Frontend Testing**: Expo Go App

## 🧑‍💻 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add new feature'`.
4. Push branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

## 🛡️ License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

## ❤️ Acknowledgements

- **React Native & Expo** for mobile development.
- **Render, Neon, and Upstash** for cloud hosting and database services.
- **Clerk** for user authentication.

> **Track your expenses. Control your future. Simplify your finances with CashFlow.**