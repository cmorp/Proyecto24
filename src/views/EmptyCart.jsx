import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";

import './EmptyCart.css';


const EmptyCart = () => {
    return (
        <>
            <div className="emptyCart">
                <h1>¡No has añadido ninguna pizza a tu carro! </h1>
            </div>
            <NavLink to='/' style={{ display: 'flex', justifyContent: 'center', marginBottom: '15rem' }}>
                <Button variant="contained" size="large" color="error" >Volver al menú</Button>
            </NavLink>
        </>
    )
}


export default EmptyCart;