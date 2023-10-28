import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartInformation from "./CartInformation";

function CartUi(value) {
  const [productList, setProductList] = useState([]);
  const [productObject, setProductObject] = useState({});
  const [initialFlag, setInitialFlag] = useState(false);
  const returnHome = useNavigate();

  let fetchdata = () => {
    let cart = localStorage.getItem("cartInformation")
      ? localStorage.getItem("cartInformation")
      : "{}";
    let getcart = JSON.parse(cart);
    let objectList = Object.values(getcart);
    setProductObject(getcart);
    setProductList(objectList);
    setInitialFlag(true);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (initialFlag) {
      localStorage.setItem("cartInformation", JSON.stringify(productObject));
    }
  }, [initialFlag, productList]);

  const homebtn = () => {
    returnHome({
      pathname: "/",
    });
  };

  let remove = () => {
    setProductList([]);

    localStorage.clear("cartInformation");
  };

  console.log(productList);

  const addToCart = (id) => {
    let productInformation = { ...productObject[id] };
    productInformation.quantity = productInformation.quantity + 1;

    productObject[id] = { ...productInformation };

    let productList = Object.values(productObject);

    setProductObject(productObject);
    setProductList(productList);
  };

  let data = Object.values(productObject);
  let cartfinaltotal = data.reduce(
    (acc, currentValue) => {
      let quantity = acc.quantity + currentValue.quantity;
      let totalPrice =
        acc.totalPrice + currentValue.quantity * currentValue.price;
      return { quantity, totalPrice };
    },
    { quantity: 0, totalPrice: 0 }
  );
  console.log(cartfinaltotal.totalPrice);

  const removeFromCart = (id) => {
    let referenceProjectObject = { ...productObject };
    let productInformation = { ...productObject[id] };
    if (productInformation.quantity === 1) {
      delete referenceProjectObject[id];

      let listValues = Object.values(referenceProjectObject);
      setProductObject(referenceProjectObject);
      setProductList(listValues);
    } else {
      let productInformation = { ...productObject[id] };
      productInformation.quantity = productInformation.quantity - 1;

      productObject[id] = { ...productInformation };

      let productList = Object.values(productObject);

      setProductObject(productObject);
      setProductList(productList);
    }
  };

  return (
    <>
      <div
        className="cart-main"
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <div
          className="btn-item"
          style={{ position: "fixed", paddingTop: "10px" }}
        >
          <button className="home-btn" onClick={() => homebtn(value.id)}>
            {" "}
            Continue Shopping
          </button>

          <button className="home-btn" onClick={() => remove(value.id)}>
            {" "}
            Clear Cart{" "}
          </button>
        </div>
        <div
          className="cart-align"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              padding: "50px",
            }}
          >
            {productList &&
              productList.map((value, index) => {
                return (
                  <div key={index}>
                    <CartInformation
                      value={value}
                      key={index}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      cartfinaltotal={cartfinaltotal}
                    />
                  </div>
                );
              })}
          </div>

          <div className="Total-Price">
            <h1>Total Price List</h1>
            <br></br>
            <h3>Total items Count = {cartfinaltotal.quantity} </h3>
            <br></br>
            <h3> Total Amount= {cartfinaltotal.totalPrice}$</h3>
            <h3></h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartUi;
