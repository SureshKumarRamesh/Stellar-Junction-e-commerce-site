function CartInformation({ value, addToCart, removeFromCart }) {
  return (
    <>
      <div className="cart-item-align">
        <div className="cart-products">
          <div className="cart-product-left">
            <div className="img-btn">
              <img
                className="cart-image"
                alt="products"
                src={value.thumbnail}
              />
            </div>
            <div className="cart-add-btn">
              <ul>
                <li>
                  <button
                    className="plusbutton"
                    onClick={() => addToCart(value.id)}
                  >
                    +
                  </button>
                </li>

                <span
                  className="quantity"
                  style={{
                    padding: "8px",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {value.quantity}
                </span>
                <li>
                  {" "}
                  <button
                    className="minusbutton"
                    onClick={() => removeFromCart(value.id)}
                  >
                    -
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="cart-products-right">
            <h2>{value.title}</h2>
            <p>Product description:{value.description}</p>
            <h3>price:{value.price}</h3>
            <h4>Rating:{value.rating}⭐</h4>
            <h3>Discount : {value.discountPercentage}%</h3>
            <h4>
              Total ( {value.quantity} items) = {value.quantity * value.price}$
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartInformation;
