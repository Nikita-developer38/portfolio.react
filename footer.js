import React from "react";
import "./index.css"

function Footer(){
    return(
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                   
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Nashik
                            <br />
                            pincode-422003
                        </p>
                    </div>
                   
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/nikita-murmure-37706b250"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="mailto: nikitamurmure3835@gmail.com"><i class="fas fa-fw fa-envelope"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="callto: 8788066675"><i class="fas fa-fw fa-phone"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/Nikita-developer38"><i class="fab fa-github"></i></a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            open to work as Freelancer
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer