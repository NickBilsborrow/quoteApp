import './App.css';
import {useState} from "react"

const App = () => {
  const [data,setdata]= useState("");
  const [error,seterror]= useState({error:false, message:""})

  const handleFetch = async() =>{
    try{
    const response = await fetch( "https://tronalddump.io/random/quote");
    if(response.status !== 200){
      throw new error("oops!");
    }
    const data = await response.json();
    setdata(data);
    }catch (error){
      console.log(error)
      seterror({error:true,message:error.message})
    }
  };

  if(error.error){
    return <h1>and error occured:{error.message}</h1>
  }else{
  return(
  <div>
    <h1>Donolad trump quote machine</h1>
    <p>{data.value}</p>
    <button onClick={handleFetch}>Click</button>
  </div> 
  )
  }
}

export default App;
