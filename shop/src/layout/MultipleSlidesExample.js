import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import {Image} from "primereact/image";
import 'react-slideshow-image/dist/styles.css'

class MultipleSlidesExample extends React.Component {
    randomNumber = ()=>{
    return Math.floor(Math.random() * 8) + 1;}
    render() {
        const style = {
            textAlign: 'center',
            background: 'white',
            fontSize: '30px'
        };

        const properties = {
            duration: 3000,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            indicators: true,
        };
        return (
            <div>
                <div>
                    <Slide {...properties}>
                        <div style={style}><Image src={'./images/anh' + this.randomNumber() + '.jpg'} alt="Image Text" width="80%" height="200px"/></div>
                        <div style={style}><Image src={'./images/anh' + this.randomNumber() + '.jpg'} alt="Image Text" width="80%" height="200px"/></div>
                        <div style={style}><Image src={'./images/anh' + this.randomNumber() + '.jpg'} alt="Image Text" width="80%" height="200px"/></div>
                        <div style={style}><Image src={'./images/anh' + this.randomNumber() + '.jpg'} alt="Image Text" width="80%" height="200px"/></div>
                    </Slide>
                </div>
            </div>
        );
    }
};

export default MultipleSlidesExample;