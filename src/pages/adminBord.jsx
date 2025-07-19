import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Products</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Orders</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Users</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Cards */}
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-500">Total Products</h3>
            <p className="text-2xl font-bold text-blue-600">120</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-500">Total Orders</h3>
            <p className="text-2xl font-bold text-green-600">350</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold text-purple-600">90</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold text-yellow-600">$4,500</p>
          </div>
        </div>

        {/* Optional: Add more sections like charts or recent activity */}
      </main>

      <Link to="/adminBord"></Link>
    </div>
  );
}
