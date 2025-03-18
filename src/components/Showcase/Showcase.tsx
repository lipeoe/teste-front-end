import React, {useEffect, useState, useRef} from "react";
import "../Showcase/Showcase.scss"
import { API_URL } from "../../services/ApiEconverse";
import Card from "../ProductCard/Card";
import Modal from "../ProductModal/Modal";
import { IProduct } from "../../models/IProduct";



import prevBtn from "../../assets/svg/prev.svg"
import nextBtn from "../../assets/svg/next.svg"

import { IShowCase } from "../../models/IShowcase";

const Showcase: React.FC<IShowCase> = ({type}) =>{
    const [products, setProducts] = useState<IProduct[]>([])
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const productsTypes = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"]

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

                //Para acessar o json localmente
                try{
                    const localResponse = await fetch('/produtos.json')
                    if(!localResponse.ok){
                        throw new Error(`${localResponse.status} - ${localResponse.statusText}`)
                    }
                    const localData = await localResponse.json()
                    if(localData && localData.products){
                        setProducts(localData.products)
                    }
                }catch(localError){
                    console.error(localError)
                }
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
        <section>
            <div className="section-title-container">
                <div className="divisor"></div>
                <h1 className="title-section">Produtos relacionados</h1>
                <div className="divisor"></div>
            </div>
            {type === "main" &&(
                <div className="products-navigation-container">
                <div className="products-navigation-content">
                    <ul className="list-itens">
                        {productsTypes.map((item, index) =>
                            <li className="itens" key={index}>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            )}
            {type === "secondary" && (
                <div>
                    <h1 className="related-products">Ver todos</h1>
                </div>
            )}

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
        </section>
    )
}

export default Showcase