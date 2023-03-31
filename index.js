import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Navbar from "./navbar.js"
import Model from "./model.js"
import Port from "./portfolio.js"
import About from "./about.js"
import Contact from "./contact.js"
import Footer from "./footer.js"
import Copyright from "./copyright.js"
function Portfolio() {
    return(
        <>
        <Navbar/>
        <Model/>
        <Port/>
        <About/>
        <Contact/>
        <Footer/>
        <Copyright/>

        </>
    )
    
}
ReactDOM.render(<Portfolio />,document.getElementById('page-top'))