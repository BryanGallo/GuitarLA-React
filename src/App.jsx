import { useState, useEffect } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from "./data/db.js";
import "./App.css";

function App() {
    const [guitarras, setGuitarras] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setGuitarras(db);
    }, []);

    function addtoCart(item) {
        //Validando si la guitarra ya esta agregada
        const exist = cart.findIndex((c) => c.id === item.id);
        console.log(exist);
        if (exist === -1) {
            item.quantity = 1;
            setCart([...cart, item]);
            //otra opcion tomando en cuenta ya sabe que hay en el state desde que se lo declara va a estar asociada con el state de cart (aqui prevCart toma el valor de cart )
            // setCart((prevCart)=>[...prevCart,item])
        } else {
            const updateCart = [...cart];
            updateCart[exist].quantity++;
            setCart(updateCart);
        }
        console.log(item.quantity);
    }

    return (
        <>
            <Header cart={cart} />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {guitarras &&
                        guitarras.map((guitarra) => (
                            <Guitar
                                key={guitarra.id}
                                guitarra={guitarra}
                                addtoCart={addtoCart}
                            />
                        ))}
                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">
                        GuitarLA - Todos los derechos Reservados
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
