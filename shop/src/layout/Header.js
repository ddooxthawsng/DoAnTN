import React from "react";
import {Image} from "primereact/image";

class Header extends React.Component{
    randomNumber = ()=>{
        return Math.floor(Math.random() * 2) + 1;
    }

    render() {
        let numberR = this.randomNumber();
        let urlImage = './images/home'+numberR+'.jpg';
        return(
            <header>
                    <div class="text-center text-white" >
                        <Image src={urlImage} alt="Image Text" width="100%" height="800px"/>
                    </div>
            </header>
        )
    }
}
export default Header