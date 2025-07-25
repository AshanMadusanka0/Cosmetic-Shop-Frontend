export default function AddProductsForm() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-amber-700 to-yellow-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] space-y-6">
        <h2 className="text-2xl font-bold text-center text-amber-700">Add New Product</h2>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Weight</label>
          <input
            type="text"
            placeholder="Enter weight"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Price</label>
          <input
            type="text"
            placeholder="Enter price"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
        </div>

         <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Description</label>
          <textarea
            type="text"
            placeholder="Enter price"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
        </div>

        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-md transition">
          Add Product
        </button>
      </div>
    </div>
  );
}
