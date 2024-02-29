
import "./Banner.css";
import insta from "./assets/instagram.png";
import whats from "./assets/whatsapp.png";


const Banner = () => {

    return(
        <>
            <div className="banner-container"> 
                <div className="banner-contacto-container">
                    <span className="banner-contacto">
                        <img src={insta} alt="" /> fdh.barberia
                    </span>
                    <span className="banner-contacto">
                        <img src={whats} alt="" /> 3572-533934
                    </span>
                </div>
            </div>
        </>
    )
}

export default Banner;