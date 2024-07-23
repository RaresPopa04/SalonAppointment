import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../css/Admin.css";

const Admin = () => {
    
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    const getReservations = () => {
        axios.get('/appointment/allAppointments')
            .then((res) => {
                console.log(res);
                setReservations(res.data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
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
            <Navbar />
            <h1>Admin Page</h1>
            {error ? (
                <div className="error">{error.message}</div>
            ) : (
                <div className="appointments">
                    <div className="title">
                        <h1>Rezervari</h1>
                    </div>
                    <div className="list">
                        {reservations.map((reservation) => {
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
                                        <div className="buttons">
                                            <div className="delete">
                                                    <button onClick={() => {
                                                        axios.delete(`/appointment/delete/${reservation._id}`)
                                                            .then((res) => {
                                                                console.log(res);
                                                                getReservations();
                                                            })
                                                            .catch((error) => {
                                                                console.log(error);
                                                            });
                                                    }}>Șterge</button>
                                                </div>

                                            <div className="approve">
                                                <button onClick={() => {
                                                    axios.put(`/appointment/approve/${reservation._id}`)
                                                        .then((res) => {
                                                            console.log(res);
                                                            getReservations();
                                                        })
                                                        .catch((error) => {
                                                            console.log(error);
                                                        });
                                                }}>Aprobă</button>
                                            </div>

                                            <div className="complete">
                                                <button onClick={() => {
                                                    axios.put(`/appointment/complete/${reservation._id}`)
                                                        .then((res) => {
                                                            console.log(res);
                                                            getReservations();
                                                        })
                                                        .catch((error) => {
                                                            console.log(error);
                                                        });
                                                }}>Completă</button>

                                            </div>
                                        </div>
                                        
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
