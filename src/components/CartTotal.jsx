import Button from "./Button";

function CartTotal({ productsCart, removeAll }) {
  const valorTotal = productsCart
    .reduce((a, b) => {
      return a + b.price;
    }, 0)
    .toFixed(2);
  return (
    <section className="App-main-cart-boxTotal">
      <section className="App-main-cart-boxTotal-box1">
        <p className="App-main-cart-boxTotal-p1">Total</p>
        <p className="App-main-cart-boxTotal-p2">
          R$
          {valorTotal.toString().replace(".", ",")}
        </p>
      </section>
      <Button
        onClick={removeAll}
        styleButton={"btnRemoveTodos"}
        children={"Remover todos"}
      />
    </section>
  );
}

export default CartTotal;
