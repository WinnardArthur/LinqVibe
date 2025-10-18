import { emoji } from "zod";

export const PROJECT_TEMPLATES = [
  {
    emoji: "🚀",
    title: "Build a landing page",
    prompt:
      "Build a landing page with a hero banner (use a nice, dark-mode compatible gradient here), features section, and a call-to-action using mock data and local state. Use dark mode.",
  },
  {
    emoji: "💼",
    title: "Build a portfolio site",
    prompt:
      "Create a personal portfolio website with a clean, modern layout. Include a hero section with a profile image, name, and short bio, followed by sections for projects, skills, and contact information. Each project should have an image, title, brief description, and a link. Use a consistent color palette, clear typography, and visual hierarchy to make the design professional and easy to navigate",
  },
  {
    emoji: "🎁",
    title: "Build a product launch page",
    prompt:
      "Create a modern product launch page with a clear hero section featuring the product name, tagline, and a prominent call-to-action button. Include sections for key features, screenshots or visuals, testimonials, and a pricing or signup area. Use bold typography, balanced spacing, and engaging visuals to create excitement and focus attention on the product’s value",
  },
  {
    emoji: "🎬",
    title: "Build a Netflix clone",
    prompt:
      "Build a Netflix-style homepage with a hero banner (use a nice, dark-mode compatible gradient here), movie sections, responsive cards, and a modal for viewing details using mock data and local state. Use dark mode.",
  },
  {
    emoji: "📦",
    title: "Build an admin dashboard",
    prompt:
      "Create an admin dashboard with a sidebar, stat cards, a chart placeholder, and a basic table with filter and pagination using local state. Use clear visual grouping and balance in your design for a modern, professional look.",
  },
  {
    emoji: "📋",
    title: "Build a kanban board",
    prompt:
      "Build a kanban board with drag-and-drop using react-beautiful-dnd and support for adding and removing tasks with local state. Use consistent spacing, column widths, and hover effects for a polished UI.",
  },
  {
    emoji: "🗂️",
    title: "Build a file manager",
    prompt:
      "Build a file manager with folder list, file grid, and options to rename or delete items using mock data and local state. Focus on spacing, clear icons, and visual distinction between folders and files.",
  },
  {
    emoji: "📺",
    title: "Build a YouTube clone",
    prompt:
      "Build a YouTube-style homepage with mock video thumbnails, a category sidebar, and a modal preview with title and description using local state. Ensure clean alignment and a well-organized grid layout.",
  },
  {
    emoji: "🛍️",
    title: "Build a store page",
    prompt:
      "Build a store page with category filters, a product grid, and local cart logic to add and remove items. Focus on clear typography, spacing, and button states for a great e-commerce UI.",
  },
  {
    emoji: "🏡",
    title: "Build an Airbnb clone",
    prompt:
      "Build an Airbnb-style listings grid with mock data, filter sidebar, and a modal with property details using local state. Use card spacing, soft shadows, and clean layout for a welcoming design.",
  },
  {
    emoji: "🎵",
    title: "Build a Spotify clone",
    prompt:
      "Build a Spotify-style music player with a sidebar for playlists, a main area for song details, and playback controls. Use local state for managing playback and song selection. Prioritize layout balance and intuitive control placement for a smooth user experience. Use dark mode.",
  },
] as const;
