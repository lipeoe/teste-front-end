import React from "react";
import "../Partners/PartnerSection.scss"
import PartnerImg from "../../assets/images/image 45.png"


const PartnerSection: React.FC = () =>{

    const partners = [
        {name: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", img: PartnerImg},
        {name: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", img: PartnerImg}
    ]

    return(
        <section className="partners-content-container">
            {partners.map((item, index) =>
            <div className="partners-container" key={index}>
                <div className="partner-content">
                    <img className="partner-img" src={item.img}  />
                    <div className="partner-infos">
                        <div className="partners-info-content">
                            <h1 className="partner-title">{item.name}</h1>
                            <p className="partner-description">{item.description}</p>
                            <button className="partner-btn">CONFIRA</button>
                        </div>
                    </div>
                </div>
            </div>
                )}
        </section>
    )
}

export default PartnerSection