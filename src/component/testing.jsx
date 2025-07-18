import { useState } from "react"
import "./testing.css"

export default function Testing(){

    const[count,setCount]= useState(0)      //use satate react  hooks
    const[name,setName]= useState("Student")

    function increment(){
       setCount(count+1)

    }

    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
/////////

    function changeName(value){
        setName(value)

    }


    //setCount(0)  <= dont call like this beacuse that is wrong method..ninkma eliye thaniyama call krnna epa eka waradi 


    return(
        <div className="background">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="val" onClick={increment}>+</button>
            <button className="val" onClick={reset}>R</button>
            <div className="button-panel">
                <button onClick={()=>changeName("students")}>Students</button>
                <button onClick={()=>changeName("Teachers")}>Teachers</button>
                <button onClick={()=>changeName("Admin")}>Admin</button>
            </div>
            
        </div>
    )
}