import "animate.css";
import Swal from "sweetalert2";
import { useCartStore } from "../store/cartStore";

export default function Games() {
  const games = [
    {
      id: 1,
      title: "Call of Duty: Modern Warfare",
      image: "/images/cod.jpg",
      price: "$59.99",
      description:
        "First-person shooter with intense combat, realistic graphics, and a gripping campaign mode. Features multiplayer and Warzone battle royale.",
    },
    {
      id: 2,
      title: "FIFA 23",
      image: "/images/fifa.jpg",
      price: "$49.99",
      description:
        "The latest soccer simulation with improved gameplay, HyperMotion2 technology, and all official leagues and teams.",
    },
    {
      id: 3,
      title: "God of War: Ragnarök",
      image: "/images/god of war.jpg",
      price: "$39.99",
      description:
        "Action-adventure game following Kratos and Atreus in Norse mythology. Features brutal combat and an emotional story.",
    },
    {
      id: 4,
      title: "Grand Theft Auto V",
      image: "/images/gta.jpg",
      price: "$29.99",
      description:
        "Open-world crime game set in Los Santos. Play as three protagonists in a story of heists and chaos. Includes GTA Online.",
    },
    {
      id: 5,
      title: "Mortal Kombat 11",
      image: "/images/mortal combat.jpg",
      price: "$19.99",
      description:
        "Brutal fighting game with gory fatalities. Features a roster of classic characters and deep combat mechanics.",
    },
    {
      id: 6,
      title: "eFootball PES 2023",
      image: "/images/pes.jpg",
      price: "$24.99",
      description:
        "Free-to-play football game with realistic gameplay mechanics and licensed clubs. The successor to Pro Evolution Soccer.",
    },
    {
      id: 7,
      title: "Red Dead Redemption 2",
      image: "/images/red dead.jpg",
      price: "$44.99",
      description:
        "Western open-world adventure as Arthur Morgan. Stunning visuals, deep storytelling, and immersive gameplay.",
    },
    {
      id: 8,
      title: "Marvel's Spider-Man: Miles Morales",
      image: "/images/spider-man.jpg",
      price: "$34.99",
      description:
        "Action-adventure as Miles Morales with new powers. Swinging through NYC with stunning visuals and fast-paced combat.",
    },
    {
      id: 9,
      title: "Ghost of Tsushima",
      image: "/images/ghost.jpg",
      price: "$64.99",
      description:
        "Samurai open-world game set in feudal Japan. Beautiful landscapes, katana combat, and a tale of honor.",
    },
    {
      id: 10,
      title: "Elden Ring",
      image: "/images/elden ring.jpg",
      price: "$54.99",
      description:
        "Open-world RPG by FromSoftware. Challenging combat, deep lore, and massive world to explore. Game of the Year 2022.",
    },
    {
      id: 11,
      title: "Horizon Forbidden West",
      image: "/images/horizon.jpg",
      price: "$49.99",
      description:
        "Action RPG set in a post-apocalyptic world with robotic creatures. Stunning visuals and engaging combat.",
    },
    {
      id: 12,
      title: "The Witcher 3: Wild Hunt",
      image: "/images/the witcher.jpg",
      price: "$74.99",
      description:
        "Award-winning RPG as Geralt of Rivia. Massive open world, deep storytelling, and monster hunting.",
    },
    {
      id: 13,
      title: "It Takes Two",
      image: "/images/it takes tow.jpg",
      price: "$33.99",
      description:
        "Co-op adventure about a couple turned into dolls. Requires teamwork with creative gameplay mechanics.",
    },
    {
      id: 14,
      title: "Assassin's Creed Origins",
      image: "/images/assassin.jpg",
      price: "$82.99",
      description:
        "Action RPG set in ancient Egypt. The origin story of the Brotherhood with revamped combat and exploration.",
    },
    {
      id: 15,
      title: "Watch Dogs: Legion",
      image: "/images/watch dogs.jpg",
      price: "$34.99",
      description:
        "Open-world hacking game set in London. Play as any NPC with unique abilities in a futuristic setting.",
    },
    {
      id: 16,
      title: "The Last of Us Part I",
      image: "/images/last of us.jpg",
      price: "$67.99",
      description:
        "Remake of the classic post-apocalyptic story. Improved graphics and gameplay following Joel and Ellie's journey.",
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
        <span className="text-blue-500">Our</span> Games
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
              className="w-full h-70 bg-cover rounded-xl mb-3"
            />
            <h3 className="text-xl font-bold mb-2">{game.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{game.description}</p>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-blue-600">{game.price}</span>
            </div>
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
