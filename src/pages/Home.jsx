import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero section with background image */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/gaming-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
            Welcome to GameZone
          </h2>

          <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Explore top gaming gear, consoles, and accessories!
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
