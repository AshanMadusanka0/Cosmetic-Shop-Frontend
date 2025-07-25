import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([
    {
      _id: '68776dad9ef2f7c3b8505f59',
      name: 'Ashan',
      weight: 100,
      price: '1200',
      __v: 0,
    },
    {
      _id: '68778b41c97f3d24fd6f012a',
      name: 'Ashan',
      weight: 100,
      price: '1200',
      __v: 0,
    },
    {
      _id: '68778d1799761f2c9110e400',
      name: 'Ashan',
      weight: 100,
      price: '1200',
      __v: 0,
    },
  ]);

  useEffect(() => {
    axios.get('http://localhost:5500/products').then((res) => {
      console.log(res.data);
      //setProducts(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
        <button className='absolute bottom-[25px] right-[25px] text-[20px] bg-blue-800 p-3 rounded-lg text-white hover:bg-blue-500'><FaPlus/></button>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Panel - Product List</h1>

        <div className="overflow-x-auto shadow-md rounded-lg bg-white">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Product ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Weight (g)</th>
                <th className="px-6 py-3 text-left">Price (LKR)</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product._id}
                  className={`border-b hover:bg-gray-100 transition duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4">{product._id}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.weight}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4 flex justify-center gap-4 text-lg text-gray-600">
                    <button className="hover:text-red-600 transition duration-150">
                      <FaTrash />
                    </button>
                    <button className="hover:text-blue-600 transition duration-150">
                      <FaPencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
