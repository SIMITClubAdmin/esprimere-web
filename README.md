# Esprimere Website

This is the official website for **Esprimere Club**.  
Built with **Next.js 15**, **Sanity CMS**, and **Tailwind CSS**.
Live at 👉 [esprimere.vercel.app](https://esprimere.vercel.app)

---

## 🚀 For Developers (How to Run)

1. **Clone the repo**  
   ```bash
   git clone https://github.com/SIMITClubAdmin/esprimere-web.git
   cd esprimere-web
   ```
   
2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Set up environment variables**
   Create a .env.local file in the project root:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-10-10
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```
   Site will be available at http://localhost:3000.

## 📝 For Esprimere Club Members (How to Add Data)

We use **Sanity Studio** to manage content.

👉 Open [https://esprimere.vercel.app/studio](https://esprimere.vercel.app/studio)
(Note: Only authorized club members with access can log in and edit data.)

Inside, you will see two main collections:

- **Our Team** 👥  
  - **Name**: Full name of the member  
  - **Role**: Position (e.g., President, Vice-President)  
  - **Image**: Upload a profile photo  

- **Past Activity** 🎉  
  - **Name**: Title of the activity  
  - **Image**: Upload a photo of the activity  
  - **Sequence**: Number to control order (lower numbers show first on the website)  

➡️ After editing or adding content, press **Publish** ✅ to make it live.

## 🛠️ Tech Stack

- **Next.js 15**  
- **Tailwind CSS**  
- **Sanity CMS**

Made with ❤️ by SIM IT Club
