import { useReducer } from "react"


const counter1 = 0

const reducer = (counter , action) =>{
  switch (action) {
    case"-" : return counter-1;
    case"+" : return counter+1;
  }
  return counter
}


const Counter = () => {
  const [counter , dispatch] = useReducer( reducer , counter1)
  return (
    <div>
      <h1 className="text-center">Counter {counter}</h1>
      <button className="btn" onClick={()=>dispatch("-")}>-</button> 
      <button className="btn" onClick={()=>dispatch("+")} >+</button>
    </div>
  )
}

export default Counter