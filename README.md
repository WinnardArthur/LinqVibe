# 🚀 LinqVibe – AI-Powered Application Builder  

**LinqVibe** is a fullstack **AI-powered application builder** that allows anyone to **create web applications by chatting with AI** — much like *Lovable* or *Replit*, but built from the ground up with modern web technologies.  

🌐 **Live Demo:** [https://linq-vibe.vercel.app/](https://linq-vibe.vercel.app/)  

---

<p align="center">
  <img src="./public/ezgif.com-optimize.gif" alt="" />
  <!-- <img src="./public/Screenshot 2025-10-19 073538.png" alt="HomePage" />
  <img src="./public/Screenshot 2025-10-19 074729.png" alt=""  />
   <img src="./public/Screenshot 2025-10-19 074801.png" alt=""  />
   <img src="./public/Screenshot 2025-10-19 074829.png" alt=""  /> -->
</p>

## ✨ Overview  

LinqVibe lets users build, preview, and edit complete applications through conversational interactions with an AI agent.  
It integrates **Gemini AI** for intelligent code generation, **E2B** for secure sandbox execution, and **CodeRabbit** for AI-powered code reviews.  

Users can instantly:  
- Generate full applications by chatting with AI  
- View live app previews in real time  
- Inspect and modify AI-generated code  
- Manage authentication, billing, and settings seamlessly  

---

## 🧠 Key Features  

| Feature | Description |
|----------|-------------|
| 💬 **AI Jobs** | Background AI tasks that generate, review, and deploy app code. |
| 🧩 **Agent Memory & Tools** | Persistent memory and specialized agent tools for contextual conversations. |
| ⚙️ **Live Preview** | Real-time app preview that updates instantly with AI-generated code. |
| 🗂️ **Code & File Editor** | Full editor for reviewing and editing generated files. |
| 🔐 **Authentication** | Secure user auth with session management. |
| 💳 **Billing System** | Integrated payment flow for usage-based billing. |
| 🌗 **Light/Dark Mode** | Sleek, responsive design with theme switching. |
| 🧱 **Custom Sandboxes** | Dynamic sandbox environments built using Docker. |
| 🚦 **Rate Limiting** | Protects AI endpoints and ensures stable performance. |
| 🧑‍💻 **AI-Powered Code Reviews** | Powered by CodeRabbit for smart automated feedback. |

---

## 🏗️ Tech Stack  

**Frontend:**  
- Next.js 14 (App Router)  
- React.js  
- TypeScript  
- Tailwind CSS  
- TanStack Query  
- tRPC  

**Backend:**  
- Node.js  
- Prisma ORM  
- PostgreSQL (Neon DB)  
- Inngest (for background jobs & workflows)  
- E2B (secure cloud sandboxes)  
- Docker (sandbox template generation)  
- Gemini AI (AI model for app generation)  
- CodeRabbit (AI code reviews)  

**Deployment:**  
- Vercel (frontend & serverless backend)  
- Neon Database (PostgreSQL)  

---

# ⚙️ Getting Started with LinqVibe  

Follow these steps to set up the project locally, run tests, and deploy it to production.

---

## 🧩 1. Clone the Repository  

Start by cloning the repository and navigating into the project folder:  

```bash
git clone https://github.com/your-username/linqvibe.git
cd linqvibe
```

## 📦 2. Install Dependencies

```bash
npm install
```

This command installs all necessary packages defined in the package.json file.

## 🔐 3. Set Up Environment Variables

Create a .env file in the root directory and provide the following environment variables.
These are essential for connecting to your database, AI APIs, and authentication systems.

```bash
DATABASE_URL=your_neon_postgres_url
NEXT_PUBLIC_API_URL=http://localhost:3000
E2B_API_KEY=your_e2b_api_key
GEMINI_API_KEY=your_gemini_api_key
CODERABBIT_API_KEY=your_coderabbit_api_key
STRIPE_SECRET_KEY=your_stripe_key
NEXTAUTH_SECRET=your_next_auth_secret
```

## 🧱 4. Run Prisma Migrations

Use Prisma to set up and synchronize your database schema with the PostgreSQL instance.

```bash
npx prisma migrate dev
```
To inspect your data or view models visually, you can open Prisma Studio:

```bash
npx prisma studio
```

This launches a local database UI where you can manage your models, relations, and records.

## 🧑‍💻 5. Start the Development Server

After setup, start your development server using:

```bash
npm run dev
```

Then open your browser and go to:
👉 http://localhost:3000

You’ll now be able to:
- Chat with the AI to generate new projects
- View live app previews in real time
- Edit AI-generated files in the code editor
- Test authentication, billing, and agent tools

## 📦 Deployment

LinqVibe is optimized for Vercel deployment and scales automatically via serverless functions.

Follow these steps to deploy:

- Push your repository to GitHub.
- Go to Vercel and import the repository.
- In Project Settings → Environment Variables, add all required variables from your .env file.
- Click Deploy — Vercel will automatically build and deploy your project.

Once deployed, your LinqVibe instance will be live and production-ready, featuring:
* AI-driven app generation
* Live preview environments
* Authentication & billing
* Secure sandbox execution

🟢 Tip: You can connect NeonDB and Stripe directly to your Vercel project for seamless database and payment integration.

🚀 You’re All Set!

Your local LinqVibe environment should now be up and running.
You can explore, develop, and even extend the app’s AI features with your own tools or integrations.
