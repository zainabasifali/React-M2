import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/fb-conf';
import { useState } from "react";

let Read = ()=>{
    const [document, setDoc] = useState([]);
    let array = []

    const read = async () => {
        
            const snapshot = await getDocs(collection(db, "users"));
            array = snapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().Name,
                age: doc.data().Age,
            }));
            setDoc(array);
    
    };

    read();
    
    return (
        <>
            <h1>User Data</h1>
                {document.map((user) => (
                    <li key={user.id}>
                        {user.id}<br/>
                        {user.name}<br/>
                    </li>
                ))}
        </>
    );
}
export default Read;