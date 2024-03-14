import React from 'react';
import List from "../Navbar/nav";
import styles from "./Header.module.css"
let Header = () => {
    return(
        <div className={styles.header}>
         <ul>
             <List/>
         </ul>
        </div>
    );
}
export default Header;