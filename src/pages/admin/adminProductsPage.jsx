import axios from 'axios';       //call to backend .like a postman tool
import { useEffect, useState } from 'react';


export default function adminProductsPage(){

    const[products,setProducts] = useState([
        {
            "_id": "68776dad9ef2f7c3b8505f59",
            "name": "Ashan",
            "weight": 100,
            "price": "1200",
            "__v": 0
        },
        {
            "_id": "68778b41c97f3d24fd6f012a",
            "name": "Ashan",
            "weight": 100,
            "price": "1200",
            "__v": 0
        },
        {
            "_id": "68778d1799761f2c9110e400",
            "name": "Ashan",
            "weight": 100,
            "price": "1200",
            "__v": 0
        }

    ]
)

  //console.log(products)

useEffect(
    ()=>{

       axios.get("http://localhost:5500/products").then(
        (res)=>{
        
       console.log(res.data )// setProducts(res.data)     //call the real database product details    
       //setProducts(res.data)
    }
)

  },[]
)
     

   
    
    return(
        //////////map function///////////
        <div>
            <h1>Admin Pannel</h1>

            {
              products.map(
                (product,keyNumber)=>{  ///give the array numbers as the keyNumber
                  //  console.log(product)
                  return(
                    <div key={keyNumber}> 
                        {product.name}
                    </div>
                  )
                }
              )
            }
            
            
        </div>
        //////////map function///////////

        
    )
}