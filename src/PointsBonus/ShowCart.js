const ShowCart = ({ image, title, price, quantity, decrease, increase, remove }) => {
    return (
        <tr>
            <td className="cart-pic first-row"><img src={image} alt="" /></td>
            <td className="cart-title first-row">
                <h5>{title}</h5>
            </td>
            <td className="p-price first-row">${price}</td>
            <td className="qua-col first-row">
                <div className="quantity">
                    <div className="pro-qty">
                        <span class="dec qtybtn" onClick={decrease}>-</span>
                        <input type="text" value={quantity}/>
                        <span class="dec qtybtn" onClick={increase}>+</span>
                    </div>
                </div>
            </td>
            <td className="total-price first-row">${ (quantity * price).toFixed(2)}</td>
            <td className="close-td first-row"><i className="ti-close" onClick={remove}></i></td>
            <td className="close-td first-row"><i className="ti-save"></i></td>
        </tr>
    );
};

export default ShowCart;