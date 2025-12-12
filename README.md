# Task Management Interface

A production-ready task management interface built with React.js and Tailwind CSS, featuring both Kanban board and list view layouts with full responsive design.

## Features

- **Kanban Board View**: Drag-and-drop ready interface with 4 status columns (Backlog, In Progress, Review, Done)
- **List View**: Clean table layout with sortable columns
- **Task Details Drawer**: Comprehensive task management with comments and activity log
- **Responsive Design**: Optimized for mobile (375px+), tablet, and desktop (1280px+)
- **Search Functionality**: Real-time task filtering
- **Mock Data**: Bengali language content for realistic local context

## Tech Stack

- **React.js 18.3** - UI framework
- **Tailwind CSS 3.4** - Utility-first styling
- **React Router DOM 7.10** - Client-side routing
- **Vite 5.1** - Build tool and dev server
- **No UI libraries** - Pure React + Tailwind implementation

## Project Structure

```
/src
  /components
    /common       - Reusable UI components (Avatar, Badge, StatusBadge, Container, Topbar)
    /drawer       - Task drawer component
    /kanban       - Kanban board components (KanbanBoard, KanbanColumn, TaskCard)
    /list         - List view components (TaskListView, TaskRow)
    /Icons        - SVG icon library
  /pages          - Route-level components (KanbanPage, ListViewPage)
  /data           - Mock data (mockData.js)
  /lib            - Utility functions
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd kanban-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Responsive Breakpoints

- **Mobile**: 375px - 767px (horizontal scroll for Kanban, card-style list)
- **Tablet**: 768px - 1023px (optimized spacing)
- **Desktop**: 1024px+ (full table layout, all columns visible)

## Key Components

### KanbanPage

Main Kanban board view with column-based task organization.

### ListViewPage

Table-based task list with comprehensive task information.

### TaskDrawer

Slide-in drawer for viewing and editing task details, including:

- Title, status, priority, assignee, due date
- Description
- Comments section
- Activity log

### TopBar

Unified navigation bar with:

- Board title and project selector
- View toggle (Kanban/List)
- Search functionality
- Filter button
- New Task button

## Design System

### Spacing

Consistent 4px base unit using Tailwind utilities (p-2, p-3, p-4, gap-2, gap-3, gap-4)

### Typography

- Labels: text-xs
- Body: text-sm
- Headings: text-lg, text-xl

### Colors

- Primary: Blue (blue-500, blue-600)
- Status: Gray (backlog), Blue (in-progress), Yellow (review), Green (done)
- Priority: Gray (low), Blue (medium), Orange (high), Red (urgent)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update vite.config.js with base path
4. Run: `npm run deploy`

## Live Demo

https://kanban-app-dusky.vercel.app/kanban

## Implementation Notes

See `notes.txt` for detailed information about:

- Layout decisions
- Responsiveness approach
- Wireframe to React component mapping
- Technical implementation details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Author

Md Emon
