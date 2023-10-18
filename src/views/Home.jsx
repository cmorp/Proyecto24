import React from "react";
import { useContext } from "react";

import Grid from '@mui/material/Grid';

import Banner from '../components/Banner';
import Cards from '../components/Cards';
import { MyContext } from '../MyContext'


const Home = () => {
    const { pizzas } = useContext(MyContext);

    console.log(pizzas);
    return (
        <>
            <Banner />
            <Grid container justifyContent="center" marginTop="50px" marginBottom="50px" gap= "50px">
                {
                    pizzas?.map(pizza => (
                        <Cards pizza={pizza} />
                    ))
                }
            </Grid>
        </>
    )
}


export default Home;