import { auth } from '../../../config/fb-conf';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'

let Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const login = async () => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                navigate('/home')
                setEmail("")
                setPassword("")
            })
            .catch((error) => {
                setErrorMessage("Authentication Failed.");
                setEmail("")
                setPassword("")
            });
    }
    return (
        <>
        <h1>Please LogIn:</h1>
        <label>Email: </label><br/>
        <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <label>Password: </label><br/>
        <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <button onClick={login}>Login</button>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} 
        </>   
        )
}

export default Login;