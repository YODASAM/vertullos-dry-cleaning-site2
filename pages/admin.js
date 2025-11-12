import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(stored);
  }, []);

  const handlePassword = () => {
    if (password === 'vertullo2025') setShowAdmin(true);
    else alert('Incorrect password');
  };

  if (!showAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Admin Login</h1>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-2 border rounded mb-4" />
          <button onClick={handlePassword} className="bg-primary text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head><title>Admin - Vertullo&apos;s</title></Head>
      {/* Nav */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Recent Bookings</h1>
          <button onClick={() => setShowAdmin(false)} className="mb-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Service</th>
                <th className="border px-4 py-2">Date/Time</th>
                <th className="border px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(-10).reverse().map((booking) => (
                <tr key={booking.id}>
                  <td className="border px-4 py-2">{booking.name}</td>
                  <td className="border px-4 py-2">{booking.email}</td>
                  <td className="border px-4 py-2">{booking.service}</td>
                  <td className="border px-4 py-2">{format(new Date(booking.date), 'MMM dd')} @ {booking.time}</td>
                  <td className="border px-4 py-2">{booking.notes || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm">Demo: Data from localStorage. Production: Sync to DB/Email.</p>
        </div>
      </main>
    </>
  );

}
