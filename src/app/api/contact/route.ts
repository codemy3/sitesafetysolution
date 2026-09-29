import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, company, email, phone, service, message } = body as {
      name?: string;
      company?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
    };

    // Honeypot check — if this hidden field has a value, it's a bot
    if (body._gotcha) {
      // Silently return 200 so bots think it succeeded
      return NextResponse.json({ success: true });
    }

    // --- Server-side validation ---
    const errors: string[] = [];

    if (!name || name.trim().length === 0) {
      errors.push("Name is required.");
    }
    if (!email || email.trim().length === 0) {
      errors.push("Email is required.");
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.push("Please provide a valid email address.");
    }
    if (!message || message.trim().length === 0) {
      errors.push("Message is required.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors.join(" ") },
        { status: 400 }
      );
    }

    // --- Build the HTML email ---
    const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#0B111E;padding:28px 32px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#22C55E;letter-spacing:-0.02em;">
                Site Safety Solutions
              </h1>
              <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.15em;">
                New Website Enquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                
                <!-- Name -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:4px;">Name</span>
                    <span style="font-size:15px;font-weight:600;color:#0f172a;">${escapeHtml(name!.trim())}</span>
                  </td>
                </tr>

                <!-- Company -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:4px;">Company</span>
                    <span style="font-size:15px;font-weight:600;color:#0f172a;">${company?.trim() ? escapeHtml(company.trim()) : "—"}</span>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:4px;">Email</span>
                    <a href="mailto:${escapeHtml(email!.trim())}" style="font-size:15px;font-weight:600;color:#22C55E;text-decoration:none;">${escapeHtml(email!.trim())}</a>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:4px;">Phone</span>
                    <span style="font-size:15px;font-weight:600;color:#0f172a;">${phone?.trim() ? escapeHtml(phone.trim()) : "—"}</span>
                  </td>
                </tr>

                <!-- Service -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:4px;">Service Enquired About</span>
                    <span style="display:inline-block;font-size:13px;font-weight:700;color:#0f172a;background-color:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:6px 14px;">${service?.trim() ? escapeHtml(service.trim()) : "Not specified"}</span>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:16px 0 0;">
                    <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-bottom:8px;">Message</span>
                    <div style="font-size:14px;line-height:1.7;color:#334155;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;white-space:pre-wrap;">${escapeHtml(message!.trim())}</div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:20px 32px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">
                This enquiry was submitted via the Site Safety Solutions website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // --- Send via Resend ---
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Site Safety Solutions <noreply@sitesafety-solutions.co.uk>",
      to: "symon@sitesafety-solutions.co.uk",
      replyTo: email!.trim(),
      subject: `New Website Enquiry from ${name!.trim()}`,
      html: htmlEmail,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send your enquiry. Please try again or contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

/** Escape HTML special characters to prevent XSS in the email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
