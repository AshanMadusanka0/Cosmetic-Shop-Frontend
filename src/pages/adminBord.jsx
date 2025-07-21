import { Link, Route, Routes } from 'react-router-dom';
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import AdminProductPage from './admin/adminProductsPage';


export default function AdminDashboard() {
  return (
    <div className='bg-blue-200 w-full h-screen flex'>
    
       <div className='w-[20%] h-screen bg-blue-950 flex flex-col items-center'>
            

        <Link to="/adminBord/dashboard" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><BsGraphUp/>Dashboard</Link>
        <Link to="/adminBord/products" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><MdOutlineProductionQuantityLimits />Products</Link>
        <Link to="/adminBord/orders" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><RiListUnordered />Orders</Link>
        <Link to="/adminBord/users" className=" hover:bg-gray-700 p-2 rounded flex flex-row items-center"><FaUserCircle />Users</Link>
        <Link to="/logout" className=" hover:bg-gray-700 p-2 rounded">Logout</Link>
         
       </div>

       <div className='w-[80%] h-screen bg-red-300'>
      
        <Routes path="/*">
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductPage/>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/login" element={<h1>Users</h1>} />
        </Routes>
     

       </div>
     
    </div>
   
  );
}
