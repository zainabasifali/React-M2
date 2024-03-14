import React, { useState } from "react";
var i= 0;

function Questionare() {
  const questions = ["Pakistan has good relationships with?", "Pakistan was named by(shortform)?"];
  const answers = ["4", "china", "chaudry rehmat ali"];
  
  const [Question, setQuestion] = useState("How many provinces of Pakistan are there?");
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [marks, setMarks] = useState(null); 

  const Submit = () => {
    const updatedItems = [...items, inputValue];
    setItems(updatedItems); 
    setInputValue(""); 
  
    if (i < questions.length) {
      setQuestion(questions[i]);
      i++;
    }
    else {
      let userMarks = 0;
      for (let j = 0; j < answers.length; j++) {
        if (updatedItems[j] === answers[j]) {
          userMarks++;
        }
      }
      setMarks(userMarks);
    }
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>{Question}</label>
      <br />
      <input type="text" placeholder="ans" value={inputValue} onChange={handleInputChange}
      />
      <button onClick={Submit}>Submit</button>

      {<h2>Your marks are: {marks}/{answers.length}</h2>} 
    </div>
  );
}

export default Questionare;

  