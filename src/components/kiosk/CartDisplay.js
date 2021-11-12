import React from 'react';

const CartDisplay = ({cart}) => {

    const list = cart.map( (item, idx) => <li key={idx}>{item.pno} - {item.pname} - {item.price}</li>)

    return (
        <div>
            <h1>장바구니</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default CartDisplay;