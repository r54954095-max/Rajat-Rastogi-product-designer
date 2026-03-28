import { Resend } from "resend";
import { ContactEmail } from "@/lib/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["rajatrastogi201@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      react: ContactEmail({ name, email, message, subject }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}