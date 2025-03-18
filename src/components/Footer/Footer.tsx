import React from "react";
import "../Footer/Footer.scss"
import Input from "../Input/Input";
import Logo from "../../assets/svg/logo.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Facebook from "../../assets/svg/facebook.svg"
import Linkedin from "../../assets/svg/linkedin.svg"

const Footer: React.FC = () =>{ 

    const econverseSocialMedia = [
        {logo: Instagram, link: "#"},
        {logo: Facebook, link: "#"},
        {logo: Linkedin, link: "#"}
    ]

    
    const footerItens = [
        {
        title: "Intitucional",
            item:[
                {title: "Sobre Nós", link: "#"},
                {title: "Movimento", link: "#"}, 
                {title: "Trabalhe conosco", link: "#"}]
        },
        {
            title: "Ajuda",
                item:[
                    {title: "Suporte", link: "#"},
                    {title: "Fale Conosco", link: "#"}, 
                    {title: "Perguntas Frequentes", link: "#"}]
        },
        {
            title: "Termos",
                item:[
                    {title: "Termos e Condições", link: "#"},
                    {title: "Política de Privacidade", link: "#"}, 
                    {title: "Troca e Devolução", link: "#"}]
        }
    ]




    return(
        <footer className="footer-container">
            <div className="footer-content-container">
                <div className="footer-top-content">
                    <div className="newsletter-text">
                        <h1 className="newsletter-main-txt">Inscreva-se na nossa newsletter</h1>
                        <p className="newsletter-secondary-txt">Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                    </div>
                    <form action="#" className="newsletter-form">
                        <div className="inputs">
                            <Input type={"text"}/>
                            <Input type={"email"}/>
                            <button className="btn-form-footer" type="submit">INSCREVER</button>
                        </div>
                        <div className="terms-container">
                            <input type="checkbox" name="check-terms" id="check-terms-box" />
                            <label className="label-footer" htmlFor="check-terms">Aceito os termos e condições</label>
                        </div>
                    </form>
                </div>
                <div className="footer-mid-content-container">
                    <div className="footer-mid-content">
                        <div className="econverse-content">
                            <img className="logo-footer" src={Logo} alt="Econverse" />
                            <p className="footer-logo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="econverse-socialmedia">
                                <ul className="social-media-list" >
                                {econverseSocialMedia.map((item, index) =>
                                    <li key={index} className="social-media-list-item">
                                        <a className="social-media-link" href={item.link}>
                                            <img className="social-media-icon" src={item.logo} alt="" />
                                        </a>
                                    </li>                                
                                )}

                                </ul>
                            </div>
                        </div>
                        <div className="divisor"></div>
                        <div className="econverse-infos">
                            {footerItens.map((footer) =>
                            <div key={footer.title} className="econverse-info-content">
                                <h3 className="item-title-footer">{footer.title}</h3>
                                <ul className="econverse-itens-info">
                                    {footer.item.map((item, index) =>
                                    <li key={index} className="econverse-itens-footer">
                                        <a className="econverse-item-text" href={item.link}>{item.title}</a>
                                    </li>
                                    )}
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-content">
                    <p className="footer-copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer