import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/MainPage.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import axios from "axios";

const MainPage = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [service, setService] = useState("");

    const [reviewName, setReviewName] = useState("");
    const [reviewRating, setReviewRating] = useState(1);
    const [reviewText, setReviewText] = useState("");

    const [comments, setComments] = useState([{}]);

    useEffect(() => {
        console.log("MainPage");
        axios.get('/user/check')
        .then((res) => {
            setLoggedIn(res.data);
        })
        .catch((error) => {
            console.log(error);
        });

        axios.get('/comment')
        .then((res) => {
            setComments(res.data);
        })
        .catch((error) => {
            console.log(error);
        });


    }, []);

    const handleSubmit = (e) => {  
        e.preventDefault();
        console.log(service)
        const data = {
            name: name,
            email: email,
            phonenumber: phone,
            date: date,
            time: time,
            description: service
        }


        
        axios.post('/appointment/create', data)


        .then((res) => {
            console.log(res);
            alert("Rezervarea a fost efectuata cu succes!");
            setName("");
            setEmail("");
            setPhone("");
            setDate("");
            setTime("");
            setService("");

        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "phone":
                setPhone(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "time":
                setTime(e.target.value);
                break;
            case "service":
                setService(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleChangeReview = (e) => {
        switch(e.target.name){
            case "Rname":
                setReviewName(e.target.value);
                break;
            case "rating":
                setReviewRating(e.target.value);
                break;
            case "review":
                setReviewText(e.target.value);
                break;
            default:
                break;
        }
    }

    const submitReview = (e) => {
        e.preventDefault();
        const data = {
            name: reviewName,
            rating: reviewRating,
            content: reviewText
        }

        axios.post('/comment', data)
        .then((res) => {
            console.log(res);
            alert("Recenzia a fost trimisa cu succes!");

            axios.get('/comment')
            .then((res) => {
                setComments(res.data);

            })
            .catch((error) => {
                console.log(error);
            });


            setReviewName("");
            setReviewRating(1);
            setReviewText("");

        })
        .catch((error) => {
            console.log(error);
        });
    }






    return (
        <div className="container">
            <Navbar homePage = {true} />
            <div className="greetingSection">
                <div className="left">
                    <div className="text-section">
                        <div className="slogan">
                            Let the nails do the talking
                        </div>
                        <div className="author">
                            - Flavia Rusu - nail technician
                        </div>
                        <div className="description">
                            Cele mai bune servicii de manichiura din orasul tau. 
                            Vino si convinge-te singura de calitatea serviciilor noastre.
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to="appointmentSection" smooth={true}><button className="bookNow">Book Now</button></Link>
                        <Link to="#services" smooth={true}><button className="services">Servicii</button></Link>
                    </div>
                </div>
                <div className="right">
                    <div className="coverImg">
                        <img src="./cover.jpg" alt="Cover" />
                    </div>
                </div>
                
                
            
            </div>

            <section id = "#services">
                <div className="servicesSection">
                    <div className="title">
                        Serviciile noaste
                    </div>
                    <div className="servicesList">
                        <div className="service">
                            <div className="photo">
                                <img src="./g6.jpg" alt="Semipermanent" />
                            </div>
                            <div className="title">
                                Manichiură Semipermanentă
                            </div>
                            <div className="price">
                                100 RON
                            </div>
                            
                        </div>
                        <div className="service">
                            <div className="photo">
                                <img src="./g4.jpg" alt="Semipermanent" />
                            </div>
                            <div className="title">
                                Construcție forme de salon 1-4
                            </div>
                            <div className="price">
                                140 RON
                            </div>
                            
                        </div>
                        <div className="service">
                            <div className="photo">
                                <img src="./g9.jpg" alt="Semipermanent" />
                            </div>
                            <div className="title">
                                Construcție 5+
                            </div>
                            <div className="price">
                                150 RON
                            </div>
                            
                        </div>
                        <div className="service">
                            <div className="photo">
                                <img src="./slim.jpg" alt="Semipermanent" />
                            </div>
                            <div className="title">
                                Slim
                            </div>
                            <div className="price">
                                150 RON
                            </div>
                            
                        </div>
                        <div className="service">
                            <div className="photo">
                                <img src="./fg.jpg" alt="Semipermanent" />
                            </div>
                            <div className="title">
                                French Glass 
                            </div>
                            <div className="price">
                                200 RON
                            </div>
                            
                        </div>
                        <div className="service">
                            <div className="photo">
                                <img src="./g1.jpg" alt="Semipermanent" />
                            </div>
                            <div className="title">
                                Întreținere forme de salon/altă parte
                            </div>
                            <div className="price">
                                130/140 RON
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            <section  id = "#about-us">
                <div className="aboutUs">
                    <div className="title">
                        Despre noi
                    </div>
                    <div className="description">
                        Bine te-am găsit! Numele meu este Flavia și ma bucur ca ai ales sa ne cunoaștem! 

                    </div>
                    <div className="container">
                        <div className="left">
                            <div className="photo">
                                <img src="./about.jpg" alt="About" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="description">
                                Drumul meu in industria manichiurii a început in anul 2022, din pura curiozitate transformată in pasiune! Am investit și investesc constant in mine și in cariera mea pentru a-ti putea oferi servicii la cea mai înaltă calitate. Iubesc ceea ce fac și iubesc sa aduc bucuria unei manichiuri impecabile fiecareia dintre voi!
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
            <div className="appointmentSection">
                <div className="title">
                    Programează-te acum
                </div>
                
                    <div className="form-section">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="lastname" >Nume:</label>
                                <input type="text" id="name" name="name"  value={name} onChange={handleChange}/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email"  value={email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefon:</label>
                                <input type="text" id="phone" name="phone"  value={phone} onChange={handleChange}/>
                            </div>
                            <div className="same-row">
                                <div className="form-group">
                                        <label htmlFor="date">Data:</label>
                                        <input type="date" id="date" name="date"  value={date} onChange={handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">Ora:</label>
                                        <input type="time" id="time" name="time"  value={time} onChange={handleChange}/>
                                    </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="service">Serviciu:</label>
                                <select name="service" id="service" value = {service} onChange={handleChange} >
                                    <option value="Manichiură Semipermanentă">Manichiură Semipermanentă</option>
                                    <option value="Construcție forme de salon 1-4">Construcție forme de salon 1-4</option>
                                    <option value="Construcție 5+">Construcție 5+</option>
                                    <option value="Slim">Slim</option>
                                    <option value="French Glass">French Glass</option>
                                    <option value="Întreținere forme de salon">Întreținere forme de salon</option>
                                    <option value="Întreținere altă parte">Întreținere altă parte</option>



                                </select>    
                            </div>
                            <input type="submit" value="Programează-te"/>
                        </form>
                    </div>
               
                
            
                
            </div>
                
            <div className="reviews">
                <div className="title">
                    Recenzii
                </div>
                <div className="reviewList">
                    {
                        comments.map((comment, index) => {
                            return (
                                <div className="review" key={index}>
                                    <div className="description">
                                        <div className="name">
                                            {comment.name}
                                        </div>
                                        <div className="rating">
                                            {
                                                Array(comment.rating).fill().map((_, i) => {
                                                    return <FontAwesomeIcon icon = {faStar} key={i}/>
                                                })


                                            }


                                        </div>
                                        <div className="text">
                                            {comment.content}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                {
                    loggedIn ?
                    <div className="reviewForm" >
                    <div className="title">
                        Lasă-ne o recenzie
                    </div>
                    <div className="form-section">
                        <form action="" style={{width:"500px"}} onSubmit={submitReview}>
                            <div className="form-group">
                                <label htmlFor="Rname" >Nume:</label>
                                <input type="text" id="Rname" name="Rname"  value={reviewName} onChange={handleChangeReview}/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Rating: <span>{reviewRating} <FontAwesomeIcon icon = {faStar} /></span></label>
                                <input type="range" min="1" max="5" step="1" id="rating" start="1" name="rating"  value={reviewRating} onChange={handleChangeReview}/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Recenzie:</label>
                                <textarea name="review" id="review" cols="30" rows="10" value={reviewText} onChange={handleChangeReview}></textarea>
                            </div>
                            <input type="submit" value="Trimite"/>
                        </form>
                    </div>
                </div>
               
                : 
                <div className="noaccount">
                <p>Ai cont? <a href="/login">Logheză-te</a></p>
                </div>
                }
                
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;