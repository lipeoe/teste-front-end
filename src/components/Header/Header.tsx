import Navbar from "./Navbar";
import React from "react";
import ShieldCheck from "../../assets/svg/ShieldCheck.svg"
import Truck from "../../assets/svg/Truck.svg"
import CreditCard from "../../assets/svg/CreditCard.svg"
import "../../styles/HeaderStyles/HeaderStyle.scss"

const Header: React.FC = () =>{


    return(
        <header>
            <div className="header-content-span">
                    
                <div className="header-spans">
                    <img src={ShieldCheck}/>
                    <p className="span-text"> Compra <span className="span-contrast">100% segura</span></p>
                </div>
                <div className="header-spans">
                    <img src={Truck}/>
                    <p className="span-text"><span className="span-contrast">Frete grátis </span>acima de  R$ 200</p>
                </div>
                <div className="header-spans">
                    <img src={CreditCard}/>
                    <p className="span-text"><span className="span-contrast">Parcele </span>suas compras</p>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header
