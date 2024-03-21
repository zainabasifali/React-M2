import {useState} from "react";
import LocalStorage from "./hooks/uselocalstorage";

function Take_Input (){
    let data2 ='';
    const [data, setData] = useState("Zainab");
    let Set_Input = (element)=>{
        setData(element.target.value)
   }
   data2 = data 
      return(
        <>
          <h3>Enter the user name : </h3>
            <input onChange={Set_Input}></input>
            <LocalStorage data2={data2} />
        </>
      )
     
}

export default Take_Input