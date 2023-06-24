import React, { useState, useEffect } from 'react';
import ShowCart from './ShowCart';
import axios from 'axios';
import { Link } from "react-router-dom";
const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchSessionData();
        getSessionData();
    }, []);

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        products
            .filter(product => cartItems.includes(product.id))
            .forEach(product => {
                const count = cartItems.filter(itemId => itemId === product.id).length;
                totalPrice += product.price * count;
            });
        return totalPrice;
    };



    const decrease = (id) => {
        const updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex(item => item === id);
        if (itemIndex !== -1) {
            updatedCartItems.splice(itemIndex, 1);
            sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
        }
    };
    const increase = (id) => {
        const updatedCartItems = [...cartItems, id];
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };
    const remove = (id) => {
        const updatedCartItems = cartItems.filter(itemId => itemId !== id);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };



    const fetchSessionData = () => {
        axios
            .get('https://thaihoang-midterm-api.onrender.com/clothes')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const getSessionData = () => {
        const storedItems = sessionStorage.getItem('cartItems');
        if (storedItems) {
            const parsedItems = JSON.parse(storedItems);
            setCartItems(parsedItems);
        }
    };

    const checkOut = () => {
        const cartItems = sessionStorage.getItem('cartItems');
        const cartItemsArray = cartItems ? JSON.parse(cartItems) : [];
        const string = cartItemsArray.join(',');
        console.log(typeof (string));
        console.log(string);
        axios.post('http://localhost:8000/api/checkout', { data: string })
            .then(response => {
                alert(response.data.message);
                sessionStorage.removeItem('cartItems');
                sessionStorage.clear();
                window.location.href = "/shoppingcart-detail";
            })
            .catch(error => {
                console.error(error);
            });
    };



    return (
        <>
            <div className="breacrumb-section">
                <div class="breacrumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="breadcrumb-text product-more">
                                    <Link to="/"><i class="fa fa-home"></i> Home</Link>
                                    <a href="./shop.html">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}

            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th className="p-name">Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Delete</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products
                                            .filter(product => cartItems.includes(product.id))
                                            .map((product, index) => {
                                                const count = cartItems.filter(itemId => itemId === product.id).length;
                                                return (
                                                    <ShowCart
                                                        key={index}
                                                        image={product.image}
                                                        category={product.category.category_name}
                                                        price={product.price}
                                                        quantity={count}
                                                        title={product.title}
                                                        increase={() => increase(product.id)}
                                                        decrease={() => decrease(product.id)}
                                                        remove={() => remove(product.id)}
                                                    />
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 offset-lg-8">
                                    <div className="proceed-checkout">
                                        <ul>
                                            <li class="subtotal">Subtotal <span>${calculateTotalPrice().toFixed(2)}</span></li>
                                            <li class="cart-total">Total <span>${calculateTotalPrice().toFixed(2)}</span></li>
                                        </ul>
                                        <button className="proceed-btn" onClick={() => checkOut()}>PROCEED TO CHECK OUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Shopping Cart Section End */}

            {/* Footer Section Begin */}




            <footer className="footer-section">
                <div className="copyright-reserved">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text">
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </div>
                                <div className="payment-pic">
                                    <img src="img/payment-method.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ShoppingCartPage;