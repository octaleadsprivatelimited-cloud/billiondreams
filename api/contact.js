export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, phone, message, service } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  console.log('Contact form submission (Vercel):', {
    name,
    email,
    phone: phone || 'Not provided',
    message,
    service: service || 'General inquiry',
    timestamp: new Date().toISOString()
  });

  try {
    return res.status(200).json({ success: true, message: 'Thank you for your inquiry! We will contact you soon.' });
  } catch (err) {
    console.error('Contact form error (Vercel):', err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
}

