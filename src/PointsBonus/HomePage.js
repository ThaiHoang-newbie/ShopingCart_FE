import React, { useState, useEffect } from 'react';
import ShowProducts from './ShowProducts';
import CartHover from './CartHover';
import axios from 'axios';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [list, setList] = useState([]);
  
    useEffect(() => {
      fetchSessionData();
    }, []);
  
    useEffect(() => {
      const storedItems = sessionStorage.getItem("cartItems");
      const parsedItems = storedItems ? JSON.parse(storedItems) : [];
      setList(parsedItems);
    }, []);
  


    const fetchSessionData = () => {
      axios
        .get('https://thaihoang-midterm-api.onrender.com/clothes')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          setError(error.message);
        });
    };

  
    const addToCart = (productId) => {
      const cartItems = sessionStorage.getItem('cartItems');
      let items = [];
  
      if (cartItems) {
        items = JSON.parse(cartItems);
      }
      items.push(productId);
      sessionStorage.setItem('cartItems', JSON.stringify(items));
      setList(items);
    };
  
    const qty = list.length > 9 ? "9+" : list.length;


    return (
        <div>
            <div id="preloder">
                <div className="loader" />
            </div>
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="ht-left">
                            <div className="mail-service">
                                <i className=" fa fa-envelope" />
                                <b>hello.colorlib@gmail.com
                                </b></div><b>
                                <div className="phone-service">
                                    <i className=" fa fa-phone" />
                                    +65 11.188.888
                                </div>
                            </b></div><b>
                            <div className="ht-right">
                                <a href="#" className="login-panel">
                                    <i className="fa fa-user" />
                                    Login
                                </a>
                                <div className="lan-selector">
                                    <select className="language_drop" name="countries" id="countries" style={{ width: '300px' }}>
                                        <option value="yt" data-image="img/flag-1.jpg" data-imagecss="flag yt" data-title="English">
                                            English
                                        </option>
                                        <option value="yu" data-image="img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">
                                            German </option>
                                    </select>
                                </div>
                                <div className="top-social">
                                    <a href="#"><i className="ti-facebook" /></a>
                                    <a href="#"><i className="ti-twitter-alt" /></a>
                                    <a href="#"><i className="ti-linkedin" /></a>
                                    <a href="#"><i className="ti-pinterest" /></a>
                                </div>
                            </div>
                        </b></div><b>
                    </b></div><b>
                    <div className="container">
                        <div className="inner-header">
                            <div className="row">
                                <div className="col-lg-2 col-md-2">
                                    <div className="logo">
                                        <a href="#">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="advanced-search">
                                        <button type="button" className="category-btn">All Categories</button>
                                        <form action="#" className="input-group">
                                            <input type="text" placeholder="What do you need?" />
                                            <button type="button"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-right col-md-3">
                                    <ul className="nav-right">
                                        <li className="heart-icon"><a href="#">
                                            <i className="icon_heart_alt" />
                                            <span>1</span>
                                        </a>
                                        </li>
                                        <li className="cart-icon"><a href="#">
                                            <i className="icon_bag_alt" />
                                            <span>{qty}</span>
                                        </a>


                                            <div className="cart-hover">
                                                <div className="select-items">
                                                    <table>
                                                        <tbody>

                                                            <CartHover></CartHover>



                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="select-total">
                                                    <span>total:</span>
                                                    <h5>₫120.00</h5>
                                                </div>
                                                <div className="select-button">
                                                    <a href="/shoppingcart-detail" className="primary-btn view-card">VIEW CARD</a>
                                                    <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                                </div>
                                            </div>



                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="container">
                            <div className="nav-depart">
                                <div className="depart-btn">
                                    <i className="ti-menu" />
                                    <span>All departments</span>
                                    <ul className="depart-hover">
                                        <li className="active"><a href="#">Women’s Clothing</a></li>
                                        <li><a href="#">Men’s Clothing</a></li>
                                        <li><a href="#">Underwear</a></li>
                                        <li><a href="#">Kid's Clothing</a></li>
                                        <li><a href="#">Brand Fashion</a></li>
                                        <li><a href="#">Accessories/Shoes</a></li>
                                        <li><a href="#">Luxury Brands</a></li>
                                        <li><a href="#">Brand Outdoor Apparel</a></li>
                                    </ul>
                                </div>
                            </div>
                            <nav className="nav-menu mobile-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Collection</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Pages</a></li>
                                </ul>
                            </nav>
                            <div id="mobile-menu-wrap" />
                        </div>
                    </div>
                </b></header><b>
                {/* Header End */}
                {/* Breadcrumb Section Begin */}
                <div className="breacrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-text">
                                    <a href="#"><i className="fa fa-home" /> Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb Section Begin */}
                {/* Product Shop Section Begin */}
                <section className="product-shop spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 order-1 order-lg-2">
                                <div className="product-list">
                                    <div className="row">
                                        <div class="col-lg-4 col-sm-6">


                                            {products.map((product, index) => (
                                                <ShowProducts
                                                    id={product.id}
                                                    image={product.image} onSale={product.onSale}
                                                    type={product.type}
                                                    price={product.price}
                                                    title={product.title}
                                                    method={() => addToCart(product.id)} />))}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product Shop Section End */}
                {/* Partner Logo Section Begin */}
                <div className="partner-logo">
                    <div className="container">
                        <div className="logo-carousel owl-carousel">
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="img/logo-carousel/logo-1.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="img/logo-carousel/logo-2.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="img/logo-carousel/logo-3.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="img/logo-carousel/logo-4.png" alt="" />
                                </div>
                            </div>
                            <div className="logo-item">
                                <div className="tablecell-inner">
                                    <img src="img/logo-carousel/logo-5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Partner Logo Section End */}
                {/* Footer Section Begin */}
                <footer className="footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-left">
                                    <div className="footer-logo">
                                        <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                                    </div>
                                    <ul>
                                        <li>Address: 60-49 Road 11378 New York</li>
                                        <li>Phone: +65 11.188.888</li>
                                        <li>Email: hello.colorlib@gmail.com</li>
                                    </ul>
                                    <div className="footer-social">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-instagram" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-pinterest" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-1">
                                <div className="footer-widget">
                                    <h5>Information</h5>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Serivius</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer-widget">
                                    <h5>My Account</h5>
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Shopping Cart</a></li>
                                        <li><a href="#">Shop</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="newslatter-item">
                                    <h5>Join Our Newsletter Now</h5>
                                    <p>Get E-mail updates about our latest shop and special offers.</p>
                                    <form action="#" className="subscribe-form">
                                        <input type="text" placeholder="Enter Your Mail" />
                                        <button type="button">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-reserved">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text">
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        Copyright ©
                                        All rights reserved | This
                                        template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://www.facebook.com/thuy.huynhvan" target="_blank">Huynh Van Thuy</a>
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
            </b></div>
    );

}

export default HomePage;