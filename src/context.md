## Overview
A professional personal portfolio website for Owen Au, an independent China analyst. Features four pages with routing and scroll-based animations: Home (hero + latest 3 publications), About (biographical information with images), Publications (full filterable catalog with pagination), and Media (media coverage). Includes fixed gradient navigation, smooth scroll animations, and maintains a clean, editorial aesthetic with rounded cards and blue shadows.

## Available Imports

**Components:**
- `OwenAuPortfolio` - (named export) Main router component with navigation and layout
- `HomePage` - (named export) Home page with hero section and latest 3 publications
- `AboutPage` - (named export) About page with biographical content and images
- `MediaPage` - (named export) Media coverage page with images
- `PublicationsPage` - (named export) Full publications page with filtering and pagination

**Hooks:**
- `useInView` - (named export) Custom hook for scroll-based animations using IntersectionObserver

**Types:**
- `OwenAuPortfolioProps` - (named export) Props interface for OwenAuPortfolio

## Component Props & Types

```typescript
interface OwenAuPortfolioProps {
  'data-id'?: string
}
```

The main component accepts an optional `data-id` prop for identification. Individual page components take no props and can be used independently if needed.

## Import Patterns

```typescript
// Main component with routing
import { OwenAuPortfolio } from './OwenAuPortfolio'
import type { OwenAuPortfolioProps } from './OwenAuPortfolio'

// Individual page components (if needed separately)
import { HomePage, AboutPage, MediaPage, PublicationsPage } from './OwenAuPortfolio'

// Custom hook for scroll animations
import { useInView } from './OwenAuPortfolio'
```

## Usage Requirements

**Required Dependencies:**
- `react-router-dom` - Used for BrowserRouter and routing between pages
- `lucide-react` - Icons for UI elements

**No other special requirements:**
- No context providers needed beyond BrowserRouter (included in component)
- All state managed internally with React hooks
- Works as a standalone routed application

**Interactive Features:**
- Fixed gradient navigation with active page indication
- Four routes: `/` (home), `/about`, `/publications`, `/media`
- Scroll-based animations on all pages using IntersectionObserver
- Publication filter system on Publications page (All, Maritime Strategy, Geopolitics and Security, Hong Kong)
- Pagination controls (6 publications per page)
- Smooth transitions and hover effects on all interactive elements

## How It Works

**Routing:**
- Uses React Router's BrowserRouter for client-side routing
- Four main routes: Home (/), About (/about), Publications (/publications), Media (/media)
- Navigation persists across all pages with gradient background and active state indication
- Logo links to home page

**Scroll Animations:**
- Custom `useInView` hook uses IntersectionObserver API
- Elements animate when entering viewport (once per scroll)
- Animation effects: fade-in (opacity 0→1), scale-up (0.95→1), upward motion (translateY)
- Staggered delays on grid items for cascading effect
- Smooth 700ms transitions with ease-out timing

**Home Page:**
- Hero section with profile, description, and contact information
- "Latest Publications" section showing 3 most recent publications
- 1 large featured card + 2 smaller secondary cards
- Newsletter subscription CTA
- All elements animate on scroll

**Publications Page:**
- Full catalog of 17 publications with filtering
- Category filters (4 categories)
- 6 publications per page with pagination
- Card-based layout with rounded corners and blue shadows
- Each card animates on scroll with staggered delays
- Newsletter CTA at bottom

**About Page:**
- Single-column readable layout with biographical text
- Two images with scroll animations:
  - Wide image (933px) placed after intro paragraph
  - Portrait image (300px) on right side, sticky positioned
- Clean spacing optimized for long-form reading

**Media Page:**
- 3 selected media coverage items
- Each item has thumbnail image (left) and content (right)
- Headlines in Chinese with outlet and date
- Scroll animations on each media card

**Navigation:**
- Fixed gradient header (gray-900 to blue-900)
- Active page indicated with increased opacity and font weight
- Consistent hover states across all links
- Mobile-friendly responsive behavior

## Layout & Appearance

**Sizing:**
- Full-width component with white background
- Max-width containers vary by page:
  - Home: 7xl (widest for grid layouts)
  - About: 7xl (with flex layout for side image)
  - Publications: 7xl (for 3-column grid)
  - Media: 6xl (medium width for list)
- Fixed navigation header at top
- Consistent footer across all pages

**Color Scheme:**
- Primary navy/blue: #012d52, sky-950 (buttons, text, accents)
- Gradient header: from-gray-900 to-blue-900
- Accent orange: #ff6719 (CTA button)
- Text: sky-950, sky-700, blue-900 (various text elements)
- Background: white (changed from cream)
- Shadows: rgba(0,89,173,0.50) and rgba(0,89,173,1.00) (blue-tinted)

