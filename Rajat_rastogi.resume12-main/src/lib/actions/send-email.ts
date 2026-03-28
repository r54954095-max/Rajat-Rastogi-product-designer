export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const { name, email, phone, message } = formData;

  if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
    return { success: false, error: "All fields are required" };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "1a08efdf-87d5-4dc6-bd74-973816e0dad9",
        name,
        email,
        phone,
        subject: "Portfolio Contact Form",
        message,
        from_name: "Portfolio Contact Form",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, data: result };
    } else {
      console.error("Web3Forms error:", result);
      return { success: false, error: result.message || "Failed to send email" };
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email" };
  }
}