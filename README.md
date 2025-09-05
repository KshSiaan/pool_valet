Got it—thanks Raven 👌 since you only handled the **frontend repo**, I’ll scope the README to that. I’ll keep it professional but simple, with clarity that backend isn’t included here.

Here’s a polished draft for your **README.md**:

---

# PoolValet – Frontend

PoolValet is a platform that connects homeowners with pool service providers.
This repository contains the **frontend** application, built with Next.js and integrated with backend APIs for full functionality.

---

## 🚀 Features

* **Homeowner Experience**

  * Request pool services through a simple form
  * Compare quotes from verified providers
  * Book and pay securely with **Stripe**

* **Provider Experience**

  * Manage incoming service requests
  * Send quotes to homeowners
  * Organize schedules and build reputation

* **Admin**

  * Manage users and providers
  * Oversee service requests and platform activity

---

## 🛠️ Tech Stack

* **Framework:** Next.js (React + TypeScript)
* **State/Data:** TanStack Query
* **Payments:** Stripe (frontend integration)
* **Styling & UI:** (add your preferred styling library here if used, e.g., Tailwind, ShadCN, etc.)
* **API Integration:** Fully connected with backend endpoints (developed separately)

---

## 📂 Roles in System

* **User (Homeowner)** – requests and books pool services
* **Provider** – responds to requests and manages jobs
* **Admin** – manages the entire platform

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (v18+)
* npm

### Installation

```bash
# clone repository
git clone <repo-url>

# navigate into project
cd poolvalet-frontend

# install dependencies
npm install

# run locally
npm run dev

# build production
npm run build
npm run start
```

> ⚠️ Note: `.env` setup is required but not documented here (private company project).

---

## 📡 API & Backend

This repository is **frontend only**.
All APIs and backend logic (auth, role management, lead handling, etc.) were implemented separately.

---

## 🔒 License

This is a **private company project**.
Not open source.

---

Would you like me to also add:

* ✅ A **screenshot/preview section** (mock UI shots)?
* ✅ A **folder structure breakdown** of your Next.js app?

That could make the README extra dev-friendly.
