import React from "react";
import "../Branding/BrandingNavigation.scss"
import Econverse from "../../assets/svg/logo.svg"

const BrandingNavigation: React.FC = () =>{
    const brandings = [Econverse, Econverse, Econverse, Econverse, Econverse]
    return(
        <section className="branding-container">
            <h1 className="branding-section-title">Navegar por marcas</h1>
            <div className="branding-content">
                <ul className="branding-list">
                    {brandings.map((item, index) =>
                        <li className="branding-item" key={index}>
                            <a href="#">
                                <img className="branding-img" src={item} alt="Econverse" />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default BrandingNavigation