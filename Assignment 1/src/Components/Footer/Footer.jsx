import styles from "./Footer.module.css"
let Footer = () => {
    return(
        <div className={styles.Footer}>
        <h3>Like what you see??</h3>
        <p>We are eager to know your feedback <br></br>Be quick and Get some complements</p>
        <p>abc@gmail.com <br></br> 04256789584763</p>
        <a href="https://www.instagram.com/?hl=en"><img src="/instagram.png" alt="not found" height="30px" width="30px"/></a>  
        <a href="https://www.facebook.com/"><img src="/facebook.jpg" alt="not found" height="30px" width="30px"/></a>     
        <a href="https://www.bing.com/search?q=twiiter&form=ANNTH1&refig=ccd51569b09743bab810e1890c866ed4&pc=HCTS"><img src="/twitter.png" alt="not found" height="30px" width="30px"/></a>  
         </div>
    );
}
export default Footer;