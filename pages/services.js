import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Head><title>Services - Vertullo&apos;s</title></Head>
      {/* Reuse nav from _app or copy */}
      <nav>{/* Same as index nav */}</nav>
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <Image src="/images/services.jpg" alt="Our services" width={1920} height={1280} className="w-full h-64 object-cover rounded-lg mb-8" />
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Dry Cleaning</h2>
              <p>Professional care for suits, dresses, blouses, and more. Gentle, effective cleaning.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Wash & Fold</h2>
              <p>Convenient laundry service. Drop off dirty, pick up fresh and folded.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Alterations</h2>
              <p>Expert tailoring and repairs to fit perfectly.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Specialty Care</h2>
              <p>Leather, suede, wedding gowns, rugs – we handle it all.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Pickup & Delivery</h2>
              <p>Free within 10 miles. Schedule via app or call.</p>
            </div>
          </div>
          <Link href="/booking" className="block mt-8 bg-primary text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700">Book Service</Link>
        </div>
      </main>
      {/* Footer same as index */}
    </>
  );

}
