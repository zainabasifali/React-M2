import React from "react";
import { Link } from "react-router-dom";

let list = [
  {
    name: "Question 1",
    link: "/",
  },
  {
    name: "Question 2",
    link: "/functionalprop",
  },
  {
    name: "Question 3",
    link: "/counter",
  },
  {
    name: "Question 4",
    link: "/fetch",
  },
  {
    name: "Question 5",
    link: "/input",
  }
];

let List = () => {
  return (
    <>
      {list.map((element, i) => (
        <li key={i}><Link to={element.link}>{element.name}</Link></li>
      ))}
    </>
  );
};

export default List;