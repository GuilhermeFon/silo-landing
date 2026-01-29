import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validação dos campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 },
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 });
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Studio Silo <onboarding@resend.dev>', 
      to: ['contato@studiosilo.com.br'],
      replyTo: email,
      subject: `Contato via Site - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Novo Contato via Site
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong>Nome:</strong> ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong>E-mail:</strong> <a href="mailto:${email}">${email}</a>
            </p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Mensagem:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Este e-mail foi enviado através do formulário de contato do site Studio Silo.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Tente novamente.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 },
    );
  }
}
