import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* <!-- Hero Section --> */}
      <section className="bg-green-600 text-white py-20 w-full">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Fassal</h1>
          <p className="text-xl mb-6">Connecting Farmers and Middlemen for Efficient Transactions</p>

          <Link href={"/auth/login"}
            className=" bg-white rounded-2xl text-primary p-5 text-center"
          >
            ENTER
          </Link>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Features</h2>
            <p className="text-lg">Explore the key features of our app</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/absurd-src-1.jpg" alt="Feature 1" className="w-full h-40 object-cover mb-6" width={100} height={100} />
              <h3 className="text-2xl font-bold mb-2">Post Commodities</h3>
              <p>Farmers can post large quantities of their produce for sale.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/absurd-src-2.jpg" alt="Feature 2" className="w-full h-40 object-cover mb-6" width={100} height={100} />
              <h3 className="text-2xl font-bold mb-2">Bid System</h3>
              <p>Middlemen can place bids on commodities and the highest bidder wins.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/absurd-src-3.jpg" alt="Feature 3" className="w-full h-40 object-cover mb-6" width={100} height={100} />
              <h3 className="text-2xl font-bold mb-2">Dashboard</h3>
              <p>Manage your transactions and orders efficiently with our dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Dashboard Section --> */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Dashboard</h2>
          <div className="flex justify-center">
            <Image src="/absurd-src-4.jpg" alt="Dashboard" className="w-full md:w-3/4 lg:w-1/2 h-96 object-cover rounded-lg shadow-lg" width={100} height={100} />
          </div>
        </div>
      </section>

      {/* <!-- Transactions Management Section --> */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Transactions & Orders Management</h2>
            <p className="text-lg">Keep track of all your transactions and orders in one place</p>
          </div>
          <div className="flex justify-center">
            <Image src="/absurd-src-5.jpg" alt="Transactions Management" className="w-full md:w-3/4 lg:w-1/2 h-96 object-cover rounded-lg shadow-lg" width={100} height={100} />
          </div>
        </div>
      </section>

      {/* <!-- Store Section --> */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Store</h2>
            <p className="text-lg">Browse and purchase farming equipment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/absurd-src-6.jpg" alt="Equipment 1" className="w-full h-40 object-cover mb-6" width={100} height={100} />
              <h3 className="text-2xl font-bold mb-2">Tractor</h3>
              <p>High-quality tractor for all your farming needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/absurd-src-7.jpg" alt="Equipment 2" className="w-full h-40 object-cover mb-6" width={100} height={100} />
              <h3 className="text-2xl font-bold mb-2">Plough</h3>
              <p>Durable plough to make your soil preparation easier.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/absurd-src-8.jpg" alt="Equipment 3" className="w-full h-40 object-cover mb-6" width={100} height={100} />
              <h3 className="text-2xl font-bold mb-2">Seed Drill</h3>
              <p>Efficient seed drill for precise planting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-green-600 w-full text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Fassal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
