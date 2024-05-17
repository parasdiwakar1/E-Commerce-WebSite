import React, { useContext, useState } from 'react'
import { Contest } from './card';

function Nav(props) {
    const { card_length } = useContext(Contest)
    // console.log(card_length)
    const [btnadd, setBtnadd] = useState(true)
    props.setCondition(btnadd);
    const handlerBtn = () => {
        setBtnadd(!btnadd);
    }
    return (
        <div className='nevbox'>
            <h1 className='h-nav'>Shopping </h1>
            <button onClick={handlerBtn} className='add_btn'>Add {" "}({card_length})</button>
        </div>
    )
}

export default Nav