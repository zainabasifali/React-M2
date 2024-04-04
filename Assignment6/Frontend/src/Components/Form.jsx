import { useState } from "react";

let Form = ()=>{
    const [formvalues, setformvalues] = useState({name:'',password:''});

    const login = ()=>{
      const userinfo = JSON.parse(localStorage.getItem('User_Info'));
      const name = userinfo.name;
      const password = userinfo.password;
      if(name == "Mohadisa" && password == "zainab.asif21"){
        window.location.href = '/welcome'
      }
    }

    const handleChange = (event) => {
        setformvalues(prevValues => ({...prevValues,[event.target.name]: event.target.value }));
      };

     async function handleSubmit(event){
        event.preventDefault();
        setformvalues({name:'',password:''})
         let result =  await fetch('http://localhost:9000/form', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formvalues)
          })
          result = await result.json();
          localStorage.setItem("User_Info",JSON.stringify(result));
          login();
    }


    return(
        <>
        <h1>Login Form:</h1>
        <label>Name: </label><br/>
        <input type="text" name="name" value={formvalues.name} onChange={handleChange}/><br/>
        <label>Password: </label><br/>
        <input type="password" name="password" value={formvalues.password} onChange={handleChange}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Form;