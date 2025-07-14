export default function Footer() {
  return (
    <footer className="bg-[#fef6f0] text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-semibold text-pink-500">Holistically</h2>
          <p className="text-sm mt-1">With Dr. Priyanka Sharma</p>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-pink-500">
            Home
          </a>
          <a href="#about" className="hover:text-pink-500">
            About
          </a>
          <a href="#services" className="hover:text-pink-500">
            Services
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Holistically. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
