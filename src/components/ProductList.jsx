import Product from "./Product";
import { useState, useEffect } from "react";

function Productlist({ dataApi, filteredProducts, handleClick }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
    } else if (dataApi.length) {
      setProducts(dataApi);
    }
  }, [dataApi, filteredProducts]);

  return (
    <ul className="App-main-list">
      {products &&
        products.map((item) => {
          return (
            <Product
              linkImg={item.img}
              description={item.name}
              nome={item.name}
              category={item.category}
              preco={item.price}
              idBtn={item.id}
              handleClick={handleClick}
              key={item.id}
            />
          );
        })}
    </ul>
  );
}

export default Productlist;
