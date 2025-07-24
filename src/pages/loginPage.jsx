import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {


  const [email,setEmail]=useState("Your Email")   /////
  const [password,setPassword]=useState("")      /////


  return (
    <div className='w-full h-screen bg-amber-600 flex justify-center items-center'>
      <div className='w-[450px] h-[450px] bg-green-700 flex flex-col justify-center items-center'>
        <img src='/logo.png' className='w-[120px] '/>
       
            <span>Email</span>
            <input type="text" className='bg-amber-50' defaultValue={email} onChange={
              (e)=>{
                console.log(e.target.value)         ////
              }
            }/>    

            <span>Password</span>
            <input type="password" className='bg-amber-50' defaultValue={password}/>
            <button>Login</button>
          

      </div>

    </div>
  );
}
