import React, { useState } from "react";
import { useContext } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Details from '../views/PizzaDetail';

import './Cards.css';
import { MyContext } from '../MyContext'


const Cards = (props) => {
    const { pizza } = props;
    const [openModal, setOpenModal] = useState(false);
    const { pizzas, addToCar, carrito } = useContext(MyContext);
    let priceFormatted = null;

    const handleModalOpen = () => {
        setOpenModal(true);
    }
    const handleModalClose = () => {
        setOpenModal(false);
    }
    const handleAddToCar = (id) => {
        addToCar(id);
        console.log(carrito);
    }
    const generateKey = (pizza) => {
        const pre = pizza.name;
        return `${pre}_${new Date().getTime()}`;
    }
    return (
        <Card sx={{ maxWidth: '10rem' }} className='card' >
            <CardMedia
                component="img"
                alt={pizza.name}
                height="200"
                image={pizza.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {pizza.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <ul key={(() => generateKey(pizza))}>
                        {pizza.ingredients?.map(ingredient => (
                            <li key={(() => generateKey(pizza))}>{ingredient}</li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" className="cardButton" onClick={handleModalOpen}>Ver más 🔎</Button>
                <Button size="medium" className="cardButton" onClick={() => handleAddToCar(pizza.id)} >Añadir 💙</Button>
            </CardActions>
            <Details openModal={openModal} pizza={pizza} handleModalClose={handleModalClose} handleAddToCar={handleAddToCar} />
        </Card>
    )
}


export default Cards;