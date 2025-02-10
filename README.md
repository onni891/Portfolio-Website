# Kooditaivas.fi - React App

This is the frontend codebase for **Kooditaivas.fi**, a website built using **React** and **Vite**. This project does not include a backend and serves as a static frontend application.

## 🚀 Features

- **Vite** for fast development and optimized production builds
- **React** for building a dynamic and modular UI
- **Chakra UI** for accessible and customizable UI components
- **ESLint & Prettier** for code quality 

## 📂 Project Structure

```
📦 kooditaivas-frontend
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 pages       # Page components for routing
│   ├── 📂 assets      # Static assets (images, fonts, etc.)
│   ├── 📂 styles      # Global styles
│   ├── 📜 main.jsx    # Main entry point
│   ├── 📜 App.jsx     # Root component
│
├── 📂 public          # Static public files
├── 📜 index.html      # Main HTML file
├── 📜 package.json    # Project metadata & dependencies
├── 📜 vite.config.js  # Vite configuration
├── 📜 README.md       # Documentation
```

## 📦 Installation

Ensure you have **Node.js** installed, then clone this repository and install dependencies:

```sh
git clone https://github.com/your-repo/kooditaivas-frontend.git
cd kooditaivas-frontend
npm install  # or yarn install / pnpm install
```

## 🛠 Development

Run the development server:

```sh
npm run dev  # or yarn dev / pnpm dev
```

The app will be available at **http://localhost:5173/** (default Vite port).

## 🔨 Building for Production

To generate an optimized production build:

```sh
npm run build  # or yarn build / pnpm build
```

The output will be in the **dist/** folder.

## 🚀 Deployment

You can deploy this static frontend to:

- **Vercel**: `vercel` (if using Vercel CLI)
- **Netlify**: `netlify deploy`
- **GitHub Pages**: `npm run build` and use GitHub Actions
- **Any Static Hosting**: Upload the `dist/` folder

## 🔍 Live Preview

You can preview the website at: [Kooditaivas.fi](https://kooditaivas.fi)

## 🛠 Recommended Extensions (VSCode)

- **ESLint** (for linting)
- **Prettier** (for auto-formatting)


## 🤝 Contributing

If you want to contribute, feel free to fork the repository and create a pull request!

## 📜 License

This project is licensed under the MIT License.

---

If you have any questions, visit [Kooditaivas.fi](https://kooditaivas.fi). 🎉
