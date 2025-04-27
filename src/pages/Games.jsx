import "animate.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Games() {
  const games = [
    { id: 1, title: "Call of Duty", image: "/images/cod.jpg", price: "$59.99" },
    { id: 2, title: "FIFA", image: "/images/fifa.jpg", price: "$49.99" },
    { id: 3, title: "God of War", image: "/images/god of war.jpg", price: "$39.99" },
    { id: 4, title: "GTA", image: "/images/gta.jpg", price: "$29.99" },
    { id: 5, title: "Mortal Kombat", image: "/images/mortal combat.jpg", price: "$19.99" },
    { id: 6, title: "PES", image: "/images/pes.jpg", price: "$24.99" },
    { id: 7, title: "Red Dead Redemption", image: "/images/red dead.jpg", price: "$44.99" },
    { id: 8, title: "Spider-Man", image: "/images/spider-man.jpg", price: "$34.99" },
  ];

  const handleAddToCart = (title) => {
    toast.success(`${title} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
        Our Games
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform animate__animated animate__fadeInUp"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
              <p className="text-gray-600 mb-4">{game.price}</p>
              <button
                onClick={() => handleAddToCart(game.title)}
                className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full hover:scale-110 transition-transform"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
