import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Smartphone, 
  CreditCard, 
  Package, 
  MessageSquare, 
  Bell, 
  BarChart3,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export default function ProjectRadar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: CreditCard,
      title: "Sistema de Assinaturas com Stripe",
      description: "Pagamentos recorrentes via cartão, com autenticação 3D Secure, histórico de compras e gerenciamento total de planos."
    },
    {
      icon: Package,
      title: "Gerenciamento de Pacotes de Robôs",
      description: "O usuário pode visualizar, acessar ou adquirir novos pacotes com facilidade. Cada plano exibe quantidade de contratos, nível do robô e conteúdo exclusivo."
    },
    {
      icon: MessageSquare,
      title: "Suporte Integrado no App",
      description: "Área dedicada para abertura e acompanhamento de solicitações (como troca de operador, dúvidas técnicas ou suporte do sistema). Todo o fluxo é automatizado, notificando o usuário sobre cada atualização."
    },
    {
      icon: Bell,
      title: "Notificações Push",
      description: "Avisos de novas vendas, status de operações, mensagens importantes e alertas em tempo real."
    },
    {
      icon: BarChart3,
      title: "Dashboard do Trader",
      description: "Tela inicial inteligente mostrando status dos pacotes ativos, atalhos para conteúdo, contratos e informações essenciais do dia."
    }
  ];

  const technologies = [
    { name: "React Native", icon: Smartphone },
    { name: "TypeScript", icon: Shield },
    { name: "Expo", icon: Zap },
    { name: "FastAPI", icon: Globe },
    { name: "PostgreSQL", icon: BarChart3 },
    { name: "Stripe Checkout", icon: CreditCard },
    { name: "Expo Notifications", icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-[#040A14] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#040A14]/80 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#portfolio">
            <Button variant="ghost" className="gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(92,0,171,0.1) 1px, transparent 1px),
              linear-gradient(rgba(92,0,171,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] text-white border-0" data-testid="badge-category">
              Aplicativo Mobile
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent" data-testid="text-project-title">
              Radar
            </h1>
            <p className="text-xl md:text-2xl text-[#7CC7D8] mb-4" data-testid="text-project-subtitle">
              O app para traders que desejam alta performance e automação
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-project-intro">
              Aplicativo mobile desenvolvido pela Thype Technology para gestão de pacotes de robôs de trading, acompanhando operações no Índice e Dólar com uma experiência moderna, segura e totalmente integrada a pagamentos e suporte.
            </p>
          </div>

          {/* Template Image */}
          <div className="flex justify-center mb-16">
            <Card className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_50px_rgba(45,103,206,0.4)] p-8 max-w-5xl">
              <div 
                className="relative"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <img 
                  src="/assets/Purple Pink Gradient Mobile Application Presentation_1764025428825.png"
                  alt="Radar App Interface"
                  className="w-full h-auto rounded-lg"
                  data-testid="img-project-template"
                />
              </div>
            </Card>
          </div>

          {/* Overview */}
          <Card className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent" data-testid="text-overview-title">
              Visão Geral
            </h2>
            <p className="text-card-foreground leading-relaxed text-lg" data-testid="text-overview-content">
              O Radar oferece uma interface pensada para traders iniciantes e avançados, reunindo em um único lugar tudo o que o usuário precisa para comprar, gerenciar e acompanhar seus robôs operacionais.
            </p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent" data-testid="text-features-title">
            Principais Funcionalidades
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] transition-all duration-300 p-6 group"
                data-testid={`card-feature-${index}`}
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-gradient-to-br from-[#5C00AB]/20 to-[#7CC7D8]/20 group-hover:from-[#5C00AB]/30 group-hover:to-[#7CC7D8]/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[#7CC7D8]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent" data-testid="text-tech-title">
            Tecnologias Utilizadas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] transition-all duration-300 p-6 flex flex-col items-center justify-center text-center group"
                data-testid={`card-tech-${index}`}
              >
                <tech.icon className="w-10 h-10 mb-3 text-[#7CC7D8] group-hover:scale-110 transition-transform duration-300" />
                <p className="font-semibold text-card-foreground" data-testid={`text-tech-name-${index}`}>
                  {tech.name}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg" data-testid="text-tech-note">
              Arquitetura escalável com boas práticas de UI/UX
            </p>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-lg bg-gradient-to-br from-[#5C00AB]/20 to-[#7CC7D8]/20 border border-primary/20 shadow-[0_0_50px_rgba(92,0,171,0.4)] p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent" data-testid="text-result-title">
              Resultado
            </h2>
            <p className="text-card-foreground leading-relaxed text-lg mb-6" data-testid="text-result-content">
              O Radar foi projetado para entregar rapidez, robustez e um design futurista em tons neon, inspirado em painéis de trading profissionais.
            </p>
            <p className="text-card-foreground leading-relaxed text-lg" data-testid="text-result-summary">
              É uma solução capaz de acompanhar operações, gerenciar planos e fornecer suporte direto dentro do app — tudo com fluidez e precisão.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Interessado em uma solução semelhante?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg" data-testid="text-cta-description">
            Entre em contato e descubra como podemos transformar sua ideia em realidade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contato">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] hover:from-[#5C00AB]/90 hover:to-[#7CC7D8]/90 text-white shadow-[0_0_20px_rgba(92,0,171,0.5)]"
                data-testid="button-contact"
              >
                Fale com um Especialista
              </Button>
            </Link>
            <Link href="/#portfolio">
              <Button 
                variant="outline"
                size="lg"
                className="border-[#7CC7D8] text-[#7CC7D8] hover:bg-[#7CC7D8]/10"
                data-testid="button-portfolio"
              >
                Ver Mais Projetos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
