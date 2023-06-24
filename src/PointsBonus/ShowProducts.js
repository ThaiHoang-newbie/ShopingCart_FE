import React from 'react';

const ShowProducts = ({ id, image, onSale, type, price, title, method }) => {
    return (
        <div className="product-item" key={id}>
            <div className="pi-pic">
                <img src={image} alt="" />
                {onSale && <div className="sale pp-sale">Sale</div>}
                <div className="icon">
                    <i className="icon_heart_alt" />
                </div>
                <ul>
                    <li className="w-icon active">
                        <a href="#">
                            <i className="icon_bag_alt" />
                        </a>
                    </li>
                    <li className="quick-view">
                        <a href="#" onClick={() => method(id)}>+ Add Cart</a>
                    </li>
                    <li className="w-icon">
                        <a href="#">
                            <i className="fa fa-random" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="pi-text">
                <div className="catagory-name">{type}</div>
                <a href="#">
                    <h5>{title}</h5>
                </a>
                <div className="product-price">{price}</div>
            </div>
        </div>
    );
};

export default ShowProducts;
