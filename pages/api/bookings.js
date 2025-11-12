export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Production: Send email via Nodemailer or Resend
    console.log('New Booking:', data); // Logs to Vercel dashboard
    // Example: await fetch('https://api.resend.com/emails', { ... }) for email to info@vertullos.com
    res.status(200).json({ message: 'Booking submitted successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}