import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import logo from '../assets/img/logo.png';
import './Navbar.css';
import { MyContext } from '../MyContext'


const Navbar = () => {
    const { total } = useContext(MyContext)
    return (
        <>
            <Grid container spacing={1} display="flex" justifyContent="space-evenly" alignItems="center" marginBottom="50px">
                <Grid item s={12} md={6} className='logo'>
                <NavLink to='/'>
                    <img src={logo} alt="logo" />
                    </NavLink>
                </Grid>
                <Grid item s={12} md={2}>
                    <NavLink to='/Carrito'>
                        <Button variant="contained" size="large" color="error" startIcon={<ShoppingCart />}>{total} Pizzas</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </>
    )
}


export default Navbar;