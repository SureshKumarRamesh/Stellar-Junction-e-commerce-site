import { useContext } from "react";
import ProductContext from "../ProductContext/ProductContext";
import CardComponent from "../Components/CardComponent";

function ProductPage() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="card-container">
        {products &&
          products.map((value, index) => {
            return <CardComponent value={value} key={index} />;
          })}
      </div>
    </>
  );
}

export default ProductPage;
