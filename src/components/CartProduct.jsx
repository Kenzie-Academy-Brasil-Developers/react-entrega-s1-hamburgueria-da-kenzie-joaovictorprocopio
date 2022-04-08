import Button from "./Button";

function CartProduct({
  linkImg,
  description,
  nome,
  category,
  idBtn,
  removeOne,
}) {
  return (
    <li className="App-main-cart-product">
      <section className="App-main-cart-product-boxImg">
        <img
          className="App-main-cart-product-img"
          src={linkImg}
          alt={description}
        />
      </section>
      <section className="App-main-cart-product-boxName">
        <p className="App-main-cart-product-name">{nome}</p>
        <p className="App-main-cart-product-categoria">{category}</p>
      </section>
      <section className="App-main-cart-product-boxBtn">
        <Button
          onClick={removeOne}
          idBtn={idBtn}
          key={idBtn}
          styleButton={"btnRemoverCart"}
          children={"Remover"}
        />
      </section>
    </li>
  );
}

export default CartProduct;
