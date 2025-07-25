
import { useState } from "react";

export default function AddProductsForm() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full h-screen bg-gradient-to-br from-amber-700 to-yellow-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[650px] space-y-6">
        <h2 className="text-2xl font-bold text-center text-amber-700">Add New Product</h2>

        {/* Name Field */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Weight Field */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Weight (kg)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter weight"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Price Field */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Price (LKR)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter price"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Description</label>
          <textarea
            placeholder="Enter description"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-md transition">
          Add Product
        </button>
      </div>
    </div>
  );
}
