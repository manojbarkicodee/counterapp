import React,{ useState,Fragment } from "react";
let Counter=(Props)=>{
    // let count=0
    // hooks use usestate
const [count,setCount]=useState(Props.initialvalue)
    // const Incrementcount=()=>{
    //    setCount(count+1)
    //     console.log(count)
    // }
return(
    <Fragment>

        <h1>Counter:<span  className={count%2==0 ?"green":"red"}>{count}</span></h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{
            if(count!==0){
                setCount(count-1)  
            }
            
            }}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
    </Fragment>
)
}
export default Counter