import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function LoginPage() {


  const [email,setEmail]=useState("Your Email")   /////
  const [password,setPassword]=useState("")      /////

  function login(){
    
    axios.post(import.meta.env.VITE_BACKEND_URL+"/users/login",{
      email : email,
      password : password
    }).then(
      (res)=>{

       if(res.data.user ==null){
        toast.error(res.data.message)
        return
       }
       
       toast.success("Login Success")
       // console.log(res)
        localStorage.setItem("token",res.data.
        token)
/////////////////////login page integration of backend//////////

        if(res.data.user.role =="admin"){
          window.location.href ="/adminBord"
        }else{
          window.location.href ="/"
        }
/////////////////////login page integration of backend//////////

      }

    )
  }


  return (
    <div className='w-full h-screen bg-amber-600 flex justify-center items-center'>
      <div className='w-[450px] h-[450px] bg-green-700 flex flex-col justify-center items-center'>
        <img src='/logo.png' className='w-[120px] '/>
       
            <span>Email</span>
            <input type="text" className='bg-amber-50' defaultValue={email} onChange={
              (e)=>{
                //console.log(e.target.value)         //// real time update login input pannel
                setEmail(e.target.value)          //real time update email store as the function
              }
            }/>    

            <span>Password</span>
            <input type="password" className='bg-amber-50' defaultValue={password} onChange={
              (e)=>{
                setPassword(e.target.value)
              }
            }/>
            <button onClick={login}>Login</button>
          

      </div>

    </div>
  );
}
