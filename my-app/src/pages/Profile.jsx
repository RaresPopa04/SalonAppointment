import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Profile.css";
import Footer from "../components/Footer";
import axios from "axios";

const Profile = () => {

    const [reservations, setReservations] = useState([]);
    const getReservations = () => {

        axios.get('/appointment/all')
        .then((res) => {
            console.log(res);
            setReservations(res.data);
        }
        )
        .catch((error) => {
            console.log(error);
        });

    };

    const logout = () => {
        axios.get('/user/logout')
        .then((res) => {
            console.log(res);
            window.location.href = "/";
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const extractDate = (date) => {
        return date.substring(0, 10);
    }

    useEffect(() => {  
        getReservations();
    }, []);
    return (
        <div>
            <Navbar/>
            <div className="reservations">
                <div className="title">
                    <h1>Rezervări</h1>
                </div>
                <div className="list">
                    {
                        reservations.map((reservation) => {
                            return (
                                <div className="reservation">
                                    <div className="grid">
                                        <div>
                                            <div> Număr rezervare </div>
                                            <div> {reservation._id} </div>

                                        </div>
                                        <div>
                                            <div> Data </div>
                                            <div> {extractDate(reservation.date)} </div>

                                        </div>
                                        <div>
                                            <div> Oră </div>
                                            <div> {reservation.time} </div>

                                        </div>
                                        <div>
                                            <div> Stare </div>
                                            <div> {reservation.status} </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    
                    
                </div>
            </div>
            <div className="logout">
                <button onClick={logout}>Deconectare</button>
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;