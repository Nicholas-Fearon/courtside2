import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-600">
          <Link href="/" className="hover:text-black transition-colors">
            🏀 Courtside
          </Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link
            href="/teams"
            className="hover:text-green-600 transition-colors"
          >
            Teams
          </Link>
          <Link
            href="/players"
            className="hover:text-green-600 transition-colors"
          >
            Players
          </Link>
          <Link
            href="/about"
            className="hover:text-green-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
