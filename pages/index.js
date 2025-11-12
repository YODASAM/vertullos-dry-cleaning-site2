import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vertullo&apos;s Dry Cleaning & Drop - Highland, NY</title>
        <meta name="description" content="Family-owned dry cleaning with fast, friendly service. Book online for pickup/dropoff in Highland, NY." />
      </Head>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-primary">Vertullo&apos;s</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <Link href="/booking" className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600">Book Now</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section className="relative">
          <Image src="/images/hero.jpg" alt="Professional laundry service" width={1920} height={1080} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Dry Cleaning</h1>
              <p className="text-xl mb-6">Family-owned for 30+ years. Fast, eco-friendly service in Highland, NY.</p>
              <Link href="/booking" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Book Appointment</Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Vertullo&apos;s?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                <p>Turnaround in 24-48 hours. Pickup/dropoff available.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p>Green cleaning solutions for your garments.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                <p>Family-run with a personal touch since the 1980s.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image src="/images/services.jpg" alt="Dry cleaning services" width={960} height={640} className="rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <ul className="space-y-2">
                  <li>• Dry Cleaning: Suits, dresses, shirts</li>
                  <li>• Wash & Fold Laundry</li>
                  <li>• Alterations & Repairs</li>
                  <li>• Leather/Suede Care</li>
                  <li>• Wedding Gown Preservation</li>
                  <li>• Rug & Household Cleaning</li>
                  <li>• Free Pickup/Delivery (10-mile radius)</li>
                </ul>
                <Link href="/services" className="text-primary underline mt-4 inline-block">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Book your appointment today and experience the difference.</p>
            <Link href="/booking" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Schedule Now</Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Vertullo&apos;s Dry Cleaning & Drop. 43 Main St, Highland, NY 12528. (845) 691-9341.</p>
        </div>
      </footer>
    </>
  );

}
