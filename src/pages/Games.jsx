import "animate.css";

export default function Games() {
  const games = [
    {
      id: 1,
      title: "Call of Duty",
      image: "/public/images/cod.jpg",
      description: "Top FPS game with amazing graphics and gameplay.",
    },
    {
      id: 2,
      title: "FIFA 25",
      image: "/public/images/fifa.jpg",
      description: "Best football game with real player movements.",
    },
    {
      id: 3,
      title: "God of War",
      image: "/public/images/images.jpg",
      description: "Epic action and storytelling in Norse mythology.",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10 animate__animated animate__fadeInDown">
        Explore Top Games
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
          >
            <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{game.title}</h2>
              <p className="text-gray-600 text-sm">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
