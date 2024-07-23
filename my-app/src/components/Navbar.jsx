import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-scroll";
import axios from "axios";
const Navbar = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("MainPage");
        axios.get('/user/check')
        .then((res) => {
            setLoggedIn(res.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);

    return (
        <div className="navbar">
            <div className="logo">
                <a href="/"><img src="logo.png" alt="logo" /></a>
            </div>
            <div className="links">
                <a href="/">Acasa</a>
                {
                    props.homePage &&  <Link to="#about-us" smooth={true}><a href="">Despre noi</a></Link>
                    
                }
                {
                    props.homePage && <Link to="#services" smooth={true}><a href="">Servicii</a></Link>
                    
                }
                <a href="/galerie">Galerie</a>
                {
                    props.homePage && <Link to="footer" smooth={true}><a href="">Contact</a></Link>
                    
                }
                
                {
                    loggedIn && <a href="/profil">Profil</a>
                
                }
                {
                    !loggedIn && <a href="/login">Login/Signup</a>
                
                }
            </div>
            {
                    props.homePage && 
                    
                        <Link to="appointmentSection" smooth={true}>
                            
                            <div className="bookBtn">
                                Book now
                            </div>
                        </Link>
                    
            }
            

        </div>
    );
};

export default Navbar;