**Card Styling (Publications):**
- White background with rounded-2xl corners
- Shadow: `shadow-[4px_4px_10px_0px_rgba(0,89,173,0.50)]`
- Image shadow: `shadow-[0px_4px_10px_0px_rgba(0,89,173,1.00)]`
- Category badge: `bg-sky-950/80` with white text
- Hover effect: Enhanced shadow

**Typography:**
- Font family: 'Inter' (applied throughout)
- Bold weights for headings and names
- Regular weights for body text
- Responsive text sizing
- Large headings: text-7xl for page titles
- Body text: text-lg for readability

**Responsive Behavior:**
- Desktop (lg): 3-column publication grid, side-by-side layouts
- Tablet (md): 2-column grids
- Mobile: Single column, stacked layouts
- Navigation remains fixed across all breakpoints
- Images scale appropriately

## Styling & Theming

**Customization:**
- Main component does not accept className prop
- Uses Tailwind CSS with custom arbitrary values
- Lucide React icons for UI elements
- Inter font family applied via font-['Inter']

**Animation Pattern:**
```typescript
const { ref, inView } = useInView()

<div
  ref={ref}
  className={`transition-all duration-700 ease-out ${
    inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
  }`}
>
  {/* Content */}
</div>
```

**Interactive States:**
- Active navigation: Increased opacity and font weight
- Active filter: Filled background with white text
- Inactive filter: White background with border
- Hover states: Opacity changes, enhanced shadows
- Disabled pagination: Reduced opacity, no pointer cursor
- Card hover: Shadow enhancement

**No custom Tailwind config required** - uses arbitrary values and default utilities.

## Code Examples

### Example 1: Basic Usage
```typescript
import { OwenAuPortfolio } from './OwenAuPortfolio'

function App() {
  return <OwenAuPortfolio />
}
```

### Example 2: With Data ID
```typescript
import { OwenAuPortfolio } from './OwenAuPortfolio'

function App() {
  return <OwenAuPortfolio data-id="owen-portfolio" />
}
```

### Example 3: Using the useInView Hook
```typescript
import { useInView } from './OwenAuPortfolio'

function CustomComponent() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Content animates when in view
    </div>
  )
}
```

### Example 4: Full Application Setup
```typescript
import { OwenAuPortfolio } from './OwenAuPortfolio'
import { render } from 'react-dom'

function App() {
  return <OwenAuPortfolio data-id="main-site" />
}

render(<App />, document.getElementById('root'))
```

## Page Content

**Home Page:**
- Hero section with Owen Au's profile and introduction
- Latest 3 publications (1 featured + 2 secondary)
- Newsletter subscription CTA
- Scroll animations on all sections

**Publications Page:**
- Full catalog of 17 publications
- 4 category filters with active states
- 6 publications per page with pagination
- Card-based layout with rounded corners and blue shadows
- Newsletter CTA at bottom
- Scroll animations on cards with staggered delays

**About Page:**
- Biographical information about Owen Au
- Educational background (CUHK, SOAS)
- Professional experience and collaborations
- Research focus areas
- Current projects (China Maritime Watch)
- Two images with scroll animations:
  - Wide landscape image after intro
  - Portrait image on right side (sticky)

**Media Page:**
- 3 selected media coverage items with images
- Chinese-language headlines
- Media outlets: SET News, Pulse HK News, Photon Media
- Publication dates from August-December 2025
- Horizontal layout with thumbnail + content
- Scroll animations on each item

## Publication Data

17 publications across 4 categories:
- **All** (17 total)
- **Maritime Strategy** (9): Naval capabilities, maritime law, sea power
- **Geopolitics and Security** (5): International relations, defense strategy
- **Hong Kong** (3): Governance, business relations, political transformation

Each publication includes: title, author(s), publisher, date, category, image, and excerpt.

## Animation Details

**useInView Hook:**
- Uses IntersectionObserver API
- Default threshold: 0.1 (triggers when 10% visible)
- Customizable options
- Returns ref and inView state
- Triggers animation once when element enters viewport

**Animation Properties:**
- Duration: 700ms
- Timing: ease-out
- Effects: opacity (0→1), translateY (5→0), scale (0.95→1)
- Staggered delays on grid items (100-150ms increments)

**Applied To:**
- Hero section elements
- Publication cards
- About page images
- Media items
- All major content sections

## Notes

- Requires `react-router-dom` for routing functionality
- All 17 publications use real titles, authors, publishers, and dates
- Newsletter subscription button is non-functional (frontend only)
- Publication "Read More" links navigate to /publications page
- Images use Unsplash and Google Drive URLs
- BrowserRouter is included in the main component
- Navigation automatically highlights active page
- Scroll animations trigger once per element
- Professional, editorial aesthetic suitable for policy/research context
- White background with blue-tinted shadows throughout
- Instrument Sans font family for consistent typography
- Fully responsive with mobile-friendly navigation
- Sticky positioning on About page portrait image (desktop only)
