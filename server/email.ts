import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<void> {
  // Validar variáveis de ambiente
  if (!process.env.EMAIL_PASSWORD) {
    throw new Error('EMAIL_PASSWORD não configurado. Configure a senha de aplicativo do Gmail nas variáveis de ambiente.');
  }

  // Configuração do transporter usando Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'thypeappthech@gmail.com',
      pass: process.env.EMAIL_PASSWORD, // Senha de aplicativo do Gmail
    },
  });

  // Conteúdo do email
  const mailOptions = {
    from: process.env.EMAIL_USER || 'thypeappthech@gmail.com',
    to: 'thypeappthech@gmail.com',
    subject: `Novo Contato - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5C00AB;">Novo Contato Recebido</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ''}
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">Este email foi enviado através do formulário de contato do site THyPE Technology.</p>
      </div>
    `,
  };

  // Enviar email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso para thypeappthech@gmail.com');
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Falha ao enviar email');
  }
}
