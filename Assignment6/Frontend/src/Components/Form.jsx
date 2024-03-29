import { useState } from "react";
let Form = ()=>{
    const [formvalues, setformvalues] = useState({name:'',age:'',password:''});

    const handleChange = (event) => {
        setformvalues(prevValues => ({...prevValues,[event.target.name]: event.target.value }));
      };

      let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formvalues)
        setformvalues({name:'',age:'',password:''})
        fetch('http://localhost:9000/form', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({formvalues})
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
    }
    return(
        <>
        <h1>Form Data:</h1>
        <label>Name: </label><br/>
        <input type="text" name="name" value={formvalues.name} onChange={handleChange}/><br/>
        <label>Age: </label><br/>
        <input type="number" name="age" value={formvalues.age} onChange={handleChange}/><br/>
        <label>Password: </label><br/>
        <input type="password" name="password" value={formvalues.password} onChange={handleChange}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Form;