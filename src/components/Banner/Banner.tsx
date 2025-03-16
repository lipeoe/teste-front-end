import React from "react";
import BannerImg from "../../assets/images/Rectangle 250.png"
import "../Banner/Banner.scss"

const Banner: React.FC = () => {
    return(
        <section>
            <div className="banner-container">
                <div className="banner-content-container">
                    <div className="banner-content">
                        <h1 className="banner-title">Venha conhecer nossas promoções</h1>
                        <h2 className="banner-sub-title"><span className="span-contrast-banner">50% Off </span>nos produtos</h2>
                        <button id="show-products-btn">Ver produto</button>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg}/>
            </div>
        </section>
    )
}

export default Banner