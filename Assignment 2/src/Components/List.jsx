import { useState } from "react";

function InputList() {
  let i = 0;
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState(""); 

  const addItem = () => {
      const newItem = { id: i++ , name: inputValue };
      setItems([...items, newItem]);
      setInputValue(""); 
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter an item" value={inputValue}  onChange={handleInputChange}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputList;
