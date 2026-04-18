# Canvas Editor

Canvas Editor is a responsive, dynamic page builder built with React and Tailwind CSS. It features a drag-and-drop interface that allows users to construct custom layouts using modular blocks, with inline editing and local storage persistence.

## Live Demo

[View Application](https://canvas-editor-delta.vercel.app/)

## Repository

[GitHub](https://github.com/Navimish/Canvas-Editor)

## Features

* Drag-and-drop interface for rearranging content blocks
* Modular elements: Headings, Text, Images, Markdown
* Inline editing for text updates
* Image URL editing with overlay interaction
* Real-time block counter
* Local storage persistence (auto-save and load)
* Responsive dark-themed UI
* Scalable component architecture

## Tech Stack

* Frontend: React (Vite)
* Styling: Tailwind CSS
* State Management: Zustand
* Drag and Drop: @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities
* Icons: Lucide React
* Deployment: Vercel or Netlify

## Architecture

* Zustand is used for global state to manage blocks efficiently and avoid prop drilling
* BlockRenderer follows a factory pattern to render UI from JSON data
* Drag-and-drop logic is isolated in SortableItem
* Local storage is initialized inside the store to prevent React Strict Mode issues
* Each block type is modular and stored separately

## Folder Structure

```
src/
├── components/
│   ├── blocks/
│   │   ├── HeaderBlock.jsx
│   │   ├── ImageBlock.jsx
│   │   ├── MarkdownBlock.jsx
│   │   └── TextBlock.jsx
│   ├── BlockRenderer.jsx
│   ├── Canvas.jsx
│   ├── Palette.jsx
│   └── SortableItem.jsx
├── store/
│   └── useStore.js
├── utils/
│   └── defaultBlocks.js
├── App.jsx
├── main.jsx
└── index.css
```

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/Navimish/Canvas-Editor.git
cd Canvas-Editor
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```

## Demo Video

[Watch Demo](https://drive.google.com/file/d/1XTfsV3mpM3Oyju4sbpLCp92YPhz7r3wc/view?usp=sharing)

## Future Improvements

* Undo and Redo functionality
* Export layout to HTML or JSON
* Additional block types (video, code, columns)
* Theme customization

## Author

Navneet Mishra