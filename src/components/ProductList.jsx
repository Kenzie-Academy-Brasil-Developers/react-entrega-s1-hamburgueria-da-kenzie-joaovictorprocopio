import Product from "./Product";
import { useState, useEffect } from "react";

function Productlist({ dataApi, filteredProducts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
    } else if (dataApi.length) {
      setProducts(dataApi);
      //   console.log(products, "lista de produtos");
    }
  }, []);

  return (
    <ul>
      {products &&
        products.map((item) => {
          return (
            <Product
              linkImg={item.img}
              categoria={item.name}
              nome={item.name}
              category={item.category}
              preco={item.price}
              key={item.id}
            />
          );
        })}
    </ul>
  );
}

export default Productlist;
