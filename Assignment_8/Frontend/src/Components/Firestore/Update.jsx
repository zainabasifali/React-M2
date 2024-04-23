import { doc, setDoc, collection, getDocs, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../config/fb-conf';
import { useState, useEffect } from "react";

const Update = () => {
  const [document, setDoc] = useState([]);
  const [updatedoc, setupdatedoc] = useState({});

  let array = [];
  const read = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    array = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().Name,
      age: doc.data().Age,
      education: doc.data().Education,
    }));
    setDoc(array);
  };


 read();


  const info = async (id) => {
    const userRef = doc(db, "users", id);
    const userDoc = await getDoc(userRef);
    setupdatedoc({
      id: userDoc.id,
      Name: userDoc.data().Name,
      Age: userDoc.data().Age,
      Education: userDoc.data().Education,
    });
  };

  const update = async () => {
    if (!updatedoc.id) {
      alert("Please select a user to update.");
      return;
    }

    const Ref = doc(db, "users", updatedoc.id);
    await updateDoc(Ref, {
      Name: updatedoc.Name,
      Age: updatedoc.Age,
      Education: updatedoc.Education,
    });
    setupdatedoc({}); 
  };

  return (
    <>
      <h1>User Update</h1>
      {document.map((user) => (
        <li key={user.id}>
          {user.id}
          <br />
          <button onClick={() => info(user.id)}>Update</button>
        </li>
      ))}

      <input
        type="text"
        value={updatedoc.Name || ""}
        onChange={(e) => setupdatedoc({ ...updatedoc, Name: e.target.value })}
      />
      <input
        type="number"
        value={updatedoc.Age || ""}
        onChange={(e) => setupdatedoc({ ...updatedoc, Age: e.target.value })}
      />
      <input
        type="text"
        value={updatedoc.Education || ""}
        onChange={(e) => setupdatedoc({ ...updatedoc, Education: e.target.value })}
      />
      <button onClick={update}>Update</button>
    </>
  );
};

export default Update;
