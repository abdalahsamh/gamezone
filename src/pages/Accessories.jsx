import { useState } from "react";
import { FaFire, FaTag, FaRocket } from "react-icons/fa";
import "animate.css";
import { useCartStore } from "../store/cartStore";
import AddToCart from "../components/AddToCart";
import Swal from "sweetalert2";

const accessoriesData = [
  {
    id: 1,
    name: "Gaming Chair 1",
    price: 100,
    category: "Chair",
    description: "Comfortable gaming chair.",
    image: "/images/ch1.jpg",
    badge: "New",
  },
  {
    id: 2,
    name: "Gaming Chair 2",
    price: 120,
    category: "Chair",
    description: "Ergonomic design chair.",
    image: "/images/chair2.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Gaming Chair 3",
    price: 140,
    category: "Chair",
    description: "Premium quality chair.",
    image: "/images/chair3.jpg",
    badge: "New",
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 80,
    category: "Storage",
    description: "High-speed external hard drive.",
    image: "/images/hard.jpg",
    badge: "Sale",
  },
  {
    id: 5,
    name: "Gaming Headset 1",
    price: 60,
    category: "Headset",
    description: "Clear sound quality headset.",
    image: "/images/headset1.jpg",
    badge: "New",
  },
  {
    id: 6,
    name: "Gaming Headset 2",
    price: 70,
    category: "Headset",
    description: "Noise cancelling headset.",
    image: "/images/headset2.jpg",
    badge: "New",
  },
  {
    id: 7,
    name: "Gaming Headset 3",
    price: 90,
    category: "Headset",
    description: "Gaming wireless headset.",
    image: "/images/headset3.jpg",
    badge: "New",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 85,
    category: "Keyboard",
    description: "Mechanical gaming keyboard.",
    image: "/images/keyboard1.jpg",
    badge: "Sale",
  },
  {
    id: 9,
    name: "RGB Keyboard",
    price: 95,
    category: "Keyboard",
    description: "RGB backlit mechanical keyboard.",
    image: "/images/keyboard2.jpg",
    badge: "Limited",
  },
  {
    id: 10,
    name: "Wired Mouse",
    price: 25,
    category: "Mouse",
    description: "Precision wired gaming mouse.",
    image: "/images/mouse1.jpg",
    badge: "New",
  },
  {
    id: 11,
    name: "Wireless Mouse",
    price: 35,
    category: "Mouse",
    description: "Wireless ergonomic mouse.",
    image: "/images/mouse2.jpg",
    badge: "New",
  },
  {
    id: 12,
    name: "Mouse Pad",
    price: 15,
    category: "Mousepad",
    description: "Large gaming mouse pad.",
    image: "/images/mousepad1.jpg",
    badge: "Sale",
  },
  {
    id: 13,
    name: "RGB Mouse Pad",
    price: 20,
    category: "Mousepad",
    description: "RGB illuminated mouse pad.",
    image: "/images/mousepad2.jpg",
    badge: "Limited",
  },
];

export default function Accessories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(accessoriesData.map((item) => item.category)),
  ];

  const filteredAccessories = accessoriesData
    .filter(
      (accessory) =>
        (selectedCategory === "All" ||
          accessory.category === selectedCategory) &&
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "newest") return b.id - a.id;
      return 0;
    });

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (accessory) => {
    addToCart(accessory);
    Swal.fire({
      title: `${accessory.name}`,
      text: "Added to cart successfully!",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Search, Category, and Sort Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search accessories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Accessories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredAccessories.map((accessory) => (
          <div
            key={accessory.id}
            className="relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp"
          >
            {/* Badge */}
            {accessory.badge && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                {accessory.badge === "New" && <FaFire />}
                {accessory.badge === "Sale" && <FaTag />}
                {accessory.badge === "Limited" && <FaRocket />}
                {accessory.badge}
              </span>
            )}

            {/* Image */}
            <img
              src={accessory.image}
              alt={accessory.name}
              className="w-full h-70 bg-contain rounded-xl mb-4 transition-transform duration-300"
            />

            {/* Info */}
            <h2 className="text-xl font-bold mb-2">{accessory.name}</h2>
            <p className="text-gray-500 text-sm mb-2">
              {accessory.description}
            </p>
            <p className="text-blue-600 font-bold text-lg mb-4">
              ${accessory.price}
            </p>

            {/* Add to Cart */}
            <button onClick={() => handleAddToCart(accessory)}>
              <AddToCart title={accessory.name} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
