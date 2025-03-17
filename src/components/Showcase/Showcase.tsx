import React, {useEffect, useState, useRef} from "react";
import "../Showcase/Showcase.scss"
import { API_URL } from "../../services/ApiEconverse";
import Card from "../ProductCard/Card";
import Modal from "../ProductModal/Modal";
import { IProduct } from "../../assets/models/IProduct";

import prevBtn from "../../assets/svg/prev.svg"
import nextBtn from "../../assets/svg/next.svg"


const Showcase: React.FC = () =>{
    const [products, setProducts] = useState<IProduct[]>([])
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const visibleCards = 4
    
    useEffect(() =>{
        const fetchProducts = async () => {
            try{
                const response = await fetch(API_URL)
                if(!response.ok){
                    throw new Error(`${response.status} - ${response.statusText}`)
                }
                const data = await response.json()
                if(data && data.products){
                    setProducts(data.products)
                }
            }catch(error){
                console.error("Erro: ", error)
            }
        }
        fetchProducts()
    }, [])


    const nextSlide = () =>{
        if(currentIndex < products.length - visibleCards){
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }
    }

    const prevSlide = () => {
        if(currentIndex > 0){
            setCurrentIndex((prevIndex) => (prevIndex -1))
        }
    }

    const handleCardClick = (product: IProduct) =>{
        setSelectedProduct(product)
    }

    const closeModal = () => {
        setSelectedProduct(null)
    }

    return(

        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-prevBtn" onClick={prevSlide} disabled={currentIndex === 0}><img src={prevBtn}/></button>
                <div className="carousel">
                    <div className="cards"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`}}>
                        {products.map((product, index) => (
                            <Card
                            key={index}
                            product={product}
                            onClick={(prod: IProduct) => setSelectedProduct(prod)}
                            />
                        ))}
                    </div>
                </div>
                <button className="carousel-nextBtn" onClick={nextSlide}
                        disabled={currentIndex >= products.length - visibleCards}><img src={nextBtn}/></button>
            </div>
            {selectedProduct && (
                <Modal product = {selectedProduct} onClose={closeModal}/>
            )}
        </div>

    )
}

export default Showcase