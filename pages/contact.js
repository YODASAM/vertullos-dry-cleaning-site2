// pages/contact.js
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Vertullo&apos;s</title>
        <meta name="description" content="Contact Vertullo's Dry Cleaning in Highland, NY." />
      </Head>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Vertullo&apos;s
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <Link href="/booking" className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600">
                Book Now
              </Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <p className="mb-4">
                43 Main Street<br />
                Highland, NY 12528
              </p>
              <p className="mb-4">
                Phone: <a href="tel:+18456919341" className="underline">(845) 691-9341</a><br />
                Email: <a href="mailto:info@vertullos.com" className="underline">info@vertullos.com</a>
              </p>
              <p className="mb-4">
                <strong>Hours:</strong><br />
                Mon–Fri: 7 AM – 6 PM<br />
                Sat: 8 AM – 4 PM<br />
                Sun: Closed
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
              <blockquote className="italic mb-2">
                &quot;Fast, friendly service – always spotless!&quot; – <em>Local Customer</em>
              </blockquote>
              <blockquote className="italic">
                &quot;Best in Highland for alterations.&quot; – <em>Happy Client</em>
              </blockquote>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Vertullo&apos;s Dry Cleaning & Drop. 
            43 Main St, Highland, NY 12528. (845) 691-9341.
          </p>
        </div>
      </footer>
    </>
  );
}

