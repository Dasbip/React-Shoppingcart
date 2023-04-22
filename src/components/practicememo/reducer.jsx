import React, { useReducer } from "react";
 
let initialstate = 0;
const reduce = (currentstate,action)=>{
        switch (action) {
            case "Increment":
               return currentstate+1;
                case "Decrement":
               return currentstate-1;
            default: return currentstate;
        }
}
 function Reducer(){
    const[count,dispatch] = useReducer(reduce,initialstate)
    return(<>
    The count = {count}
    <div className="reducer">
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        </div>
        </>)
}
export {Reducer};