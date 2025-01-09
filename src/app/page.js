import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center bg-green-500 text-black py-12 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Courtside2</h1>
        <p className="text-lg text-black mb-6">
          Dive into the world of basketball. Discover teams, players, and a vibrant fan community.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/teams">
            <button className="bg-white text-green-500 px-4 py-2 rounded shadow hover:bg-gray-100 transition">
              Explore Teams
            </button>
          </Link>
          <Link href="/players">
            <button className="bg-white text-green-500 px-4 py-2 rounded shadow hover:bg-gray-100 transition">
              View Players
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md text-center border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Browse Team Rosters</h3>
            <p className="text-black">Get detailed insights about your favorite teams.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Get Player Insights</h3>
            <p className="text-black">View stats and information about your favorite players.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-green-500">Stay Updated</h3>
            <p className="text-black">Coming soon: live stats and updates for teams and players.</p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-8">Recent Activity</h2>
        <p className="text-center text-black">No recent updates yet. Stay tuned for live content!</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-black mt-12">
        <p>© 2025 Courtside2. All rights reserved.</p>
        <p>
          <Link href="https://github.com/Nicholas-Fearon">
            <span className="text-green-500 hover:underline">GitHub</span>
          </Link>{" "}
          |{" "}
          <Link href="mailto:nejfearon@gmail.com">
            <span className="text-green-500 hover:underline">Email Me</span>
          </Link>
        </p>
      </footer>
    </div>
  );
}