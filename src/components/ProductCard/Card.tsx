import React from "react";
import "../ProductCard/Card.scss"
import { IProduct } from "../../assets/models/IProduct";


interface ICard{
    product: IProduct
    onClick:(product: IProduct) => void
}

const Card: React.FC<ICard>= ({product, onClick}) =>{

    const installmentPrice = product.price/2


    return(
        <div className="card-container">
            <img src={product.photo} alt={product.productName} />
            <div className="item-content">
                <h1 className="item-title">{product.productName}</h1>
                <div className="price-content">
                    <span className="fake-price">R$30,90</span>
                    <p className="product-price">R${product.price}</p>
                    <span className="price-2">ou 2x de R${installmentPrice} sem juros</span>
                </div>
                <span className="delivery-type">Frete grátis</span>
                <button className="card-btn" onClick={() => onClick(product)}>COMPRAR</button>
            </div>
        </div>
    )
}

export default Card
