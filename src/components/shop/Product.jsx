import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
function Header(stated) {
    // console.log(cart.length)
    // const user = useContext(usercontext);
    let abc = 2;
    return (
        <div>
            <header>
                <div className="flheaDer">
                    <div className="heading">
                        <h1>Flipkart</h1>
                        <p>Explore Plus</p>
                        
                    </div>
                    <div className="subheading">
                        <button>
                        
                          <Link to="/about">  <img src="./shopping-cart-icon-2.png" alt="" />{stated.success}</Link>
                        </button>

                    </div>
                </div>
                <ul>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="Grocery" /><p>Grocery</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="Mobiles" /><p>Mobiles</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="Fashion" /><p>Fashion</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="Electronics" /><p>Electronics</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="Home" /><p>Home</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="Appliances" /><p>Appliances</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="Travel" /><p>Travel</p></li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Top Offers" /><p>Top Offers</p> </li>
                    <li><img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="Beauty, Toys & More" /><p>Beauty, Toys & More</p></li>
                    <li><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="Two Wheelers" /><p>Two Wheelers</p></li>
                </ul>
            </header>
        </div>
    )
}
export {Header};