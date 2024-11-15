export const prerender = false;

import { COMPANY_NAME } from "@/constants";
import { sendEmail } from "@/services/email";

export const POST = async ({ request }) => {
  const body = await request.json();

  const { email, name } = body;

  await sendEmail(
    email,
    `¡Hemos recibido tu solicitud para probar nuestra aplicación!`,
    `${
      name ? `Hola ${name}, ` : ""
    }Agradecemos tu interés en ${COMPANY_NAME}. Actualmente, nos encontramos en una beta cerrada, te enviaremos un correo cuando estemos listos para que pruebes nuestra aplicación.
    
Saludos cordiales,
El equipo de ${COMPANY_NAME}`
  );

  return new Response("Email sent", { status: 200 });
};
