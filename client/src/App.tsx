import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider, translations } from "@/i18n";
import Home from "@/pages/home";
import ProjectRadar from "@/pages/project-radar";
import ProjectCiclica from "@/pages/project-ciclica";
import ProjectOtimizador from "@/pages/project-otimizador";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projeto/radar" component={ProjectRadar} />
      <Route path="/projeto/ciclica" component={ProjectCiclica} />
      <Route path="/projeto/otimizador" component={ProjectOtimizador} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider translations={translations} defaultLanguage="pt">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
