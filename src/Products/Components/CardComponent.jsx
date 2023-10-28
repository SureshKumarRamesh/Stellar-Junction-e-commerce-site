import { useNavigate } from "react-router-dom";

function CardComponent({ value }) {
  const cart = useNavigate();

  const navcart = () => {
    let cardDetails = localStorage.getItem("cartInformation")
      ? JSON.parse(localStorage.getItem("cartInformation"))
      : {};

    if (cardDetails[value.id]) {
      cardDetails[value.id].quantity = cardDetails[value.id].quantity + 1;
    } else {
      cardDetails[value.id] = { ...value };
      cardDetails[value.id].quantity = 1;
    }

    localStorage.setItem("cartInformation", JSON.stringify(cardDetails));
    cart({
      pathname: "/cart",
    });
  };
  return (
    <div className="box">
      <span></span>
      <div className="card">
        <h3
          style={{
            fontSize: "20px",
            fontFamily: "Gill Sans",
            "Gill Sans MT": "Calibri",
            "Trebuchet MS": "sans-serif",
          }}
        >
          {value.title}
        </h3>
        <img
          style={{ height: "190px", maxWidth: "210px" }}
          src={value.thumbnail}
          alt="products"
        />
        <h4
          style={{
            fontSize: "20px",
            fontFamily: "Gill Sans",
            "Gill Sans MT": "Calibri",
            "Trebuchet MS": "sans-serif",
          }}
        >
          Product Price:{value.price}$
        </h4>
        <div className="car-btn-container">
          <button
            className="cart-btn"
            onClick={() => {
              navcart();
            }}
          >
            AddToCart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
