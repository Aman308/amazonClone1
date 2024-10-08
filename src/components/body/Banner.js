import React from 'react'
import "../Banner.css"
import Carousel from "react-material-ui-carousel";
const data = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9ad930c617c2305e.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/19371d44541a02ab.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ec854ad3a187994e.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/99d99dfd23118bed.jpeg?q=20"
]

export default function Imageslider() {
  return (
    <>
        <Carousel
            className="carousel"
            autoplay={true}
            animation="slide"
            indicators={false}
            navButtonAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 0,
                    MarginTop: "-22px",
                    height: "100px",
                }
            }}>

            {
                data.map((imeg, i) => {
                    return (
                        <>
                            <img  style={{width: '100%'}} src={imeg} key={i} className="banner_img" alt='Img' />
                        </>
                    )
                })
            }
   
    </Carousel>


    </>
)
}


