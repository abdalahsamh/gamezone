import { useState } from "react";
import { FaFire, FaTag, FaRocket } from "react-icons/fa";
import "animate.css";

const productsData = [
  {
    id: 1,
    name: "Gaming PC",
    price: 1500,
    category: "PC",
    description: "High performance gaming PC.",
    image: "/images/Gaming pc.jpg",
    badge: "New",
  },
  {
    id: 2,
    name: "Xbox Series X",
    price: 500,
    category: "Xbox",
    description: "Power your dreams.",
    image: "/images/x box.jpg",
    badge: "Sale",
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: 550,
    category: "PS",
    description: "Play has no limits.",
    image: "/images/ps5.jpg",
    badge: "Limited",
  },
  {
    id: 4,
    name: "PC Screen",
    price: 120,
    category: "PC",
    description: "Crisp and vibrant visuals.",
    image: "/images/Pc screen.jpg",
    badge: "New",
  },
  {
    id: 5,
    name: "PC Gaming Screen",
    price: 150,
    category: "PC",
    description: "Ultimate gaming experience.",
    image: "/images/gaming pc screen.jpg",
    badge: "New",
  },
  {
    id: 6,
    name: "PlayStation 4",
    price: 440,
    category: "PS",
    description: "Classic gaming experience.",
    image: "/images/playstation 4.jpg",
    badge: "Sale",
  },
  {
    id: 7,
    name: "Laptop Gaming",
    price: 1300,
    category: "Accessories",
    description: "Powerful portable gaming.",
    image: "/images/laptop.jpg",
    badge: "Limited",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const filteredProducts = productsData
    .filter((product) => {
      return (
        (filterCategory === "All" || product.category === filterCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "newest") return b.id - a.id;
      return 0;
    });

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="PC">PC</option>
          <option value="Xbox">Xbox</option>
          <option value="PS">PS</option>
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>ِ
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                {product.badge === "New" && <FaFire />}
                {product.badge === "Sale" && <FaTag />}
                {product.badge === "Limited" && <FaRocket />}
                {product.badge}
              </span>
            )}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-79  object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
            />

            {/* Product Info */}
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>
            <p className="text-blue-600 font-bold text-lg mb-4">${product.price}</p>

            {/* Add to Cart Button */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full hover:scale-90 transition-transform">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
