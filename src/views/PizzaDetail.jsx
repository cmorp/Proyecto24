import React from 'react';
import { useEffect, useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import ShoppingCart from '@mui/icons-material/ShoppingCart';

import { MyContext } from '../MyContext'
import './PizzaDetail.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white' ,
    border: '2px solid #000',
    p: 5
};

export default function BasicModal(props) {
    const { openModal, handleModalClose, pizza, handleAddToCar } = props;
    const [open, setOpen] = useState(false);
    const [formattedPrice, setFormattedPrice] = useState("");
    const { pizzas, priceToCurrency } = useContext(MyContext);


    const ModalOpenClose = () => {
        setOpen(openModal);
    }
    const handleClose = () => {
        setOpen(false);
        handleModalClose();
    }
    useEffect(() => {
        ModalOpenClose();
        let priceFormatted = priceToCurrency(pizza.price);
        setFormattedPrice(priceFormatted);
    }, [openModal]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='boxModal'>
                    <Typography id="modal-modal-title" variant="h4" component="h2" fontWeight='bold' color='red'>
                        {pizza.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="info">
                            <img src={pizza.img} alt="pizza" />
                            <div className="texto">
                                <p>{pizza.desc}</p>
                                <ul className='ingredients'>
                                    <p>Ingredientes:</p>
                                    {pizza.ingredients?.map(ingredient => (
                                        <li>{ingredient}</li>
                                    ))}
                                </ul>
                                <h2>Precio:$ {formattedPrice}</h2>
                            </div>
                        </div>
                    </Typography>
                    <div className="buttons">
                        <Button onClick={handleClose} className='cardButton'>Cerrar</Button>
                        <Button onClick={() => handleAddToCar(pizza.id)} className='cardButtonInverted' startIcon={<ShoppingCart />}>Añadir</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}