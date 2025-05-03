import "animate.css";
import Swal from "sweetalert2";
import { useCartStore } from "../store/cartStore";

export default function Games() {
  const games = [
    { id: 1, title: "Call of Duty", image: "/images/cod.jpg", price: "$59.99" },
    { id: 2, title: "FIFA", image: "/images/fifa.jpg", price: "$49.99" },
    {
      id: 3,
      title: "God of War",
      image: "/images/god of war.jpg",
      price: "$39.99",
    },
    { id: 4, title: "GTA", image: "/images/gta.jpg", price: "$29.99" },
    {
      id: 5,
      title: "Mortal Kombat",
      image: "/images/mortal combat.jpg",
      price: "$19.99",
    },
    { id: 6, title: "PES", image: "/images/pes.jpg", price: "$24.99" },
    {
      id: 7,
      title: "Red Dead Redemption",
      image: "/images/red dead.jpg",
      price: "$44.99",
    },
    {
      id: 8,
      title: "Spider-Man",
      image: "/images/spider-man.jpg",
      price: "$34.99",
    },
    {
      id: 9,
      title: "Ghost of tsushima",
      image: "/images/ghost.jpg",
      price: "$64.99",
    },
    {
      id: 10,
      title: "Elden ring",
      image: "/images/elden ring.jpg",
      price: "$54.99",
    },
    {
      id: 11,
      title: "Horizon",
      image: "/images/horizon.jpg",
      price: "$49.99",
    },
    {
      id: 12,
      title: "The witcher",
      image: "/images/the witcher.jpg",
      price: "$74.99",
    },
    {
      id: 13,
      title: "It takes two",
      image: "/images/it takes tow.jpg",
      price: "$33.99",
    },
    {
      id: 14,
      title: "Assassin's Creed Origins",
      image: "/images/assassin.jpg",
      price: "$82.99",
    },
    {
      id: 15,
      title: "Watch Dogs: Legion",
      image: "/images/watch dogs.jpg",
      price: "$34.99",
    },
    {
      id: 16,
      title: "The Last of Us Part I",
      image: "/images/last of us.jpg",
      price: "$67.99",
    },
  ];

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (game) => {
    addToCart(game);
    Swal.fire({
      title: `${game.title}`,
      text: "Added to cart successfully!",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
        <span className=" text-blue-500">Our</span> Games
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-70 bg-cover rounded-xl"
            />
            <button
              onClick={() => handleAddToCart(game)}
              className="w-full py-3 px-6 mt-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Add to Cart</span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
