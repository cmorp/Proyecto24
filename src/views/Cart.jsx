import React, { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container, height } from '@mui/system';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';

import './Cart.css';
import { MyContext } from '../MyContext'
import EmptyCart from './EmptyCart'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#db2529' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Cart = () => {
    const { pizzas, carrito, pizzasSubTotal, PizzasTotal, total, totalCart, priceToCurrency, removeFromCart, addToCar, cleanCart } = useContext(MyContext);


    const findPizza = (id) => {
        const pizzaCarrito = pizzas.find(pizza => pizza.id === id);
        return pizzaCarrito;

    }
    return (
        <Container>
            {carrito.length === 0 ? (
                <EmptyCart />) : (
                <>
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={2}>
                            {
                                carrito?.map((pizza) => {
                                    const pizzaFinded = findPizza(pizza.id);
                                    const subtotal = pizzasSubTotal(pizza.id);

                                    return (<Item key={pizza.id} pizzaFinded={pizzaFinded}>
                                        <div className="pizza">
                                            <img src={pizzaFinded.img} alt="pizza" className='pizzaImg' />
                                            <p id='pizzaName'>{pizzaFinded.name}</p>
                                            <p>
                                                <IconButton aria-label='indeterminatecheckboxicon' color='warning' onClick={() => removeFromCart
                                                    (pizza.id)}>
                                                    <IndeterminateCheckBoxIcon />
                                                </IconButton>
                                                {pizza.quantity}
                                                <IconButton aria-label='addboxicon' color='warning' onClick={() => addToCar(pizza.id)}>
                                                    <AddBoxIcon />
                                                </IconButton>
                                            </p>
                                            <p>${priceToCurrency(pizza.price)}</p>
                                            <p>${priceToCurrency(subtotal)}</p>
                                        </div>
                                    </Item>);
                                })}

                            <Item>
                                <p id='cantidad'>Cantidad de Pizzas: {total}</p>
                                <p id='total'>Valor Total: ${priceToCurrency(totalCart())}</p>
                            </Item>

                        </Stack>
                    </Box>
                    <Box className='buttonsCart'>
                        <Button variant="contained" size="medium" color="error"  onClick={() => cleanCart()} >Vaciar carro</Button>
                        <Button variant="contained" size="medium" color="error" >Pagar</Button>
                    </Box>
                </>
            )}
        </Container>
    )
}


export default Cart;