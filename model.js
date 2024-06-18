import  React  from "react";
import "./index.css"
var myDate= new Date();
var hrs=myDate.getHours();

    var greet;
    if(hrs<12)
    greet='Good Morning';
    else if(hrs>=12 && hrs<=17)
    greet='Good Afternoon';
    else if(hrs>=17 && hrs<=24)
    greet='Good Evening';
    
function Model() {
    return(
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <img class="masthead-avatar mb-5" src="banner.webp" alt="..." />
             
                <h1 class="masthead-heading text-uppercase mb-0">{greet}</h1>
               
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0">Front-end Developer - Web Designer </p>
            </div>
        </header>
    )
    
}
export default Model