import { useNavigate } from "react-router-dom";
let Home = ()=>{
    const navigate = useNavigate();
    const handleclick = ()=>{
        navigate("/")
    }
    return(
        <>
        <h1>Welcome , Successfully logged in!</h1>
        <button onClick={handleclick}>Logout</button>
        </>
    )
}
export default Home