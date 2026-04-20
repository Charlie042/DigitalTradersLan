import { Resend } from 'resend';

const ELECTRIC = '#1B4DFF';
const INK = '#0D0D0D';
const OFF = '#F8F7F4';

function firstName(displayName: string): string {
  const part = displayName.trim().split(/\s+/)[0];
  return part || 'there';
}

function buildPlainText(displayName: string): string {
  const name = firstName(displayName);
  return [
    `Hi ${name},`,
    '',
    'Welcome to DigitalTradersLab — your account is ready.',
    '',
    'Jump into the dashboard to explore topics, challenges, and rewards. Practice with structure and zero financial risk.',
    '',
    '— The DigitalTradersLab team',
    '',
    'If you did not create this account, you can ignore this email.',
  ].join('\n');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtml(displayName: string): string {
  const name = firstName(displayName);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to DigitalTradersLab</title>
</head>
<body style="margin:0;padding:0;background:${OFF};-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${OFF};padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:3px solid ${INK};border-radius:4px;overflow:hidden;">
          <tr>
            <td style="background:${ELECTRIC};padding:20px 28px;text-align:left;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:bold;letter-spacing:0.06em;color:#ffffff;text-transform:uppercase;">
                DigitalTraders<span style="color:#ffffff;">Lab</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 28px 24px;font-family:Arial,Helvetica,sans-serif;color:${INK};font-size:16px;line-height:1.65;">
              <p style="margin:0 0 16px;font-size:18px;font-weight:bold;">Hi ${escapeHtml(name)},</p>
              <p style="margin:0 0 16px;">Welcome to <strong>DigitalTradersLab</strong> — your account is ready.</p>
              <p style="margin:0 0 24px;color:rgba(13,13,13,0.75);">Jump into the dashboard to explore topics, challenges, and rewards. Practice with structure and zero financial risk.</p>
              <p style="margin:0;font-size:15px;">— The DigitalTradersLab team</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 28px;border-top:3px solid ${INK};font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:rgba(13,13,13,0.45);">
              If you did not create this account, you can ignore this email.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export type SendWelcomeResult = { sent: true } | { sent: false; reason: string };

/**
 * Sends a welcome email after first Google sign-in via Resend.
 * If RESEND_API_KEY is missing, returns { sent: false } without throwing (local dev).
 */
export async function sendWelcomeEmail(opts: {
  to: string;
  displayName: string;
}): Promise<SendWelcomeResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, reason: 'RESEND_API_KEY is not set' };
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.EMAIL_FROM?.trim() || 'DigitalTradersLab <noreply@digitaltraderslab.online>';

  const { data, error } = await resend.emails.send({
    from,
    to: [opts.to],
    subject: 'Welcome to DigitalTradersLab',
    html: buildHtml(opts.displayName),
    text: buildPlainText(opts.displayName),
  });

  if (error) {
    console.error('[email] Welcome email Resend error:', error);
    return { sent: false, reason: error.message };
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('[email] Welcome email sent', data?.id ?? '');
  }

  return { sent: true };
}
