// Home.jsx
import { FaGamepad, FaShippingFast, FaTags } from "react-icons/fa";
import "animate.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeInDown">
          Welcome to GameZone
        </h1>
        <p className="mt-4 text-lg md:text-2xl animate__animated animate__fadeInUp">
          Explore top gaming gear, consoles, and accessories!
        </p>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-300 animate__animated animate__zoomIn">
              <FaGamepad className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Top Games</h3>
              <p className="text-gray-600">
                Explore the hottest titles in gaming!
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-300 animate__animated animate__zoomIn animate__delay-1s">
              <FaShippingFast className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your gear delivered in no time!
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-300 animate__animated animate__zoomIn animate__delay-2s">
              <FaTags className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Unbeatable deals you can't resist!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
