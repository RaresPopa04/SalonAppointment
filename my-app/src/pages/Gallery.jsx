import React from "react";
import "../css/Gallery.css";
const Gallery = () => {
    return (
    <div>
        <h1>Galerie</h1>

        <div className="gallery">
            <div className="gallery-item">
                <img src="./g1.jpg" alt="gallery-item" />
            </div>
            <div className="gallery-item">
                <img src="./g2.jpg" alt="gallery-item" />
            </div>
            <div className="gallery-item">
                <img src="./g3.jpg" alt="gallery-item" />
            </div>
            <div className="gallery-item">
                <img src="./g4.jpg" alt="gallery-item" />
            </div>
            <div className="gallery-item">
                <img src="./g5.jpg" alt="gallery-item" />
            </div>
            <div className="gallery-item">
                <img src="./g6.jpg" alt="gallery-item" />
            </div>
            <div className="gallery-item">
                <img src="./g7.jpg" alt="gallery-item" />

            </div>
            <div className="gallery-item">
                <img src="./g8.jpg" alt="gallery-item" />

            </div>
            <div className="gallery-item">
                <img src="./g9.jpg" alt="gallery-item" />

            </div>
            <div className="gallery-item">
                <img src="./fg.jpg" alt="gallery-item" />

            </div>
        </div>
    </div>
    );
};

export default Gallery;