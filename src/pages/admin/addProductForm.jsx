
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductsForm() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [productID,setProductID] =useState("");
  const Navigate = useNavigate()         //function for the re derect other page to submit successfull 

////////////////////spli yoda wachana wenkragena ema data backend ekata send krna hada gnna puluwan
 async function handleSubmit(){
     const altNames = alternativeNames.split(",")
     const imgUrls = imageUrl.split(",")
////////all datas will arrange to send the backend////
     const product ={
       productID:productID,
       name :name,
       weight :weight,
       price :price,
       alternativeNames: altNames,
       imageUrl :imgUrls,
       description :description,
     }
     const token =localStorage.getItem("token")    //take the token in local storage
     
     try{

        await axios.post(import.meta.env.VITE_BACKEND_URL+"/products",product,{
        headers: {
            Authorization: "Bearer "+token
        }
     })
     Navigate("/adminBord/products")                         //re derect other page to submit successfull
     toast.success("product added successfully")

     }catch(err){
        console.log(err)
     }
    

  }
/////////////////////////////////////////////////////////
  return (
    <div className="w-full h-screen bg-gradient-to-br from-amber-700 to-yellow-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[650px] space-y-6">
        <h2 className="text-2xl font-bold text-center text-amber-700">Add New Product</h2>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">ProductID</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          />
        </div>

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

         {/* other name Field */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">Other Names</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            value={alternativeNames}
            onChange={(e) => setAlternativeNames(e.target.value)}
          />
        </div>


        {/* image Field */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">ImageUrl</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-md transition"
        onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
}
