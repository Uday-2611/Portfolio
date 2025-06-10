# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Navigation**: Smooth scrolling to different sections
- **Fixed Sidebar**: Left navigation stays fixed while content scrolls
- **Project Showcase**: 
  - Project cards with images
  - Hover animations
  - External links to GitHub
- **Contact Form**: 
  - Name, email, subject, and message fields
  - Form validation
  - Success/error notifications
  - Powered by Web3Forms
- **Modern UI**:
  - Clean, minimalist design
  - Custom fonts (Archia, AeonikLight)
  - Consistent color scheme
  - Hover effects and animations

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Web3Forms (for contact form)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file with your Web3Forms access key:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```
