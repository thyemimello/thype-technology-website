import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Cog,
  BarChart3,
  Brain,
  Activity,
  Monitor,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";

export default function ProjectOtimizador() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#040A14]">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 hover-elevate group"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Portfólio
          </Button>
        </Link>

        <div className="space-y-16">
          <section className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Badge
                className="bg-gradient-to-r from-[#5C00AB] to-[#2D67CE] text-white border-0 px-4 py-2 text-sm"
                data-testid="badge-category"
              >
                Sistema Inteligente
              </Badge>
              <Badge
                className="bg-gradient-to-r from-[#2D67CE] to-[#1C8DDB] text-white border-0 px-4 py-2 text-sm"
                data-testid="badge-year"
              >
                Automação Industrial
              </Badge>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#5C00AB] via-[#2D67CE] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="title-project"
            >
              Otimizador
            </h1>

            <p
              className="text-xl md:text-2xl text-[#7CC7D8] max-w-3xl mx-auto"
              data-testid="subtitle-project"
            >
              O sistema inteligente que reduz custos e maximiza a eficiência
              operacional
            </p>

            <div className="mt-8 max-w-5xl mx-auto">
              <Card className="backdrop-blur-lg bg-card/30 border border-primary/20 p-2 overflow-hidden">
                <video
                  className="w-full rounded-md"
                  controls
                  data-testid="video-presentation"
                >
                  <source
                    src="/assets/otmizador _1764027286047.mp4"
                    type="video/mp4"
                  />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </Card>
            </div>
          </section>

          <section>
            <Card
              className="backdrop-blur-lg bg-card/30 border border-primary/20 p-8 hover:shadow-[0_0_40px_rgba(92,0,171,0.3)] transition-all"
              data-testid="card-overview"
            >
              <h2
                className="text-3xl font-bold text-foreground mb-4"
                data-testid="title-overview"
              >
                Visão Geral
              </h2>
              <p
                className="text-muted-foreground leading-relaxed text-lg"
                data-testid="text-overview"
              >
                Aplicação desenvolvida pela THyPE Technology para automatizar
                processos industriais, analisar dados de produção em tempo real
                e sugerir decisões precisas por meio de IA. O Otimizador
                transforma rotinas complexas em operações rápidas, seguras e
                altamente eficientes — eliminando desperdícios e acelerando
                resultados.
              </p>
              <p
                className="text-muted-foreground leading-relaxed text-lg mt-4"
                data-testid="text-overview-2"
              >
                Combinando análise avançada, automação e monitoramento contínuo,
                a solução foi criada para empresas que desejam evoluir sua
                operação com tecnologia de ponta e redução significativa de
                custos.
              </p>
            </Card>
          </section>

          <section>
            <h2
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="title-features"
            >
              Principais Funcionalidades
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Cog,
                  title: "Automação de Processos",
                  description:
                    "Redução de tarefas manuais com fluxos automatizados que garantem precisão, padronização e alta velocidade na rotina operacional.",
                },
                {
                  icon: BarChart3,
                  title: "Análise em Tempo Real",
                  description:
                    "Integração com dados de máquinas, indicadores e relatórios para apoiar decisões com insights atualizados e confiáveis.",
                },
                {
                  icon: Brain,
                  title: "Sugestões Inteligentes via IA",
                  description:
                    "Motor de IA treinado para identificar gargalos, prever inconsistências e sugerir ações que aumentam a eficiência e reduzem erros.",
                },
                {
                  icon: Activity,
                  title: "Monitoramento Contínuo",
                  description:
                    "Acompanhamento de métricas chave de desempenho, alertas dinâmicos e visão completa do fluxo operacional.",
                },
                {
                  icon: Monitor,
                  title: "Interface Limpa e Intuitiva",
                  description:
                    "Design pensado para facilitar o trabalho da operação, reduzindo curva de aprendizado e aumentando produtividade.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-lg bg-card/30 border border-primary/20 p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(92,0,171,0.4)] transition-all hover-elevate group"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#5C00AB] to-[#2D67CE] flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(92,0,171,0.6)] transition-shadow">
                    <feature.icon
                      className="w-7 h-7 text-primary-foreground"
                      data-testid={`icon-feature-${index}`}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    data-testid={`title-feature-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-testid={`description-feature-${index}`}
                  >
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent"
              data-testid="title-tech"
            >
              Tecnologias Utilizadas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Python",
                "FastAPI",
                "Pandas / NumPy",
                "XML / TXT Integration",
                "Machine Learning",
                "Dashboard Interativo",
                "Banco de Dados",
                "Automação + IA",
              ].map((tech, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-lg bg-card/30 border border-primary/20 p-6 text-center hover:border-primary/50 hover:shadow-[0_0_25px_rgba(92,0,171,0.4)] transition-all hover-elevate"
                  data-testid={`card-tech-${index}`}
                >
                  <p
                    className="font-semibold text-foreground"
                    data-testid={`text-tech-${index}`}
                  >
                    {tech}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card
              className="backdrop-blur-lg bg-gradient-to-br from-[#5C00AB]/10 to-[#2D67CE]/10 border border-primary/30 p-8"
              data-testid="card-result"
            >
              <h2
                className="text-3xl font-bold text-center mb-6 text-foreground"
                data-testid="title-result"
              >
                Resultado
              </h2>
              <p
                className="text-muted-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto"
                data-testid="text-result"
              >
                O Otimizador elevou o controle da operação para um novo patamar,
                permitindo decisões rápidas, dados confiáveis e automação
                inteligente. Combinando IA, análise profunda e interface
                eficiente, a solução entrega redução de custos, menos erros,
                aumento de produtividade e um fluxo operacional muito mais
                inteligente.
              </p>
              <p
                className="text-[#7CC7D8] font-semibold text-lg text-center mt-4"
                data-testid="text-result-highlight"
              >
                É a ferramenta ideal para empresas que buscam eficiência real,
                agilidade e evolução contínua.
              </p>
            </Card>
          </section>

          <section className="text-center">
            <h2
              className="text-3xl font-bold mb-6 text-foreground"
              data-testid="title-cta"
            >
              Interessado em um projeto como este?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-[#5C00AB] to-[#2D67CE] hover:shadow-[0_0_30px_rgba(92,0,171,0.6)] transition-all text-lg px-8 py-6"
                data-testid="button-contact"
              >
                Entre em Contato
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/#portfolio">
                <Button
                  variant="outline"
                  className="border-primary/50 text-foreground hover:border-primary backdrop-blur-lg bg-card/30 text-lg px-8 py-6"
                  data-testid="button-portfolio"
                >
                  Ver Mais Projetos
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
