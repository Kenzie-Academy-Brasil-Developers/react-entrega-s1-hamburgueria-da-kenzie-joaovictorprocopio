import Button from "./Button";

function Product({
  linkImg,
  description,
  nome,
  category,
  preco,
  idBtn,
  handleClick,
}) {
  return (
    <li className="App-main-list-card">
      <section className="App-main-list-card-boxImg">
        <img
          className="App-main-list-card-img"
          src={linkImg}
          alt={description}
        />
      </section>
      <p className="App-main-list-card-nome">{nome}</p>
      <p className="App-main-list-card-categoria">{category}</p>
      <p className="App-main-list-card-preco">
        R$ {preco.toFixed(2).toString().replace(".", ",")}
      </p>
      <Button
        onClick={handleClick}
        idBtn={idBtn}
        key={idBtn}
        styleButton={"btnAdicionaCart"}
        children={"Adicionar"}
      />
    </li>
  );
}

export default Product;
