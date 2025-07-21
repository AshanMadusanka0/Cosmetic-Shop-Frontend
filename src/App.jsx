import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './component/productCard'
import UserData from './component/userData'  ///we should not  add .js  in react 
import Testing from './component/testing'
import LoginPage from './pages/loginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import SignupPage from './pages/signUp'
import AdminDashboard from './pages/adminBord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     {/* <ProductCard name="Online Sale" price="$500" src="https://thumbs.dreamstime.com/b/resume-icon-vector-male-person-profile-avatar-document-symbol-business-glyph-pictogram-illustration-166893541.jpg"/>
     <ProductCard name="Market Sale" price="$200" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740"/>
     <UserData/> */}

     <BrowserRouter>
       <Routes path="/*">
          
          <Route path="/" element={<HomePage/>}></Route>

          <Route path="/login" element={<LoginPage/>}></Route>

           <Route path="/signup" element={<SignupPage/>}></Route>

            <Route path="/adminBord*" element={<AdminDashboard/>}></Route> 

          <Route path="/*" element={<h1>ERROR</h1>}></Route>


          
       
       </Routes>
     </BrowserRouter>
     
      
    </>
  )
}

export default App
