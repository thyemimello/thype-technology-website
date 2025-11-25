import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Salvar no storage
      const submission = await storage.createContactSubmission(validatedData);
      
      // Tentar enviar email
      try {
        await sendContactEmail(validatedData);
        console.log('Email de contato enviado com sucesso');
      } catch (emailError) {
        console.error('Erro ao enviar email de notificação:', emailError);
        // Retorna erro se o email falhar (importante para o negócio saber)
        return res.status(500).json({ 
          success: false, 
          error: "Formulário salvo, mas falha ao enviar email de notificação. Verifique as configurações de email." 
        });
      }
      
      res.json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Dados inválidos", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Erro ao processar solicitação" 
        });
      }
    }
  });

  // Get all contact submissions (for admin use)
  app.get("/api/contact/submissions", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Erro ao buscar submissões" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
