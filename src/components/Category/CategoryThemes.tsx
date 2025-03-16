import React from "react";
import TecnologiaIMG from "../../assets/svg/Tecnologia.svg"
import SupermercadoIMG from "../../assets/svg/Supermercado.svg"
import BebidasIMG from "../../assets/svg/Bebidas.svg"
import FeramentasIMG from "../../assets/svg/Ferramentas.svg"
import SaudeIMG from "../../assets/svg/Saude.svg"
import EsporteIMG from "../../assets/svg/Corrida.svg"
import ModaIMG from "../../assets/svg/Moda.svg"

import "../Category/CategoryThemes.scss"

const CategoryThemes: React.FC = () =>{

    const categories = [
        {Title: "Tecnologia", Image: TecnologiaIMG},
        {Title: "Supermercado", Image: SupermercadoIMG},
        {Title: "Bebidas", Image: BebidasIMG},
        {Title: "Ferramentas", Image: FeramentasIMG},
        {Title: "Saúde", Image: SaudeIMG},
        {Title: "Esportes e Fitness", Image: EsporteIMG},
        {Title: "Moda", Image: ModaIMG}
    ]

    return(
        <div>
            <div className="category-container">
                <div className="category-content">
                    {categories.map((item, index) => (
                        <a className="category-item-container">
                                <div className="category-card" key={index}>
                                    <img className="category-image" src={item.Image} alt="" />
                                </div>
                            <div>
                                <p className="category-title">{item.Title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryThemes