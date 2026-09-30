import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-amber-950 px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-amber-100 tracking-wide"
        >
          Dcoff
        </Link>

        <div className="hidden md:flex items-center gap-7">

          <Link
            href="/"
            className="text-amber-100 hover:text-amber-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="text-amber-100 hover:text-amber-300 transition duration-300"
          >
            Menu
          </Link>

          <Link
            href="/tentang"
            className="text-amber-100 hover:text-amber-300 transition duration-300"
          >
            Tentang Kami
          </Link>

          <Link
            href="/kontak"
            className="text-amber-100 hover:text-amber-300 transition duration-300"
          >
            Kontak
          </Link>

        </div>

      </div>
    </nav>
  );
}