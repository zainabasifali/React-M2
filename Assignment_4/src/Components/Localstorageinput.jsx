import { useState } from "react";
import useLocalstorage from "./hooks/useLocalStorage";

let TakeInput = ()=> {
    
    const [name, setName] = useState("Zainab")
    const[Value] = useLocalstorage('username', name);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <h3>Enter the user name: </h3>
            <input type="text" onChange={handleInputChange} />
            <h3>The updated user name is: {Value}</h3>
        </>
    );
}

export default TakeInput;