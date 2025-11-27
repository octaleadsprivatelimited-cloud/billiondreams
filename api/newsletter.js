export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  try {
    console.log('Newsletter subscription (Vercel):', { email, timestamp: new Date().toISOString() });
    return res.status(200).json({ success: true, message: 'Successfully subscribed to our newsletter!' });
  } catch (err) {
    console.error('Newsletter error (Vercel):', err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
}

