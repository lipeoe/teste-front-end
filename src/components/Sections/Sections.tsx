import React from "react";
import "../Sections/Sections.scss"

const SectionTitle: React.FC = () =>{
    return(
        <div className="section-title-container">
            <div className="divisor"></div>
            <h1 className="title-section">Produtos relacionados</h1>
            <div className="divisor"></div>
        </div>
    )
}

export default SectionTitle