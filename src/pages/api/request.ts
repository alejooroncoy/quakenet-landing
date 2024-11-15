import { createRequest } from "@/services/db/request";

export const prerender = false;

export const POST = async ({ request }) => {
  const bodyText = await request.clone().text();

  if(!bodyText) {
    return new Response(
      JSON.stringify({
        message: "Request body is empty",
        success: false,
      }),
      { status: 400 }
    );
  }

  const body = await request.json();

  try {
    await createRequest({
      message: body.message,
      user: {
        create: {
          email: body.email,
          name: body.name,
        },
      },
    });

    return new Response(
      JSON.stringify({
        message: "Request created successfully",
        success: true,
      }),
      { status: 201 }
    );
  } catch (err) {
    console.log(err);

    return new Response(
      JSON.stringify({
        message: "Failed to create request",
        success: false,
      }),
      { status: 500 }
    );
  }
};
