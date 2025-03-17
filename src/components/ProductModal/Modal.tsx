import React, { useState } from "react";
import "../ProductModal/Modal.scss"
import Closebtn from "../../assets/svg/Closebtn.svg"

import { IProduct } from "../../models/IProduct";

import MinusBtn from "../../assets/svg/minus.svg"
import PlusBtn from "../../assets/svg/plus.svg"

interface IModal {
    product: IProduct
    onClose: () => void
}

const Modal: React.FC<IModal> = ({product, onClose}) => {
    const [counter, setCounter] = useState(1)

    const incrementCounter = () => {
        setCounter((prev) => prev+1)
    }

    const decrementCounter = () => {
        setCounter((prev) => (prev > 1 ? prev - 1 : prev))
    }


    return(
        <div className="modal-container">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content-container">
                <button className="modal-close" onClick={onClose}><img src={Closebtn} alt="Close" /></button>
                <img src={product.photo} alt={product.productName} />
                <div className="product-infos">
                    <h1 className="product-name">{product.productName}</h1>
                    <h2 className="product-price">R$ {product.price}</h2>
                    <p className="product-description">{product.descriptionShort}</p>
                    <a href="#" className="product-details">Veja mais detalhes do produto</a>

                    <div className="product-buttons">
                        <div className="product-count">
                            <button className="minusBtn" onClick={decrementCounter}><img src={MinusBtn} alt="Minus" /></button>
                            <span className="value">{counter}</span>
                            <button className="plusBtn" onClick={incrementCounter}><img src={PlusBtn} alt="Plus" /></button>
                        </div>
                        <button className="buyBtn">COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal