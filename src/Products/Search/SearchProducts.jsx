import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardComponent from "../Components/CardComponent";

function SearchProducts() {
  let [searchParams] = useSearchParams();
  let search = searchParams.has("filter") ? searchParams.get("filter") : "";

  const [list, setList] = useState([]);

  let API = "https://dummyjson.com/products";
  useEffect(() => {
    const searchproducts = async () => {
      const response = await fetch(`${API}/search?q=${search}`);
      const data = await response.json();
      console.log(data);
      setList(data.products);
      console.log(list);
    };

    if (search) {
      searchproducts();
    }
  }, [search]);

  return (
    <>
      <div className="card-container">
        {list &&
          list.map((value, index) => {
            return <CardComponent value={value} key={index} />;
          })}
      </div>
    </>
  );
}
export default SearchProducts;
