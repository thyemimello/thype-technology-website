import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactDialog } from "@/components/contact-dialog";
import { SectionNavigation } from "@/components/section-navigation";
import { LanguageSelector } from "@/components/language-selector";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslation } from "@/i18n";
import { Link } from "wouter";
import {
  Smartphone,
  Brain,
  Cog,
  BarChart3,
  Server,
  Users,
  CheckCircle2,
  BrainCircuit,
  Search,
  Code,
  Lightbulb,
  Mail,
  Phone,
  Star,
  Quote,
  Palette,
} from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { SafeSpline } from "@/components/safe-spline";

export default function Home() {
  const { t, language } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"contact" | "quote">("contact");
  const [menuOpen, setMenuOpen] = useState(false);
  const typedTextRef = useRef<HTMLSpanElement>(null);

  // Scroll animations for sections
  const aboutSection = useScrollAnimation(0.2);
  const productsSection = useScrollAnimation(0.1);
  const differentialsSection = useScrollAnimation(0.2);
  const portfolioSection = useScrollAnimation(0.2);
  const testimonialsSection = useScrollAnimation(0.2);
  const processSection = useScrollAnimation(0.2);
  const contactSection = useScrollAnimation(0.2);

  // Typed.js effect for animated text
  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: [t("hero.typed4")],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, [language, t]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function for safe parallax with clamped values
  const getParallax = (multiplier: number, max: number = 100) => {
    const value = scrollY * multiplier;
    return Math.max(-max, Math.min(max, value));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openContactDialog = (type: "contact" | "quote") => {
    setDialogType(type);
    setContactDialogOpen(true);
  };

  const openWhatsApp = () => {
    const phoneNumber = "5547988140013";
    const messages = {
      pt: "Olá! Gostaria de falar com um especialista da THyPE Technology.",
      en: "Hello! I would like to speak with a THyPE Technology specialist.",
      es: "¡Hola! Me gustaría hablar con un especialista de THyPE Technology.",
    };
    const message = messages[language];
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const openInstagram = () => {
    const instagramUrl =
      "https://www.instagram.com/thype_aisolutions?igsh=aTQxZ2hkMjRtb2p5&utm_source=qr";
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Section Navigation */}
      <SectionNavigation />

      {/* Animated Tech Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C00AB] via-[#2D67CE] to-[#040A14] opacity-80" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(92, 0, 171, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(92, 0, 171, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translateY(${getParallax(0.2, 60)}px)`,
          }}
        />

        {/* Fractal Light Waves - THyPE Colors */}
        <div className="fractal-wave-container">
          <div className="fractal-wave fractal-wave-1"></div>
          <div className="fractal-wave fractal-wave-2"></div>
          <div className="fractal-wave fractal-wave-3"></div>
          <div className="fractal-wave fractal-wave-4"></div>
          <div className="fractal-wave fractal-wave-5"></div>
        </div>

        {/* Floating Neon Lights */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#5C00AB] rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-[#2D67CE] rounded-full blur-[140px] opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-[#7CC7D8] rounded-full blur-[160px] opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section with Video Background */}
        <section id="hero" className="relative min-h-screen overflow-hidden">
          {/* Navbar */}
          <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
            <img
              src="/assets/Logotipo Thype Principal Cor@2x_1764008378756.png"
              alt="Thype Logo"
              className="h-12 md:h-16 drop-shadow-[0_0_20px_rgba(92,0,171,0.8)]"
              data-testid="img-navbar-logo"
            />

            {/* Right Side: Language Selector + Menu Button */}
            <div className="flex items-center gap-3 z-50">
              <LanguageSelector />

              {/* Hamburger Button */}
              <button
                className="flex flex-col gap-1.5 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
                data-testid="button-menu-hamburger"
              >
                <span
                  className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-foreground transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>

            {/* Menu Items */}
            <ul
              className={`
              fixed md:relative inset-0 md:inset-auto
              bg-background/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
              flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center
              transition-transform duration-300 md:translate-x-0 z-40
              ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
              data-testid="menu-navigation"
            >
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-[#7CC7D8] transition-colors"
                data-testid="link-menu-home"
              >
                {t("nav.home")}
              </li>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("quem-somos");
                }}
                className="cursor-pointer hover:text-[#7CC7D8] transition-colors"
                data-testid="link-menu-about"
              >
                {t("nav.about")}
              </li>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("produtos");
                }}
                className="cursor-pointer hover:text-[#7CC7D8] transition-colors"
                data-testid="link-menu-services"
              >
                {t("nav.services")}
              </li>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("portfolio");
                }}
                className="cursor-pointer hover:text-[#7CC7D8] transition-colors"
                data-testid="link-menu-portfolio"
              >
                {t("nav.portfolio")}
              </li>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("contato");
                }}
                className="cursor-pointer hover:text-[#7CC7D8] transition-colors"
                data-testid="link-menu-contact"
              >
                {t("nav.contact")}
              </li>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  openWhatsApp();
                }}
                className="bg-gradient-to-r from-[#5C00AB] to-[#2D67CE] hover:shadow-[0_0_20px_rgba(92,0,171,0.6)]"
                data-testid="button-menu-whatsapp"
              >
                {t("nav.whatsapp")}
              </Button>
            </ul>
          </nav>

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="video-hero-background"
          >
            <source
              src="/assets/vecteezy_gently-flowing-and-rippling-neon-colored-pink-and-blue_35580092_1764019237897.webm"
              type="video/webm"
            />
            Seu navegador não suporta vídeos em background.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040A14]/80 via-[#040A14]/60 to-[#040A14]/90" />

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 lg:px-12 py-20 md:py-0">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  data-testid="text-hero-title"
                >
                  <span className="bg-gradient-to-r from-[#7CC7D8] via-[#2D67CE] to-[#5C00AB] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,199,216,0.6)]">
                    {t("hero.title")}{" "}
                  </span>
                  <span
                    ref={typedTextRef}
                    className="bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
                    data-testid="text-hero-typed"
                  ></span>
                </h1>

                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed"
                  data-testid="text-hero-subtitle"
                >
                  {t("hero.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#5C00AB] to-[#2D67CE] hover:shadow-[0_0_40px_rgba(92,0,171,0.8)] transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                    onClick={openWhatsApp}
                    data-testid="button-hero-specialist"
                  >
                    {t("hero.cta")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#7CC7D8] text-[#7CC7D8] hover:bg-[#7CC7D8]/20 hover:shadow-[0_0_30px_rgba(124,199,216,0.6)] backdrop-blur-sm text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                    onClick={() => scrollToSection("portfolio")}
                    data-testid="button-hero-portfolio"
                  >
                    Ver Cases
                  </Button>
                </div>
              </div>

              {/* Spline 3D Robot */}
              <div
                className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center overflow-visible order-1 lg:order-2"
                data-testid="container-spline-robot"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: "translate(-10%, -10%)" }}
                >
                  <SafeSpline
                    scene="https://prod.spline.design/G-WkEdmuaQVjJTbH/scene.splinecode"
                    style={{
                      width: "175%",
                      height: "120%",
                      overflow: "visible",
                      clipPath: "none",
                    }}
                    renderOnDemand={false}
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-[#7CC7D8] rounded-full flex items-start justify-center p-2">
                  <div className="w-1 h-2 bg-[#7CC7D8] rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos Section */}
        <section
          id="quem-somos"
          className="py-20 md:py-32 px-4"
          ref={aboutSection.ref}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              aboutSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent mb-6"
                  data-testid="text-about-title"
                >
                  {t("about.title")}
                </h2>

                <Card className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] transition-shadow duration-300 p-8">
                  <div
                    className="space-y-4 text-card-foreground leading-relaxed"
                    data-testid="text-about-content"
                  >
                    <p>{t("about.p1")}</p>
                    <p>{t("about.p2")}</p>
                    <p>{t("about.p3")}</p>
                  </div>
                </Card>
              </div>

              {/* THyPE Symbol with Parallax */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="relative w-64 h-64 md:w-80 md:h-80"
                  style={{
                    animation: "float 5s ease-in-out infinite",
                    transform: `translateY(${getParallax(0.1, 40)}px)`,
                  }}
                >
                  <img
                    src="/assets/icone_1764024194290.png"
                    alt="THyPE Technology Symbol"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(92,0,171,0.7)]"
                    style={{
                      filter:
                        "drop-shadow(0 0 60px rgba(124,199,216,0.6)) drop-shadow(0 0 100px rgba(92,0,171,0.4))",
                    }}
                    data-testid="img-about-3d"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Produtos Section */}
        <section
          id="produtos"
          className="py-20 md:py-32 px-4"
          ref={productsSection.ref}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              productsSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="text-products-title"
            >
              {t("products.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Smartphone,
                  title: t("products.mobile.title"),
                  description: t("products.mobile.description"),
                },
                {
                  icon: Brain,
                  title: t("products.ai.title"),
                  description: t("products.ai.description"),
                },
                {
                  icon: Cog,
                  title: t("products.automation.title"),
                  description: t("products.automation.description"),
                },
                {
                  icon: BarChart3,
                  title: t("products.dashboard.title"),
                  description: t("products.dashboard.description"),
                },
                {
                  icon: Server,
                  title: t("products.backend.title"),
                  description: t("products.backend.description"),
                },
                {
                  icon: Users,
                  title: t("products.consulting.title"),
                  description: t("products.consulting.description"),
                },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="group backdrop-blur-lg bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] p-6 hover-elevate"
                  data-testid={`card-product-${index}`}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#5C00AB] to-[#2D67CE] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(92,0,171,0.6)] transition-shadow">
                      <product.icon
                        className="w-7 h-7 text-primary-foreground"
                        data-testid={`icon-product-${index}`}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold text-foreground"
                      data-testid={`title-product-${index}`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`description-product-${index}`}
                    >
                      {product.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] transition-shadow duration-300 p-8">
              <p
                className="text-center text-lg text-card-foreground leading-relaxed"
                data-testid="text-products-footer"
              >
                {t("products.footer")}
              </p>
            </Card>
          </div>
        </section>

        {/* Nossos Diferenciais Section */}
        <section
          id="diferenciais"
          className="py-20 md:py-32 px-4"
          ref={differentialsSection.ref}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              differentialsSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 3D Tech Icon (AI Brain Circuit) with Parallax */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div
                  className="relative w-64 h-64 md:w-80 md:h-80"
                  style={{
                    animation: "float 4s ease-in-out infinite",
                    transform: `translateY(${getParallax(
                      -0.08,
                      30
                    )}px) translateX(${getParallax(0.05, 20)}px)`,
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/assets/icone_1764023164486.png"
                      alt="THyPE Technology - Desenvolvimento e Código"
                      className="w-48 h-48 md:w-64 md:h-64 object-contain"
                      style={{
                        filter:
                          "drop-shadow(0 0 40px rgba(124,199,216,0.8)) drop-shadow(0 0 80px rgba(45,103,206,0.6))",
                        animation: "rotate3d 20s linear infinite",
                      }}
                      data-testid="img-differentials-tech"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <h2
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
                  data-testid="text-differentials-title"
                >
                  {t("differentials.title")}
                </h2>

                <Card className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] transition-shadow duration-300 p-8">
                  <div className="space-y-6">
                    {(t("differentials.list") as string[]).map(
                      (differential: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 group"
                          data-testid={`item-differential-${index}`}
                        >
                          <CheckCircle2
                            className="w-6 h-6 text-[#7CC7D8] flex-shrink-0 mt-1 group-hover:text-[#2D67CE] transition-colors"
                            data-testid={`icon-differential-${index}`}
                          />
                          <p
                            className="text-card-foreground leading-relaxed"
                            data-testid={`text-differential-${index}`}
                          >
                            {differential}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio - Cíclica Section */}
        <section
          id="portfolio"
          className="py-20 md:py-32 px-4"
          ref={portfolioSection.ref}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              portfolioSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="text-portfolio-title"
            >
              {t("portfolio.title")}
            </h2>

            {/* Cíclica App */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-[#5C00AB]/20 to-[#2D67CE]/20 border border-primary/30 shadow-[0_0_50px_rgba(92,0,171,0.4)] hover:shadow-[0_0_60px_rgba(92,0,171,0.6)] transition-all duration-300 overflow-hidden mb-12">
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="space-y-6 flex flex-col justify-center">
                  <Badge className="w-fit bg-[#7CC7D8] text-background hover:bg-[#7CC7D8]/90">
                    {t("portfolio.ciclica.badge")}
                  </Badge>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    data-testid="text-ciclica-title"
                  >
                    {t("portfolio.ciclica.title")}
                  </h3>
                  <p
                    className="text-lg text-muted-foreground leading-relaxed"
                    data-testid="text-ciclica-description"
                  >
                    {t("portfolio.ciclica.description")}
                  </p>
                  <Link href="/projeto/ciclica">
                    <Button
                      className="w-fit bg-gradient-to-r from-[#5C00AB] to-[#2D67CE] hover:shadow-[0_0_30px_rgba(92,0,171,0.6)]"
                      data-testid="button-ciclica-details"
                    >
                      {t("portfolio.ciclica.cta")}
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="relative"
                    style={{
                      animation: "float 6s ease-in-out infinite",
                    }}
                  >
                    <img
                      src="/assets/Purple Pink Gradient Mobile Application Presentation (1024 x 500 px) (1)_1764008378758.png"
                      alt="Cíclica App Mockup"
                      className="w-full max-w-2xl rounded-lg shadow-[0_0_60px_rgba(92,0,171,0.6)]"
                      style={{
                        animation: "tilt 8s ease-in-out infinite",
                      }}
                      data-testid="img-ciclica-mockup"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Radar App */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-[#2D67CE]/20 to-[#7CC7D8]/20 border border-accent/30 shadow-[0_0_50px_rgba(45,103,206,0.4)] hover:shadow-[0_0_60px_rgba(45,103,206,0.6)] transition-all duration-300 overflow-hidden mb-12">
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="space-y-6 flex flex-col justify-center">
                  <Badge className="w-fit bg-[#2D67CE] text-primary-foreground hover:bg-[#2D67CE]/90">
                    {t("portfolio.radar.badge")}
                  </Badge>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    data-testid="text-radar-title"
                  >
                    {t("portfolio.radar.title")}
                  </h3>
                  <p
                    className="text-lg text-muted-foreground leading-relaxed"
                    data-testid="text-radar-description"
                  >
                    {t("portfolio.radar.description")}
                  </p>
                  <Link href="/projeto/radar">
                    <Button
                      className="w-fit bg-gradient-to-r from-[#2D67CE] to-[#7CC7D8] hover:shadow-[0_0_30px_rgba(45,103,206,0.6)]"
                      data-testid="button-radar-details"
                    >
                      {t("portfolio.radar.cta")}
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="relative"
                    style={{
                      animation: "float 6s ease-in-out infinite",
                    }}
                  >
                    <img
                      src="/assets/Purple Pink Gradient Mobile Application Presentation_1764025428825.png"
                      alt="Radar App Mockup"
                      className="w-full max-w-2xl rounded-lg shadow-[0_0_60px_rgba(45,103,206,0.6)]"
                      style={{
                        animation: "tilt 8s ease-in-out infinite",
                      }}
                      data-testid="img-radar-mockup"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Otimizador System */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-[#1C8DDB]/20 to-[#5C00AB]/20 border border-primary/30 shadow-[0_0_50px_rgba(28,141,219,0.4)] hover:shadow-[0_0_60px_rgba(28,141,219,0.6)] transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="space-y-6 flex flex-col justify-center">
                  <Badge className="w-fit bg-[#1C8DDB] text-primary-foreground hover:bg-[#1C8DDB]/90">
                    {t("portfolio.otimizador.badge")}
                  </Badge>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    data-testid="text-otimizador-title"
                  >
                    {t("portfolio.otimizador.title")}
                  </h3>
                  <p
                    className="text-lg text-muted-foreground leading-relaxed"
                    data-testid="text-otimizador-description"
                  >
                    {t("portfolio.otimizador.description")}
                  </p>
                  <Link href="/projeto/otimizador">
                    <Button
                      className="w-fit bg-gradient-to-r from-[#1C8DDB] to-[#5C00AB] hover:shadow-[0_0_30px_rgba(28,141,219,0.6)]"
                      data-testid="button-otimizador-details"
                    >
                      {t("portfolio.otimizador.cta")}
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="relative w-full max-w-2xl"
                    style={{
                      animation: "float 6s ease-in-out infinite",
                    }}
                  >
                    <video
                      src="/assets/otmizador _1764027286047.mp4"
                      className="w-full rounded-lg shadow-[0_0_60px_rgba(28,141,219,0.6)]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      data-testid="video-otimizador-portfolio"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section
          id="depoimentos"
          className="py-20 md:py-32 px-4"
          ref={testimonialsSection.ref}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              testimonialsSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="text-testimonials-title"
            >
              {t("testimonials.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(t("testimonials.items") as any[]).map(
                (testimonial: any, index: number) => (
                  <Card
                    key={index}
                    className="backdrop-blur-lg bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] p-8 hover-elevate group"
                    data-testid={`card-testimonial-${index}`}
                  >
                    <div className="space-y-6">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#5C00AB] to-[#2D67CE] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(92,0,171,0.6)] transition-shadow">
                        <Quote
                          className="w-6 h-6 text-primary-foreground"
                          data-testid={`icon-quote-testimonial-${index}`}
                        />
                      </div>

                      {/* Testimonial Text */}
                      <p
                        className="text-card-foreground leading-relaxed italic"
                        data-testid={`text-testimonial-${index}`}
                      >
                        "{testimonial.text}"
                      </p>

                      {/* Rating Stars */}
                      <div
                        className="flex gap-1"
                        role="img"
                        aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                        data-testid={`rating-testimonial-${index}`}
                      >
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="w-5 h-5 fill-[#7CC7D8] text-[#7CC7D8]"
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-primary/20">
                        <div className="flex items-center gap-4">
                          {/* Avatar with initials */}
                          <div
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5C00AB] to-[#7CC7D8] flex items-center justify-center text-primary-foreground font-semibold"
                            data-testid={`avatar-testimonial-${index}`}
                            aria-label={`Avatar for ${testimonial.name}`}
                          >
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p
                              className="font-semibold text-foreground"
                              data-testid={`name-testimonial-${index}`}
                            >
                              {testimonial.name}
                            </p>
                            <p
                              className="text-sm text-muted-foreground"
                              data-testid={`role-testimonial-${index}`}
                            >
                              {testimonial.role}
                            </p>
                            <p
                              className="text-xs text-muted-foreground/80"
                              data-testid={`company-testimonial-${index}`}
                            >
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section
          id="processo"
          className="py-20 md:py-32 px-4"
          ref={processSection.ref}
        >
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              processSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="text-team-title"
            >
              {t("team.title")}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t("team.subtitle")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lightbulb,
                  key: "pm",
                },
                {
                  icon: Search,
                  key: "po",
                },
                {
                  icon: Code,
                  key: "dev",
                },
                {
                  icon: Palette,
                  key: "designer",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-lg bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] p-8 hover-elevate group"
                  data-testid={`card-team-${index}`}
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#5C00AB] to-[#2D67CE] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(92,0,171,0.6)] transition-shadow">
                      <member.icon
                        className="w-8 h-8 text-primary-foreground"
                        data-testid={`icon-team-${index}`}
                      />
                    </div>
                    <h3
                      className="text-2xl font-semibold text-foreground"
                      data-testid={`title-team-${index}`}
                    >
                      {t(`team.${member.key}.title`)}
                    </h3>
                    <p
                      className="text-sm font-medium text-[#7CC7D8]"
                      data-testid={`subtitle-team-${index}`}
                    >
                      {t(`team.${member.key}.subtitle`)}
                    </p>
                    <p
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`description-team-${index}`}
                    >
                      {t(`team.${member.key}.description`)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section
          id="contato"
          className="py-20 md:py-32 px-4"
          ref={contactSection.ref}
        >
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              contactSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <Card className="backdrop-blur-lg bg-gradient-to-br from-[#5C00AB]/30 via-[#2D67CE]/30 to-[#7CC7D8]/30 border border-primary/30 shadow-[0_0_60px_rgba(92,0,171,0.5)] hover:shadow-[0_0_70px_rgba(92,0,171,0.7)] transition-all duration-300 p-12 md:p-16 text-center">
              <div className="space-y-8">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#7CC7D8] to-[#5C00AB] bg-clip-text text-transparent"
                  data-testid="text-contact-title"
                >
                  {t("contactSection.title")}
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t("contactSection.subtitle")}
                </p>

                <div className="flex flex-wrap gap-6 justify-center pt-8">
                  {/* WhatsApp */}
                  <div
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                    onClick={openWhatsApp}
                    data-testid="button-contact-whatsapp"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-all duration-300 group-hover:scale-110">
                      <SiWhatsapp className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-[#25D366] transition-colors">
                      {t("contactSection.whatsapp")}
                    </span>
                  </div>

                  {/* Telefone */}
                  <div
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                    onClick={() =>
                      (window.location.href = "tel:+5547988140013")
                    }
                    data-testid="button-contact-call"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5C00AB] to-[#2D67CE] flex items-center justify-center hover:shadow-[0_0_40px_rgba(92,0,171,0.8)] transition-all duration-300 group-hover:scale-110">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-[#5C00AB] transition-colors">
                      {t("contactSection.call")}
                    </span>
                  </div>

                  {/* Email */}
                  <div
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                    onClick={() => openContactDialog("contact")}
                    data-testid="button-contact-form"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7CC7D8] to-[#1C8DDB] flex items-center justify-center hover:shadow-[0_0_40px_rgba(124,199,216,0.8)] transition-all duration-300 group-hover:scale-110">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-[#7CC7D8] transition-colors">
                      {t("contactSection.email")}
                    </span>
                  </div>

                  {/* Instagram */}
                  <div
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                    onClick={openInstagram}
                    data-testid="button-contact-instagram"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] flex items-center justify-center hover:shadow-[0_0_40px_rgba(225,48,108,0.8)] transition-all duration-300 group-hover:scale-110">
                      <SiInstagram className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-[#E1306C] transition-colors">
                      {t("contactSection.instagram")}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/Símbolo Thype Cor@2x_1764008378756.png"
                  alt="THyPE Symbol"
                  className="h-8"
                />
                <span className="text-muted-foreground">
                  {t("footer.rights")}
                </span>
              </div>
              <div className="text-muted-foreground text-sm">
                {t("footer.tagline")}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Contact Dialog */}
      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
        type={dialogType}
      />

      {/* Global Animations Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes rotate3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }

        @keyframes tilt {
          0%, 100% { transform: perspective(1000px) rotateY(-5deg); }
          50% { transform: perspective(1000px) rotateY(5deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
