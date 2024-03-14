import React, { useState, useEffect } from "react";

function Questionare() {
  const questions = [
    "Pakistan have how many provinces?",
    "Pakistan has good relationships with?",
    "Pakistan was named by?"
  ];
  const answers = ["4", "china", "chaudry rehmat ali"];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setMarks(null);
    }
  }, [currentQuestionIndex]);

  const handleSubmit = () => {
    const updatedAnswers = [...userAnswers, inputValue];
    setUserAnswers(updatedAnswers);
    setInputValue("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } 
    
    else {
      let userMarks = 0;
      for (let j = 0; j < answers.length; j++) {
        if (updatedAnswers[j] === answers[j]) {
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
      <label>{questions[currentQuestionIndex]}</label>
      <br />
      <input type="text" placeholder="ans" value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleSubmit}>Submit</button>

      {<h2>Your marks are: {marks}/{answers.length}</h2>}
    </div>
  );
}

export default Questionare