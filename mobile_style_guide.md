# Mobile Style Guide

## Overview
This guide defines the mobile-first design system for our application, ensuring consistent spacing, typography, and component behavior across all mobile viewports (< 768px).

---

## Spacing System

### Container Padding
- **Default horizontal padding**: `px-4` (1rem / 16px)
- **Maximum width**: Full width on mobile, no container constraints
- **Vertical section spacing**: `py-12` to `py-16` (3-4rem)

### Component Spacing
- **Between sections**: `mb-12` or `mb-16`
- **Between cards/items**: `gap-6` (1.5rem)
- **Within cards**: 
  - Header: `p-4` to `p-6`
  - Content: `p-4` to `p-6`
  - Between elements: `mb-4` (1rem)

### Grid Layout
```
Mobile (< 768px):
- grid-cols-1 (single column)
- gap-6 (1.5rem between items)
```

---

## Typography Hierarchy

### Font Sizes
- **Hero/H1**: `text-3xl` (1.875rem / 30px) or `text-4xl` (2.25rem / 36px)
- **Section Heading/H2**: `text-2xl` (1.5rem / 24px) or `text-3xl`
- **Card Title/H3**: `text-lg` (1.125rem / 18px) or `text-xl` (1.25rem / 20px)
- **Body Text**: `text-sm` (0.875rem / 14px) or `text-base` (1rem / 16px)
- **Muted/Secondary**: `text-sm` with `text-muted-foreground`
- **Button Text**: `text-sm` or `text-base`

### Font Weights
- **Headings**: `font-bold` (700)
- **Subheadings**: `font-semibold` (600)
- **Body**: `font-normal` (400)
- **Buttons**: `font-medium` (500)

### Line Height & Letter Spacing
- **Headings**: Default Tailwind `leading-tight` or `leading-snug`
- **Body Text**: Default (`leading-normal`)
- **Compact Text**: `leading-relaxed` for better readability on small screens

### Text Alignment
- **Default**: `text-left` (left-aligned)
- **Exceptions**: 
  - Section headings can be `text-center` for emphasis
  - Hero titles can be `text-center` or `text-left`
  - Card content: `text-left`
  - Buttons in cards: Full width (`w-full`) with left-aligned text

---

## Navigation

### Mobile Navbar (< 768px)
Replace standard horizontal navigation with a hamburger menu:

**Structure**:
```jsx
// Mobile navbar layout
<nav className="fixed top-0 w-full bg-white border-b z-50">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={120} height={32} />
      </Link>
      
      {/* Hamburger Button */}
      <button 
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" /* hamburger icon */ />
      </button>
    </div>
  </div>
  
  {/* Mobile Menu (slide-in or dropdown) */}
  <div className="md:hidden">
    {/* Navigation links */}
  </div>
</nav>
```

**Hamburger Menu Specs**:
- **Icon size**: `w-6 h-6` (24px)
- **Button padding**: `p-2`
- **Position**: `fixed top-0` with `z-50`
- **Background**: `bg-white` with `border-b`
- **Height**: `h-16` (4rem / 64px)

**Mobile Menu Panel**:
- **Full width**: `w-full`
- **Padding**: `px-4 py-6`
- **Link spacing**: `py-3` per link
- **Font size**: `text-base` or `text-lg`
- **Alignment**: `text-left`
- **Animation**: Slide from top or right with `transition-transform`

### Desktop Navbar (≥ 768px)
Show standard horizontal navigation:
```jsx
<nav className="hidden md:flex items-center gap-6">
  <Link href="/about">About</Link>
  <Link href="/portfolio">Portfolio</Link>
  {/* ... */}
</nav>
```

---

## Cards & Components

### Card Layout (Mobile)
```jsx
<Card className="w-full">
  {/* Image */}
  <div className="w-full h-40 relative rounded-t-xl">
    <Image ... />
  </div>
  
  {/* Header */}
  <CardHeader className="p-4">
    <CardTitle className="text-lg">{title}</CardTitle>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </CardHeader>
  
  {/* Content */}
  <CardContent className="p-4 pt-0">
    <p className="text-sm mb-4 line-clamp-3">{description}</p>
    <Button variant="outline" className="w-full">
      {cta}
    </Button>
  </CardContent>
</Card>
```

**Card Specs**:
- **Image height**: `h-40` (10rem / 160px)
- **Border radius**: `rounded-xl`
- **Padding**: `p-4` consistently
- **Text truncation**: Use `line-clamp-3` for descriptions
- **Button**: Full width (`w-full`)

---

## Buttons

### Mobile Button Styles
- **Full width in cards**: `w-full`
- **Padding**: `px-4 py-2` (default)
- **Font size**: `text-sm` or `text-base`
- **Min touch target**: `h-10` or `h-11` (44px minimum)
- **Border radius**: `rounded-md` or `rounded-lg`

### Button Hierarchy
- **Primary**: `bg-primary text-primary-foreground`
- **Secondary/Outline**: `variant="outline"`
- **Ghost**: `variant="ghost"` for subtle actions

---

## Responsive Breakpoints

```css
/* Mobile-first approach */
Default (< 768px): Mobile styles
md: (≥ 768px): Tablet
lg: (≥ 1024px): Desktop
xl: (≥ 1280px): Large desktop
```

**Implementation Pattern**:
```jsx
className="
  text-2xl md:text-3xl lg:text-4xl
  px-4 md:px-6 lg:px-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
"
```

---

## Mobile-Specific Patterns

### Section Structure
```jsx
<section className="py-12 md:py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
      Section Title
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Content */}
    </div>
  </div>
</section>
```

### Image Handling
- **Aspect ratio**: Use `aspect-video` or fixed heights
- **Object fit**: `object-contain` for logos, `object-cover` for photos
- **Loading**: `loading="lazy"` for below-fold images
- **Sizes**: Optimize with Next.js Image `sizes` prop

### Text Overflow
- **Truncate**: `line-clamp-2`, `line-clamp-3`
- **Overflow**: `overflow-hidden text-ellipsis`

---

## Performance & Accessibility

### Touch Targets
- **Minimum size**: 44x44px (`h-11 w-11`)
- **Spacing**: `gap-2` minimum between tappable elements

### Focus States
- **Visible focus rings**: `focus:ring-2 focus:ring-primary`
- **Skip to content**: Include for keyboard navigation

### Text Readability
- **Contrast**: WCAG AA minimum (4.5:1 for body text)
- **Line length**: Max 65-75 characters per line
- **Font size**: Minimum `text-sm` (14px) for body text

---

## Color Palette

```css
/* Using Tailwind/shadcn conventions */
Background: bg-white, bg-gray-50
Text: text-foreground, text-muted-foreground
Border: border-gray-200
Primary: bg-primary, text-primary
Accent: bg-accent
```

---

## Common Utilities

```jsx
// Container
className="container mx-auto px-4"

// Section
className="py-12 md:py-16"

// Card Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Heading
className="text-2xl md:text-3xl font-bold text-center mb-8"

// Body Text
className="text-sm md:text-base text-left"

// Full-width Button
className="w-full h-10 text-sm"
```

---

## Implementation Checklist

- [ ] All navigation shows hamburger menu on mobile (`< md:`)
- [ ] All text is left-aligned by default (except centered headings)
- [ ] Cards use single column layout (`grid-cols-1`)
- [ ] Buttons in cards are full width (`w-full`)
- [ ] Touch targets are minimum 44px
- [ ] Horizontal padding is `px-4` on mobile
- [ ] Font sizes scale responsively
- [ ] Images have proper aspect ratios and loading states