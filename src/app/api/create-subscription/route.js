import { MercadoPagoConfig, PreApproval } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(request) {
  const { projectTitle, price, email } = await request.json();
  const preApproval = new PreApproval(client);

  try {
    const subscription = await preApproval.create({
      body: {
        reason: `Suscripción: ${projectTitle}`,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: Number(price),
          currency_id: "ARS",
        },
        back_url: process.env.APP_URL + "/register",
        payer_email: email, // En producción usamos el email real del cliente
        external_reference: email, // Respaldo de seguridad
        status: "pending",
      },
    });

    return Response.json({ init_point: subscription.init_point });
  } catch (error) {
    console.error("Error al crear suscripción:", error);
    return Response.json(
      { error: "Error al procesar el pago" },
      { status: 500 }
    );
  }
}
