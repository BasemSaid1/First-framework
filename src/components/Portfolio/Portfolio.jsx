import React, { useState } from "react";
import style from "./portfolio.module.css";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={style.parentpage}>
        <h1 className="text-center">PORTFOLIO COMPONENT</h1>
        <div className={style.divs}>
          <div className={style.div1}></div>
          <i className={`${style.ii} fa-solid fa-star`}></i>
          <div className={style.div2}></div>
        </div>
        <div className="container mt-3">
          <div className="row gy-3">
            <div className="col-md-4">
              <div
                className={style.card}
                onClick={() => handleImageClick(img1)}
              >
                <img className="w-100 rounded-3" src={img1} alt="port1" />
                <div className={style.child}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={style.card}
                onClick={() => handleImageClick(img2)}
              >
                <img className="w-100 rounded-3" src={img2} alt="port2" />
                <div className={style.child}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={style.card}
                onClick={() => handleImageClick(img3)}
              >
                <img className="w-100 rounded-3" src={img3} alt="port3" />
                <div className={style.child}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={style.card}
                onClick={() => handleImageClick(img1)}
              >
                <img className="w-100 rounded-3" src={img1} alt="port1" />
                <div className={style.child}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={style.card}
                onClick={() => handleImageClick(img2)}
              >
                <img className="w-100 rounded-3" src={img2} alt="port2" />
                <div className={style.child}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={style.card}
                onClick={() => handleImageClick(img3)}
              >
                <img className="w-100 rounded-3" src={img3} alt="port3" />
                <div className={style.child}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={style.modal} onClick={handleCloseModal}>
          <div className={style.modalContent}>
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-100 rounded-3"
            />
          </div>
        </div>
      )}
    </>
  );
}
