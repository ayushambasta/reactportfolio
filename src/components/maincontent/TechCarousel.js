import React, { Component } from 'react';
import CarouselSlider from "react-carousel-slider";

export default class TechCarousel extends Component {
     render() {
      let sliderData = {
        "autoSliding": {
             "items": [
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/html.png?alt=media&token=9cf83a52-d15e-4b10-9602-aae6b3f9d6b6"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/css%20(2).png?alt=media&token=a095d732-bef0-4c8e-b5e2-31538540bf7c"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/js.png?alt=media&token=f1cc91b1-f834-4e0d-9711-ef42cbb93289"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/node.png?alt=media&token=af1d4e5c-fbef-43ac-ae92-0d26360d3c05"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/react.png?alt=media&token=233aa0ae-1e4f-4f99-b277-c4d9af4484d9"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/wordpress.png?alt=media&token=4266bede-c809-4959-9fe4-b983ad1a86f0"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/angular2.png?alt=media&token=7a6a2fd4-a535-451a-8685-4722a8029f44"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/c%23.png?alt=media&token=7cda87e2-6cd7-4830-806a-085958233042"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/sql.png?alt=media&token=467c4e25-2a56-4de5-a2f0-4b4d167bceff"
                 },
                 {
                     "imgSrc": "https://firebasestorage.googleapis.com/v0/b/practicedb-49e9f.appspot.com/o/mdb.png?alt=media&token=596f9be9-9bb9-4cbd-a7cd-3f615f8eb017"
                 }
             ]
         }
     }            
      let manner = {
          autoSliding: {interval: "3s"},
          circular: true,
          duration: "2s"
      };
      
      let accEleSetting;

      let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
      if (mobileRegx.test(navigator.userAgent)) {
          accEleSetting.button = false;
      }

let accEle = {
  dots: false
}

      let buttonSetting = {
          placeOn: "middle-inside",
          hoverEvent: true,
          style: {
              left: {
                  height: "50px",
                  width: "50px",
                  color: "#929393",
                  background: "rgba(225, 228, 232, 0.8)",
                  borderRadius: "50%"
              },
              right: {
                  height: "50px",
                  width: "50px",
                  color: "#929393",
                  background: "rgba(225, 228, 232, 0.8)",
                  borderRadius: "50%"
              }
          }
      };

let carouselSetting = {
  height: "198px",
  width: "100%"
}

let itemStyle = {
height: "80%",
minWidth: "80px"
}

      return <CarouselSlider slideItems = {sliderData.autoSliding.items}  
          manner = {manner} 
          buttonSetting = {buttonSetting}
          sliderBoxStyle = {carouselSetting}
          itemsStyle = {itemStyle}
          accEle = {accEle} />;

  }
}
