import { useContext } from "react";
import ProductContext from "../ProductContext/ProductContext";

function Stocks() {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <>
      {products &&
        products.map((value, index) => {
          return (
            <div className="center">
              <table>
                <tr>
                  <th>Product Name</th>
                  <th>stocks pending</th>
                </tr>

                <tr>
                  <td>{value.title}</td>
                  <td> {value.stock}</td>
                </tr>
              </table>
            </div>
          );
        })}
    </>
  );
}
export default Stocks;
