import React from "react";
import { Link } from "react-router-dom";

let list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
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
