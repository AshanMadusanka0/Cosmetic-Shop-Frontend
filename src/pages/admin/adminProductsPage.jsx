import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


export default function AdminProductsPage() {
 // const [test,setTest] =useState("Not pressed");   
  const [products, setProducts] = useState([
    
  ]);
  

  useEffect(() => {
    axios.get('http://localhost:5500/products').then((res) => {
      console.log(res.data);

      setProducts(res.data.list);
      //prashne thibbe res.data eka athule thwa list kiyala obj ekak athule thama data enne ethakot res.data dunnt map kra gnn bari nisai fail une
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Add product button */}
      <Link
        to="/adminBord/products/addProducts"
        className="absolute bottom-[25px] right-[60px] text-[20px] bg-blue-800 p-3 rounded-lg text-white hover:bg-blue-500"
      >
        <FaPlus/>
      </Link>

      

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admin Panel - Product List
        </h1>

        <div className="overflow-x-auto shadow-md rounded-lg bg-white">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Product ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Weight (g)</th>
                <th className="px-6 py-3 text-left">Price (LKR)</th>
                <th className="px-6 py-3 text-left">alternativeNames</th>
                <th className="px-6 py-3 text-left">ImageUrl</th>
                <th className="px-6 py-3 text-left">Description</th>

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
                  <td className="px-6 py-4">{product.alternativeNames}</td>
                  <td className="px-6 py-4">{product.imageUrl}</td>
                  <td className="px-6 py-4">{product.description}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4 text-lg text-gray-600">
                    <button className="hover:text-red-600 transition duration-150" >

                        <FaTrash />
                      </button>
                      {/* <button className="hover:text-red-600 transition duration-150" onClick={()=>{
                        alert(product.productID)
                        const token = localStorage.getItem("token");

                        axios.delete('http://localhost:5500/products/',(product.productID),{
                          headers: {
                            Authorization: 'Bearer'+token
                          },
                        }).then((res) =>{
                          console.log(res.data)
                        });
                        
                      }}>
                        <FaTrash />
                      </button> */}
                      <button className="hover:text-blue-600 transition duration-150">
                        <FaPencil />
                      </button>
                    </div>
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