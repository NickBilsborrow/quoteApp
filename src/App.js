import './App.css';
import {useState} from "react"

const App = () => {
  const [data,setdata]= useState("");

  const handleFetch = async() =>{
    const response = await fetch( "https://tronalddump.io/random/quote");
    const data = await response.json();
    setdata(data);
  };

  return(
  <div>
    <h1>Donolad trump quote machine</h1>
    <p>{data.value}</p>
    <button onClick={handleFetch}>Click</button>
  </div> 
  )
}

export default App;
