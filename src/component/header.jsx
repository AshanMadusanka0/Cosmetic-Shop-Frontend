import { Link } from "react-router-dom";

export default function Header(){
   return(
    <header className="bg-gray-200 w-full h-[75px] relative flex justify-center items-center">
        <img src="/logo.png" className="w-[100px] rounded-full absolute left-[10px] cursor-pointer"/>
        <div className="h-full flex items-center w-[600px] justify-evenly">
        <Link to="/" className="text-orange-700 font-semibold text-xl hover:border-b border-b-amber-700">Home</Link>
        <Link to="/products" className="text-orange-700 font-semibold text-xl hover:border-b border-b-amber-700">Products</Link>
        <Link to="/about" className="text-orange-700 font-semibold text-xl hover:border-b border-b-amber-700">About Us</Link>
        <Link to="/contact" className="text-orange-700 font-semibold text-xl hover:border-b border-b-amber-700">Contact Us</Link>
        </div>
    </header>
   ) 
}