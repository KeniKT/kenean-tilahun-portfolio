const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function clean(value, max) {
  return String(value || '').trim().slice(0, max);
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') return response.status(405).json({ message: 'Method not allowed.' });

  const body = request.body || {};
  if (body.website) return response.status(200).json({ ok: true });
  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const company = clean(body.company, 120);
  const reason = clean(body.reason, 80);
  const message = clean(body.message, 3000);

  if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 20) {
    return response.status(400).json({ message: 'Please provide a valid name, email, and message.' });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return response.status(503).json({ message: 'The contact service is temporarily unavailable.' });
  }

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL || 'keni232127@gmail.com'],
        reply_to: email,
        subject: `[Portfolio] ${reason || 'New message'} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nReason: ${reason || 'Not provided'}\n\n${message}`,
      }),
    });
    if (!result.ok) throw new Error('Email provider rejected the request.');
    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ message: 'Delivery failed. Please try again or use direct email.' });
  }
}
