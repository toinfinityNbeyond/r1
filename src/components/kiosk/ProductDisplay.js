import React from 'react';

const ProductDisplay = ({products, addCart}) => {

    const list = products.map( p => <li key ={p.pno} onClick={() => addCart(p) }>{p.pname}---{p.price}</li>)

    return (
        <div>
            <h1>상품목록</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ProductDisplay;