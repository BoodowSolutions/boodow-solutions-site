import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { serviceName, formData, timestamp } = body

    // Format the form data for the email
    const formattedData = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    // Send email to info@boodowsolutions.com
    await resend.emails.send({
      from: 'noreply@boodowsolutions.com',
      to: 'info@boodowsolutions.com',
      subject: `Nova Solicitação: ${serviceName}`,
      html: `
        <h2>Nova Solicitação de Serviço</h2>
        <p><strong>Serviço:</strong> ${serviceName}</p>
        <p><strong>Data/Hora:</strong> ${new Date(timestamp).toLocaleString('pt-BR')}</p>
        <hr />
        <h3>Informações Fornecidas:</h3>
        <pre>${formattedData}</pre>
        <hr />
        <p style="font-size: 12px; color: #666;">
          Esta é uma mensagem automática do sistema Boodow Solutions
        </p>
      `,
    })

    return Response.json(
      { success: true, message: 'Formulário enviado com sucesso' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return Response.json(
      { success: false, message: 'Erro ao processar formulário' },
      { status: 500 }
    )
  }
}
