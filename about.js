import React from "react";
import "./index.css"

function About() {
    return(
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
           
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">hello visitors i'm <large>Nikita Murmure</large>. professional<large>front-end developer</large>.i'm working with my projects.which include HTML,CSS,JAVASCRIPT,REACTJS.</p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">You can contact me using below links</p></div>
                </div>
                
            </div>
        </section>
    )
}
export default About