// server/index-prod.ts
import fs from "node:fs";
import path from "node:path";
import express2 from "express";

// server/app.ts
import express from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  contacts;
  constructor() {
    this.contacts = /* @__PURE__ */ new Map();
  }
  async createContactSubmission(insertContact) {
    const id = randomUUID();
    const contact = {
      ...insertContact,
      id,
      submittedAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
  async getAllContactSubmissions() {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow()
});
var insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true
}).extend({
  email: z.string().email("Email inv\xE1lido")
});

// server/email.ts
import nodemailer from "nodemailer";
async function sendContactEmail(data) {
  if (!process.env.EMAIL_PASSWORD) {
    throw new Error("EMAIL_PASSWORD n\xE3o configurado. Configure a senha de aplicativo do Gmail nas vari\xE1veis de ambiente.");
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "thypeappthech@gmail.com",
      pass: process.env.EMAIL_PASSWORD
      // Senha de aplicativo do Gmail
    }
  });
  const mailOptions = {
    from: process.env.EMAIL_USER || "thypeappthech@gmail.com",
    to: "thypeappthech@gmail.com",
    subject: `Novo Contato - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5C00AB;">Novo Contato Recebido</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ""}
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">Este email foi enviado atrav\xE9s do formul\xE1rio de contato do site THyPE Technology.</p>
      </div>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso para thypeappthech@gmail.com");
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw new Error("Falha ao enviar email");
  }
}

// server/routes.ts
import { ZodError } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      try {
        await sendContactEmail(validatedData);
        console.log("Email de contato enviado com sucesso");
      } catch (emailError) {
        console.error("Erro ao enviar email de notifica\xE7\xE3o:", emailError);
        return res.status(500).json({
          success: false,
          error: "Formul\xE1rio salvo, mas falha ao enviar email de notifica\xE7\xE3o. Verifique as configura\xE7\xF5es de email."
        });
      }
      res.json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: "Dados inv\xE1lidos",
          details: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          error: "Erro ao processar solicita\xE7\xE3o"
        });
      }
    }
  });
  app2.get("/api/contact/submissions", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Erro ao buscar submiss\xF5es"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/app.ts
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
var app = express();
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path2.startsWith("/api")) {
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
async function runApp(setup) {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  await setup(app, server);
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
}

// server/index-prod.ts
async function serveStatic(app2, _server) {
  const distPath = path.resolve(import.meta.dirname, "../dist/client");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
(async () => {
  await runApp(serveStatic);
})();
export {
  serveStatic
};
