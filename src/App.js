import "./App.css";
import { useState, useEffect } from "react";
import Productlist from "./components/ProductList";
import LogoKenzie from "./components/LogoKenzie";
import Pesquisa from "./components/Pesquisa";
import Cart from "./components/Cart";

function App() {
  const [dataApi, setDataApi] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");
  const [valuePesquisa, setValuePesquisa] = useState("");
  const [currentSale, setCurrentSale] = useState("");
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data);
      });
  }, []);

  // pega o valor digitado no input

  const pesquisaValue = (e) => {
    setValuePesquisa(e.target.value);
  };

  // construção dos cards e pesquisa

  const showProducts = (e) => {
    e.preventDefault();
    console.log(valuePesquisa, "valor da pesquisa");
    console.log(dataApi, "data api");
    if (valuePesquisa.length > 0 && dataApi.length > 0) {
      const produtosProvi = dataApi.filter((item) => {
        if (
          valuePesquisa
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/, "") ===
            item.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/, "") ||
          valuePesquisa
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/, "") ===
            item.category
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/, "")
        ) {
          return item;
        }
      });

      setFilteredProducts(produtosProvi, "aqui");
    }
  };

  // enviar itens para o carrinho

  function handleClick(e) {
    const produtosProvi = dataApi.find((item) => {
      return item.id === parseInt(e.target.id);
    });
    if (currentSale.length > 0) {
      if (!currentSale.some((item) => item.id === parseInt(e.target.id))) {
        setCurrentSale([...currentSale, produtosProvi]);
        console.log(currentSale);
      } else {
        alert("Item já adicionado ao carrinho");
      }
    } else {
      setCurrentSale([...currentSale, produtosProvi]);
      console.log(currentSale);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <LogoKenzie />
        <Pesquisa pesquisaValue={pesquisaValue} showProducts={showProducts} />
      </header>
      <main className="App-main">
        <Productlist
          dataApi={dataApi}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  );
}

export default App;
