import './shoppingcart.css';
import { memo } from 'react';
import React, { useState, useEffect, useContext, createContext } from "react"
import { Header } from './shop/Product';
// import {Abn} from './shop';
const usercontext = createContext();
function Shop(props) {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    // let a = cart.length;
    let a =cart.length;
    // props.getdata(cart)
    // console.log(a);


    useEffect(() => {
        fetch('./jsn/cartapi.json')
            .then(response => response.json())
            .then(data => setproducts(data))
    }, [])
    // console.log(products) 
    // let sum = cart.reduce(function(prev, current) {
    //     return prev +=cart.price
    //   }, 0);
    //   console.log(sum)
    const AddTocart = (product) => {
        // console.log(cart)
        setCart([...cart, { ...product }])
    }
    const Removefromcart = (productToremove) => {
        setCart(cart.filter((product) => product !== productToremove))
    }
    const RenderProducts = () =>
        <div className="product-container">
            {products.map((product, index) => (
                <div key={product.title} className="aa">
                    <img src={product.images} alt={product.title} />
                    <h2>{product.title}</h2>
                    <h3>Rs.{product.price}/-</h3>
                    <button onClick={() => AddTocart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    const RenderCart = () => <div className="cart-container">
        {/* <button>Go to Cart({cart.length})</button> */}
        <button>Cart value:Rs.{cart.reduce((total, item) => total + (item.price), 0)}/-</button>
        <div className="product-container2">
            {cart.map((product, index) => (
                <div key={product.id} className="cc">
                    <img src={product.images} alt={product.title} />
                    <h4>{product.title}</h4>
                    <h3>Rs.{product.price}/-</h3>
                    <button onClick={() => Removefromcart(product)}>Remove</button>
                </div>
            ))}
        </div>
    </div>

    return (
        <>
        <div className='header'>
            <Header success={a} />

        </div>
        <div className="shop-container">
            {/* <usercontext.Provider value={a}> */}
            {/* </usercontext.Provider> */}
            {RenderProducts()}
            {RenderCart()}


        </div>
        </>
    )
}



export {Shop};