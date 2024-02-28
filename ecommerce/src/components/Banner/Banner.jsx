
import "./Banner.css";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


const Banner = () => {

    return(
        <>
            <div className="banner-container"> 
                <div className="banner-contacto-container">
                    <span className="banner-contacto">
                        <BsInstagram /> fdh.barberia
                    </span>
                    <span className="banner-contacto">
                        <BsWhatsapp /> 3572-533934
                    </span>
                </div>
            </div>
        </>
    )
}

export default Banner;