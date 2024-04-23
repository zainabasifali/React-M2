import { useNavigate } from "react-router-dom";
import styles from './home.module.css'
let Home = ()=>{
    const navigate = useNavigate();
    const handleclick = ()=>{
        navigate("/login")
    }
    return(
        <>
        <h1>Welcome , Successfully logged in!</h1>
        <button className={styles.logoutbutton} onClick={handleclick}>Logout</button>
        </>
    )
}
export default Home