import React from "react";
import TecnologiaIMG from "../../assets/images/tecnologia.png"
import SupermercadoIMG from "../../assets/images/supermercados.png"
import BebidasIMG from "../../assets/images/whiskey.png"
import FeramentasIMG from "../../assets/images/ferramentas.png"
import SaudeIMG from "../../assets/images/saude.png"
import EsporteIMG from "../../assets/images/corrida.png"
import ModaIMG from "../../assets/images/moda.png"

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
                        <a className="category-item-container" key={index}>
                                <div className="category-card">
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