import React, { useState, useEffect } from 'react';
import axios from 'axios';

const countOccurrences = (arr, id) => {
  return arr.reduce((count, product) => {
    if (product === id) {
      return count + 1;
    }
    return count;
  }, 0);
};

const CartHover = () => {
  const [totalprice, setTotalprice] = useState([]);
  const [products_cart, setProducts_cart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get('https://thaihoang-midterm-api.onrender.com/clothes')
      .then(response => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    const pro = JSON.parse(sessionStorage.getItem('cartItems'));
    setProducts_cart(pro);
    fetchProducts();
  }, []);

  const updateCartItems = () => {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    const filteredProducts = cartItems ? products.filter(product => cartItems.includes(product.id)) : [];

    return filteredProducts.map(product => {
      const count = countOccurrences(cartItems, product.id);

      return (
        <tr key={product.id}>
          <td className="si-pic">
            <img src={product.image} alt="" />
          </td>
          <td className="si-text">
            <div className="product-selected">
              <p>{product.price} x {count}</p>
              <h6>{product.title}</h6>
            </div>
          </td>
          <td className="si-close">
            <i className="ti-close" />
          </td>
        </tr>
      );
    });
  };

  return <>{updateCartItems()}</>;
};

export default CartHover;
