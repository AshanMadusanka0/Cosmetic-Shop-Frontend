import { Link, Route, Routes } from 'react-router-dom';
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <div className='bg-blue-200 w-full h-screen flex'>
    
       <div className='w-[20%] h-screen bg-blue-500 flex flex-col items-center'>
            

        <Link to="/admin/dashboard" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><BsGraphUp/>Dashboard</Link>
        <Link to="/admin/products" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><MdOutlineProductionQuantityLimits />Products</Link>
        <Link to="/admin/orders" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><RiListUnordered />Orders</Link>
        <Link to="/admin/users" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><FaUserCircle />Users</Link>
        <Link to="/logout" className=" hover:bg-gray-700 p-2 rounded">Logout</Link>
         
       </div>

       <div className='w-[80%] h-screen bg-red-500'>
      
        <Routes path="/*">
          <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/login" element={<h1>Users</h1>} />
        </Routes>
     

       </div>
     
    </div>
   
  );
}
