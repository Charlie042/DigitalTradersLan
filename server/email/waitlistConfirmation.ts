import { Resend } from 'resend';

const ELECTRIC = '#1B4DFF';
const INK = '#0D0D0D';
const OFF = '#F8F7F4';

function firstName(fullName: string): string {
  const part = fullName.trim().split(/\s+/)[0];
  return part || 'there';
}

function buildPlainText(fullName: string): string {
  const name = firstName(fullName);
  return [
    `Hi ${name},`,
    '',
    "Thanks for joining the DigitalTradersLab waitlist — you're officially on the list.",
    '',
    "We're building a gamified trading practice platform with real market challenges, instant rewards, and zero financial risk. You'll be among the first to know when beta opens.",
    '',
    'What happens next:',
    '• We may send occasional product updates (you can change this anytime before launch).',
    '• Watch your inbox for your invite when spots open.',
    '',
    '— The DigitalTradersLab team',
    '',
    'If you did not sign up, you can ignore this email.',
  ].join('\n');
}

function buildHtml(fullName: string): string {
  const name = firstName(fullName);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>You're on the waitlist</title>
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
              <p style="margin:0 0 16px;">Thanks for joining the <strong>DigitalTradersLab</strong> waitlist — you're officially on the list.</p>
              <p style="margin:0 0 24px;color:rgba(13,13,13,0.75);">We're building a gamified trading practice platform with real market challenges, instant rewards, and zero financial risk. You'll be among the first to know when beta opens.</p>
              <p style="margin:0 0 8px;font-weight:bold;font-size:14px;letter-spacing:0.12em;text-transform:uppercase;">What happens next</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr><td style="padding:6px 0;font-size:15px;color:rgba(13,13,13,0.85);">&#8226; We may send occasional product updates (you can change this anytime before launch).</td></tr>
                <tr><td style="padding:6px 0;font-size:15px;color:rgba(13,13,13,0.85);">&#8226; Watch your inbox for your invite when spots open.</td></tr>
              </table>
              <p style="margin:0;font-size:15px;">— The DigitalTradersLab team</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 28px;border-top:3px solid ${INK};font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:rgba(13,13,13,0.45);">
              If you did not sign up for this waitlist, you can ignore this email.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export type SendWaitlistResult = { sent: true } | { sent: false; reason: string };

/**
 * Sends a waitlist confirmation email via Resend.
 * If RESEND_API_KEY is missing, returns { sent: false } without throwing (local dev).
 */
export async function sendWaitlistConfirmationEmail(opts: {
  to: string;
  fullName: string;
}): Promise<SendWaitlistResult> {
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
    subject: "You're on the DigitalTradersLab waitlist",
    html: buildHtml(opts.fullName),
    text: buildPlainText(opts.fullName),
  });

  if (error) {
    console.error('[email] Resend error:', error);
    return { sent: false, reason: error.message };
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('[email] Waitlist confirmation sent', data?.id ?? '');
  }

  return { sent: true };
}
