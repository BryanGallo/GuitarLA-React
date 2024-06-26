import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart.js";
import "./App.css";

function App() {
    const {
        cart,
        removeCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
        guitarras,
        addtoCart,
        isEmpty,
        cartTotal,
    } = useCart();
    return (
        <>
            <Header
                cart={cart}
                removeCart={removeCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                cleanCart={cleanCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />
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
