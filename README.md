# Interactive Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode toggle, and a comprehensive showcase of skills, projects, and experience.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Interactive Sections**:
  - Hero section with animated background
  - About me with stats and highlights
  - Skills showcase with proficiency levels
  - Project portfolio with live demos and source links
  - Experience timeline
  - Contact form with multiple contact methods
- **Performance Optimized**: Fast loading and smooth scrolling
- **Accessibility**: Semantic HTML and ARIA labels
- **Type Safety**: Built with TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   └── ui/             # Reusable UI components
├── data/               # Static data and content
├── types/              # TypeScript type definitions
├── assets/             # Images and static files
└── styles/             # Global styles
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/index.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Shiva Kumar",
  title: "Your Title",
  bio: "Your bio...",
  // ... other fields
};
```

### Skills
Add or modify skills in the same file:

```typescript
export const skills: Skill[] = [
  { name: "React", level: 9, category: "frontend", icon: "⚛️" },
  // ... add more skills
];
```

### Projects
Showcase your projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    // ... other fields
  }
];
```

### Styling
- Colors and themes: `tailwind.config.js`
- Custom CSS classes: `src/index.css`

## 🌐 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📧 Contact Form Setup

The contact form currently shows a mock submission. To make it functional:

1. **EmailJS Integration**:
   ```bash
   npm install @emailjs/browser
   ```

2. **Netlify Forms**: Add `netlify` attribute to form

3. **Custom Backend**: Connect to your own API endpoint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from emoji and SVG libraries

---

Made with ❤️ by [Shiva Kumar](mailto:shivakumarkothapally5@gmail.com)