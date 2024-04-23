import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/fb-conf';
import { useState, useEffect } from "react";
import { doc, deleteDoc } from "firebase/firestore";

const Delete = () => {
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
    
    const del = async(id)=>{
        console.log(id)
        await deleteDoc(doc(db, "users", id));
    }

    return (
        <>
            <h1>User Data</h1>
                {document.map((user) => (
                    <li key={user.id}>
                        {user.id}<br/>
                        <button onClick={()=>{del(user.id)}}>Delete</button>
                    </li>
                ))}
        </>
    );
};

export default Delete;