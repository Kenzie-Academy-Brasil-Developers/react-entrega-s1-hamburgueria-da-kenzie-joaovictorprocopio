import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";

function Cart({ currentSale, setCurrentSale }) {
  function removeAll() {
    setCurrentSale("");
  }

  function removeOne(e) {
    const cartProvi = currentSale.filter((item) => {
      if (item.id !== parseInt(e.target.id)) {
        return item;
      }
    });
    setCurrentSale(cartProvi);
  }

  return (
    <section className="App-main-cart">
      <section className="App-main-cart-head">
        <p>Carrinho de compras</p>
      </section>
      <section className="App-main-cart-box1">
        {currentSale.length > 0 ? (
          currentSale.map((item) => {
            return (
              <section>
                <CartProduct
                  linkImg={item.img}
                  description={item.name}
                  nome={item.name}
                  category={item.category}
                  idBtn={item.id}
                  removeOne={removeOne}
                  key={item.id}
                />
              </section>
            );
          })
        ) : (
          <section>
            <p className="App-main-cart-box1-p1">Sua sacola está vazia</p>
            <p className="App-main-cart-box1-p2">Adicione itens</p>
          </section>
        )}
      </section>
      {currentSale.length > 0 ? (
        <section className="App-main-cart-box2">
          <CartTotal productsCart={currentSale} removeAll={removeAll} />
        </section>
      ) : (
        <div></div>
      )}
    </section>
  );
}

export default Cart;
