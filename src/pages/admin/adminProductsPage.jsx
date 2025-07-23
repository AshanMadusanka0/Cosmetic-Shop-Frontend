import axios from 'axios';       //call to backend .like a postman tool


export default function AdminProductsPage(){

    axios.get("http://localhost:5500/products").then((res)=>{
        console.log(res)
    })

    return(
        <div>
            <h1>Admin Pannel</h1>
            
            
        </div>

        
    )
}