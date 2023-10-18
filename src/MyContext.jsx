import React, { useState, useEffect } from "react";
import { createContext } from "react";


const MyContext = createContext({
    pizzas: [],
    carrito: [],
    setCarrito: () => { },
    total: 0,
    priceToCurrency: () => { }
});


const ProvideContext = ({ children }) => {

    const endpoint = ("../public/pizzas.json");
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const getData = async () => {
        const response = await fetch(endpoint);
        const pizzas = await response.json();
        console.log(pizzas);
        setPizzas(pizzas);
    }
    useEffect(() => {
        getData()
    }, []);

    const priceToCurrency = (value) => {
        const priceToStr = value.toLocaleString("en");
        return priceToStr.replace(',', '.');
    }

    const addToCar = (id) => {
        const pizzaFinded = pizzas.find(pizzaOriginal => pizzaOriginal.id === id);
        const pizzaIndex = carrito.findIndex(pizza => pizza.id === pizzaFinded.id);
        const pizzaAdded = {
            id: pizzaFinded.id,
            price: pizzaFinded.price,
            quantity: 1
        };
        if (pizzaIndex !== -1) {
            const carritoUpdated = [...carrito];
            carritoUpdated[pizzaIndex].quantity += 1;
            setCarrito(carritoUpdated);

        } else {
            setCarrito([...carrito, pizzaAdded]);
        }
    }

    const PizzasTotal = () => {
        let total = 0;
        carrito.forEach(pizza => {
            total += pizza.quantity;
        });
        setTotal(total);
    }
    const pizzasSubTotal = (id) => {
        let subtotal = 0;
        const pizzaIndex = carrito.findIndex(pizza => pizza.id === id)
        subtotal = carrito[pizzaIndex].quantity * carrito[pizzaIndex].price
        return subtotal;
    }
    const totalCart = () => {
        let total = 0;
        carrito.forEach(pizza => {
            total += (pizza.quantity * pizza.price);
        });
        return total;
    }



    const removeFromCart = (id) => {
        const pizzaIndex = carrito.findIndex(pizza => pizza.id === id);
        if (pizzaIndex !== -1 && carrito[pizzaIndex].quantity > 1) {
            const carritoUpdated = [...carrito];
            carritoUpdated[pizzaIndex].quantity -= 1;
            setCarrito(carritoUpdated);
        } else if (pizzaIndex !== -1 && carrito[pizzaIndex].quantity === 1) {
            setCarrito(carrito.filter((pizza) => pizza.id !== id))
        }
    }
    const cleanCart = () => {
        setCarrito([]);
    }
    useEffect(() => {
        PizzasTotal();
    }, [carrito])

    const globalState = { pizzas, carrito, setCarrito, total, priceToCurrency, addToCar, PizzasTotal, pizzasSubTotal, totalCart, removeFromCart, cleanCart };

    return (
        <MyContext.Provider value={globalState}>
            {children}
        </MyContext.Provider>
    )

}


export { ProvideContext, MyContext };