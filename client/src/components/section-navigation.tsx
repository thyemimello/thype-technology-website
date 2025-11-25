import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Início" },
  { id: "quem-somos", label: "Quem Somos" },
  { id: "produtos", label: "Produtos" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "portfolio-ciclica", label: "Portfólio" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" }
];

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      data-testid="nav-section-navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center justify-end w-full"
            data-testid={`button-nav-${id}`}
            aria-label={`Navigate to ${label} section`}
            aria-current={isActive ? 'location' : undefined}
          >
            {/* Label tooltip */}
            <span 
              className={`
                absolute right-6 px-3 py-1 rounded-md
                backdrop-blur-lg bg-card/90 border border-primary/20
                text-sm text-card-foreground whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${isActive 
                  ? 'opacity-100 translate-x-0 shadow-[0_0_20px_rgba(92,0,171,0.4)]' 
                  : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                }
              `}
              role="tooltip"
              aria-hidden={!isActive && 'true'}
            >
              {label}
            </span>

            {/* Dot indicator */}
            <div className={`
              relative w-3 h-3 rounded-full transition-all duration-300
              ${isActive 
                ? 'bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] shadow-[0_0_10px_rgba(92,0,171,0.8)]' 
                : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/60'
              }
              ${isActive ? 'scale-150' : 'scale-100 group-hover:scale-125'}
            `} />
          </button>
        );
      })}
    </nav>
  );
}
