import React, { useContext } from 'react';
import { Contest } from './card';
import "../App.css";

function AddToCardData() {
    const { data, setData } = useContext(Contest);
    const { datax,cart } = data;

    const handlerRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setData({ ...data, cart: updatedCart });
    };

    return (
        <>
            <div className='main'>
                {cart.map((item) => (
                    <div key={item.id} className='box'>
                        <h1>{item.product}</h1>
                        <h3>{item.description}</h3>
                        <img src={item.Image} alt="" />
                        <h3>{item.price}</h3>
                        <button className='btn' onClick={() => handlerRemove(item.id)}>Remove Card</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AddToCardData;
