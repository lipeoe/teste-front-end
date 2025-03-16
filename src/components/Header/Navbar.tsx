import React from "react";
import logo from "../../assets/svg/logo.svg"
import Box from "../../assets/svg/Box.svg"
import Fav from "../../assets/svg/Heart.svg"
import User from "../../assets/svg/UserCircle.svg"
import Cart from "../../assets/svg/ShoppingCart.svg"
import SearchIcon from "../../assets/svg/SearchIcon.svg"
import Crown from "../../assets/svg/CrownSimple.svg"
import "../../styles/HeaderStyles/NavbarStyle.scss"




const Navbar: React.FC = () =>{

    const imagesGroup = [Box, Fav, User, Cart]
    const categories = ["Todas categorias", "Supermercado", "Livros", "Moda", "Lançamentos", "Ofertas do dia", "Assinatura"]

    return(
        <nav>       
            <div className="nav-container"> 
                <div className="line-divisor"></div>
                <div className="nav-content-container">
                    <img className="nav-logo" src={logo}/>
                    <div className="search-content">
                        <input type="search" name="" id="search-box" placeholder="O que você está buscando?" />
                        <img className="search-input-icon" src={SearchIcon}/>
                    </div> 
                    <div className="itens">
                    {imagesGroup.map((image, index) => (
                        <img className="itens-image" key={index} src={image} />
                    ))}
                </div> 
                </div>
                <div className="line-divisor"></div>
                <div className="categories-container">
                    <div className="categories-content-container">
                        <div className="nav-categories">
                            {categories.map((item, index) =>(
                                <a className="categories" href="#" key={index}>
                                    {index === categories.length -1 && <img src={Crown}/>}    
                                    {item.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar