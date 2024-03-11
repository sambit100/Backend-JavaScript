
import { useEffect, useState } from "react"
import axios from "axios";
export function App() {
const [jokes,setJoke]= useState([]);



     useEffect(()=>{
       axios.get('/api/jokes')
       .then((response)=>{
         setJoke(response.data)
         })

         .catch((error)=>{
          console.log("error from the axios")
         })
      },[])
  
  return (
    <>
    <h1>list of jokes </h1>
    {
      jokes.map((joke,index)=>(
        <div>
           <h2> {joke.index}</h2>
           <h3>{joke.question}</h3>
           <h5>{joke.answer}</h5>
        </div>
        
      )
    )}
    
    
      
    </>
  )
}
