import { useContext } from "react";
import ProductContext from "../ProductContext/ProductContext";

function Catogerys() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <h2
        style={{
          textShadow: "1px 1px 0 #0fb0d0c9",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Product categorys will be shown here
      </h2>
      {products &&
        products.map((value) => {
          return (
            <div
              className="category"
              style={{ border: "1px solid black", width: "100%" }}
            >
              <table>
                <tr>Product Category: {value.category}</tr>
                <tr>Link: {value.thumbnail}</tr>
              </table>
            </div>
          );
        })}
    </>
  );
}
export default Catogerys;
