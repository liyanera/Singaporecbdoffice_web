import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const emailBody = `
New Lead from Singapore CBD Office Website

Source: ${data.source || "website"}
Name: ${data.name || "N/A"}
Company: ${data.company || "N/A"}
Email: ${data.email || "N/A"}
Phone/WhatsApp: ${data.phone || "N/A"}
Team Size: ${data.size || "N/A"}
Budget: ${data.budget || "N/A"}
Notes: ${data.notes || "N/A"}

---
Submitted at: ${new Date().toISOString()}
  `.trim();

  // Use Resend if API key is configured, otherwise log
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@singaporecbdoffice.com",
        to: "liyan@era.com.sg",
        subject: `New Lead: ${data.name || "Unknown"} - ${data.company || "Unknown"}`,
        text: emailBody,
      }),
    });
  } else {
    console.log("[LEAD]", emailBody);
  }

  return NextResponse.json({ ok: true });
}
