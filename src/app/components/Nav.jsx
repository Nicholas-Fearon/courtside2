import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">🏀 Courtside</Link>
        </h1>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link
            href="/teams"
            className="hover:text-yellow-400 transition-colors"
          >
            Teams
          </Link>
          <Link
            href="/players"
            className="hover:text-yellow-400 transition-colors"
          >
            Players
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
