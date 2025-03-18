import React from "react";
import "../Input/Input.scss"
import { IInput } from "../../models/IInput";

const Input: React.FC<IInput> = ({type}) => {
    return(
        <input className="input-content" type={
            type === "email" ? "email" : "text"
            } 
            placeholder={
                type === "email" ? "Digite seu e-mail" : "Digite seu nome" 
            } required/>
    )
}

export default Input