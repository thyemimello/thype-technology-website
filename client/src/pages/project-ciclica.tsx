import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Smartphone, 
  Brain, 
  Dumbbell, 
  Heart, 
  Calendar, 
  Trophy,
  Activity,
  Sparkles,
  Moon,
  Sun
} from "lucide-react";

export default function ProjectCiclica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Activity,
      title: "Acompanhamento inteligente do ciclo",
      description: "O app calcula automaticamente a fase atual com base nos registros da usuária, utilizando histórico real para prever menstruação, energia e mudanças hormonais de forma personalizada."
    },
    {
      icon: Brain,
      title: "IA LunIA – sua coach de bem-estar",
      description: "A IA analisa o ciclo, sintomas, treinos feitos e humor para responder dúvidas, orientar treinos e oferecer motivação empática em cada fase."
    },
    {
      icon: Dumbbell,
      title: "Treino do dia baseado na fase do ciclo",
      description: "Recomendações personalizadas de treino (A, B, C, D ou E) com progressão automática, vídeos integrados, barra de progresso e pontuação."
    },
    {
      icon: Heart,
      title: "Registro de sintomas e sentimentos",
      description: "A usuária registra humor, desconfortos, notas e peso — tudo organizado por categorias, construindo um histórico completo por mês."
    },
    {
      icon: Calendar,
      title: "Calendário Menstrual completo",
      description: "Visualização colorida por fase (menstruada, folicular, ovulatória, lútea), treinos realizados, sintomas registrados e relatório diário."
    },
    {
      icon: Trophy,
      title: "Gamificação Lunar",
      description: "Sistema de Moedinha Lunar (XP por treinos e registros), Classe Lunar (Lua Nova, Crescente, Cheia e Minguante) e Medalha Lunar ao concluir treinos — tudo desenhado para motivar e acompanhar o progresso mês a mês."
    },
    {
      icon: Sparkles,
      title: "Dashboard acolhedor e personalizado",
      description: "Saudação com nome, fase atual, treino do dia, pontuação, energia feminina e atalhos rápidos para registrar sintomas e acessar o histórico."
    }
  ];

  const technologies = [
    { name: "React Native", icon: Smartphone },
    { name: "TypeScript", icon: Activity },
    { name: "Expo", icon: Sparkles },
    { name: "FastAPI", icon: Activity },
    { name: "PostgreSQL", icon: Activity },
    { name: "LangChain + GPT-4", icon: Brain },
    { name: "Expo Notifications", icon: Activity }
  ];

  const gamification = [
    {
      icon: Moon,
      title: "Moedinha Lunar",
      description: "XP por treinos e registros de sintomas"
    },
    {
      icon: Sun,
      title: "Classe Lunar",
      description: "Lua Nova, Crescente, Cheia e Minguante conforme evolução"
    },
    {
      icon: Trophy,
      title: "Medalha Lunar",
      description: "Conquista ao concluir treinos"
    }
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
              Cíclica
            </h1>
            <p className="text-xl md:text-2xl text-[#7CC7D8] mb-4" data-testid="text-project-subtitle">
              O app que acompanha seu ciclo, sua energia e sua evolução
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-project-intro">
              Aplicativo mobile desenvolvido pela Thype Technology para acompanhar o ciclo menstrual, energia vital, sintomas, treinos e bem-estar feminino — tudo guiado pela IA LunIA, que entrega recomendações inteligentes e personalizadas para cada fase do ciclo.
            </p>
          </div>

          {/* Template Image */}
          <div className="flex justify-center mb-16">
            <Card className="backdrop-blur-lg bg-card/40 border border-primary/20 shadow-[0_0_50px_rgba(92,0,171,0.4)] p-8 max-w-5xl">
              <div 
                className="relative"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <img 
                  src="/assets/Purple Pink Gradient Mobile Application Presentation (1024 x 500 px) (1)_1764008378758.png"
                  alt="Cíclica App Interface"
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
              O Cíclica foi criado para oferecer autonomia, clareza e conexão com o corpo, reunindo em um só lugar monitoramento completo do ciclo, treinos alinhados à energia do dia, registro de sentimentos, histórico, calendário menstrual, gamificação e uma experiência acolhedora.
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

      {/* Gamification Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent" data-testid="text-gamification-title">
            Sistema de Gamificação Lunar
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Tudo desenhado para motivar e acompanhar o progresso mês a mês
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {gamification.map((item, index) => (
              <Card 
                key={index}
                className="backdrop-blur-lg bg-gradient-to-br from-[#5C00AB]/20 to-[#7CC7D8]/20 border border-primary/20 shadow-[0_0_30px_rgba(92,0,171,0.3)] hover:shadow-[0_0_40px_rgba(92,0,171,0.5)] transition-all duration-300 p-8 text-center group"
                data-testid={`card-gamification-${index}`}
              >
                <div className="mb-4 p-4 w-fit mx-auto rounded-full bg-gradient-to-br from-[#5C00AB]/30 to-[#7CC7D8]/30 group-hover:from-[#5C00AB]/40 group-hover:to-[#7CC7D8]/40 transition-all duration-300">
                  <item.icon className="w-12 h-12 text-[#7CC7D8]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground" data-testid={`text-gamification-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-gamification-description-${index}`}>
                  {item.description}
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
              Arquitetura orientada a múltiplos módulos e IA integrada
            </p>
            <p className="text-muted-foreground text-lg mt-2" data-testid="text-design-note">
              Design System feminino e acolhedor inspirado em wellness & ciclo menstrual
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
            <div className="space-y-4">
              <p className="text-card-foreground leading-relaxed text-lg" data-testid="text-result-content-1">
                O Cíclica foi projetado para entregar clareza, acolhimento e inteligência, guiando a usuária a compreender seu corpo e sua energia em cada fase.
              </p>
              <p className="text-card-foreground leading-relaxed text-lg" data-testid="text-result-content-2">
                Com uma estética moderna, feminina e suave, combinada a uma IA empática, o app cria uma experiência única onde tecnologia, autocuidado e ciência se encontram.
              </p>
              <p className="text-card-foreground leading-relaxed text-lg" data-testid="text-result-content-3">
                É uma solução completa para quem deseja entender o ciclo, treinar no momento certo, acompanhar sentimentos e evoluir com consciência — dia após dia, mês após mês.
              </p>
            </div>
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
