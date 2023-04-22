import React from "react";
import { useState } from "react";
import Todos from './usmemo'
function Fakeapp(){
const[count,setcount] = useState(0);
const increament = ()=>{
setcount((c)=>
    c + 1
    )}
return(
    <>
    <Todos/>
    <div className="test">
    count:{count}
    <button onClick={increament}>+</button>
    </div>
    </>
)
}


function Fakeapp2(){
    const [rout, Setrout] = useState(0);
    console.log(rout)
    const Increament = ()=>{
        Setrout(rout+1)
    }
    const Decreament = ()=>{
        Setrout(rout-1)
    }
    return(
        <>
        <h1>my number :{rout}</h1>
        <button onClick={()=>Increament(rout)}>PLUS</button>
        <button onClick={()=>Decreament(rout)}>MINUS</button>
        </>
    )
}

export {Fakeapp,Fakeapp2};