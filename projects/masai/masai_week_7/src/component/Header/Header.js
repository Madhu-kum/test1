import React from 'react';
// import '../../App.css';
import styles from './header.module.css';

export default class Header extends React.Component{
    render() {
  return (
    <div className={styles.bg}>
        
     <img width="150px" height="30px" className={styles.logo_image} src="https://zerodha.com/static/images/logo.svg"></img>

     <a href="#" className={styles.btn}>About</a>
     <a href="#" className={styles.btn}>Products</a>
     <a href="#" className={styles.btn}>Pricing</a>
     <a href="#" className={styles.btn}>Support</a>
     
     <button style={{background:"blue" , width:"80px" ,height:"30px" , borderRadius:"5px"}}>Sign up</button>
     <div class="collapse" id="navbarToggleExternalContent"></div>
    </div>
    
  )
}
}