import {auth} from '../../../config/fb-conf';
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from './register.module.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

let Form = ()=>{
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const register = async()=>{
      try {
        await createUserWithEmailAndPassword(auth, Email, Password);
        navigate('/login');
        setEmail("");
        setPassword("");
      } 
      catch (error) {
        const errorCode = error.code;
        let errorMessage;
  
        switch (errorCode) {
          case 'auth/weak-password':
            errorMessage = "Password is too weak. Please choose a stronger password.";
            break;
          case 'auth/email-already-in-use':
            errorMessage = "The email address is already in use by another account.";
            break;
          case 'auth/invalid-email':
            errorMessage = "Please enter a valid email address.";
            break;
          default:
            errorMessage = "An error occurred during registration. Please try again.";
        }
  
        setErrorMessage(errorMessage);
      }
    }

    return(
        <>
        <h1>Please SignIn:</h1>
        <label>Email: </label><br/>
        <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <label>Password: </label><br/>
        <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <button onClick={register}>Submit</button>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} 
        </>
    )
}
export default Form;