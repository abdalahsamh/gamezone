import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white shadow p-6 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} GameZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
