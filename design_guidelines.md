# THyPE Technology - Design Guidelines

## Design Approach
**Reference-Based + Futuristic Tech Aesthetic**: Cyberpunk-inspired tech company website with 3D elements, glassmorphism, and neon glow effects. Think futuristic dashboards meets modern SaaS landing pages.

## Typography
- **Primary Font**: Cascadia Code (MANDATORY for all text)
- **Hierarchy**: Use font weights and sizes to create clear distinction between headings, body text, and CTAs while maintaining the monospace aesthetic

## Color Palette (Official THyPE Colors - USE EXCLUSIVELY)
```
Primary Purple: #5C00AB
Secondary Purple: #532CB8
Primary Blue: #2D67CE
Accent Blue: #1C8DDB
Light Cyan: #7CC7D8
Dark Background: #040A14
```

- **Gradients**: Diagonal purple → blue (#5C00AB → #2D67CE → #7CC7D8)
- **Background**: Dark (#040A14) with technological grid pattern in blue/purple tones
- **Accents**: Neon glow effects using the palette colors

## Layout & Spacing
- **Spacing Units**: Use consistent spacing with Tailwind units (4, 6, 8, 12, 16, 24)
- **Section Padding**: py-20 to py-32 for desktop, py-12 to py-16 for mobile
- **Max Width**: max-w-7xl for main container, max-w-6xl for content sections
- **Grid**: Use 3-column grid for product cards, 2-column for differentials/process

## Core Visual Elements

### Background Treatment
- Dark base (#040A14) with animated technological grid overlay in blue/purple
- Soft neon lights scattered throughout
- Diagonal gradient overlays (purple → blue)
- Particle effects or subtle animated lines for depth

### Glassmorphism Cards
- Semi-transparent backgrounds with backdrop-blur
- Subtle border glow using palette colors
- Box shadow with colored glow (purple/blue)
- Hover states with increased glow intensity

### 3D Elements & Objects
- **Hero**: Floating 3D shapes with neon edges, rotating slowly
- **Quem Somos**: Futuristic illuminated lamp/hologram or fluid 3D form (purple/blue gradient)
- **Diferenciais**: 3D neon rocket or liquid metallic form with glow
- **Portfolio Mockups**: iPhone mockups with floating animation (subtle y-axis movement + slight tilt)
- All 3D objects should have soft shadows and edge lighting

## Section-Specific Guidelines

### 1. Hero Section
- THyPE logo (use provided Logotipo Thype Principal Cor@2x.png)
- Animated tech grid background with gradient overlay
- Floating 3D geometric shapes
- Concise tagline with CTA button
- Smooth scroll indicator

### 2. Quem Somos (Who We Are)
- **Layout**: Two-column (60% text, 40% 3D visual)
- **Text**: Official company description (3 paragraphs) - preserve exactly as provided
- **Visual**: 3D illuminated object (holographic lamp/fluid form) with purple-blue glow
- Glassmorphism card containing the text

### 3. Nossos Produtos (Products)
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **6 Cards** with icons and glassmorphism:
  1. Desenvolvimento de Aplicativos Móveis
  2. Inteligência Artificial Aplicada
  3. Automação de Processos Empresariais
  4. Dashboards e Análises Inteligentes
  5. Soluções de Backend Personalizadas
  6. Consultoria em Transformação Digital
- Each card: Icon (tech-style), title, brief description, glow border on hover
- Footer text (official paragraph about solutions) below cards

### 4. Nossos Diferenciais (Differentials)
- **5 Differential Points** in cards/list format
- 3D neon rocket or liquid metallic object on the side
- Each point with checkmark or dot indicator
- Glassmorphism container with glow border

### 5. Portfólio - App Cíclica
- **Template**: Purple dark background (#5C00AB range)
- **Mockup**: 3 iPhone screens showing app interface (use provided template style)
- Butterfly logo in green-lime
- Purple UI fields with green-lime CTA button
- Floating animation (gentle up-down + tilt)
- **Title**: "Cíclica – O app que acompanha seu ciclo e sua energia"
- **Description**: Official text provided
- "Ver detalhes do projeto" button
- Gradient background: pink → purple (matching provided template)

### 6. Portfólio - App 2 (Placeholder)
- **Identical structure** to Cíclica
- Same layout, animation, and glassmorphism style
- Placeholder title: "Projeto Mobile – App 2"
- Placeholder description provided
- Ready for future content swap

### 7. Processo de Desenvolvimento (Process)
- **3 Cards** with 3D depth:
  1. Pesquisa e Análise de Mercado
  2. Prototipagem e Desenvolvimento
  3. Implementação e Suporte Contínuo
- Each card with icon, title, description
- Sequential visual flow (arrows or connecting lines optional)

### 8. Contato (Contact)
- **CTA**: "Vamos criar algo inteligente juntos?"
- Two buttons: "Fale com a Thype" + "Solicitar orçamento"
- Neon purple → blue gradient background
- Minimalist neon icons (phone, email, location optional)
- High contrast for visibility

## Animations & Interactions
- **Scroll Animations**: Fade-in and slide-up on scroll (subtle, smooth)
- **3D Objects**: Slow rotation or floating (2-3 second cycles)
- **Mockups**: Gentle floating animation + slight tilt on hover
- **Cards**: Glow intensity increase on hover
- **Buttons**: Neon glow pulse on hover, scale 1.02
- **Grid Background**: Subtle parallax or slow movement
- Keep all animations smooth (ease-in-out) and non-distracting

## Responsive Behavior
- **Desktop**: Full multi-column layouts, 3D elements visible
- **Tablet**: 2-column grids, scaled 3D elements
- **Mobile**: Single column, simplified 3D elements, maintained animations
- Portfolio mockups scale proportionally on all devices

## Component Structure
- All text content must be preserved EXACTLY as provided
- Glassmorphism cards: `backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(92,0,171,0.3)]`
- Neon glow effects: `shadow-[0_0_15px_currentColor]` on hover
- 3D transforms: `transform-style: preserve-3d` for depth

## Images
- **Logo**: Use provided THyPE logo files (Logotipo and Símbolo)
- **Cíclica App**: Use provided Purple Pink Gradient template as design reference
- **3D Objects**: CSS-based 3D shapes or Three.js elements (lamps, rockets, fluid forms)
- **Icons**: Font Awesome or Heroicons in neon style with glow effects

This is a **comprehensive, feature-rich one-page site** with multiple sections, 3D elements, and portfolio showcases. Every section must be fully realized with all specified content and visual treatments.