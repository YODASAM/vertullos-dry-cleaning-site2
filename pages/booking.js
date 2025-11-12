import { useState } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import Image from 'next/image';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Dry Cleaning', date: new Date(), time: '09:00', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In production: POST to /api/bookings
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
      // Store in localStorage for demo admin view
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      bookings.push({ ...formData, id: Date.now(), submittedAt: new Date() });
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
          <p>We'll contact you soon. Thank you!</p>
          <button onClick={() => setSubmitted(false)} className="mt-4 bg-primary text-white px-6 py-2 rounded">Book Another</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head><title>Book Appointment - Vertullo&apos;s</title></Head>
      {/* Nav */}
      <main className="py-16 bg-secondary">
        <div className="max-w-md mx-auto px-4">
          <Image src="/images/booking.jpg" alt="Book your service" width={1920} height={1080} className="w-full h-48 object-cover rounded-lg mb-8" />
          <h1 className="text-3xl font-bold mb-8 text-center">Book Your Service</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <select name="service" value={formData.service} onChange={handleChange} className="w-full p-3 border rounded-lg">
              <option>Dry Cleaning</option>
              <option>Wash & Fold</option>
              <option>Alterations</option>
              <option>Specialty Care</option>
              <option>Pickup/Delivery</option>
            </select>
            <input name="date" type="date" value={format(formData.date, 'yyyy-MM-dd')} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <select name="time" value={formData.time} onChange={handleChange} className="w-full p-3 border rounded-lg">
              <option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>13:00</option><option>14:00</option><option>15:00</option><option>16:00</option>
            </select>
            <textarea name="notes" placeholder="Special Instructions (optional)" value={formData.notes} onChange={handleChange} rows={3} className="w-full p-3 border rounded-lg" />
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Submit Booking</button>
          </form>
          <p className="text-center mt-4 text-sm">Or call (845) 691-9341</p>
        </div>
      </main>
      {/* Footer */}
    </>
  );

}
