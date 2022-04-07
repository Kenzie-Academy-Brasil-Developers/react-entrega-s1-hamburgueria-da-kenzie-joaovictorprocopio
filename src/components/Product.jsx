import Button from "./Button";

function Product({ linkImg, description, nome, category, preco, key }) {
  return (
    <li key={key}>
      <img src={linkImg} alt={description} />
      <p>{nome}</p>
      <p>{category}</p>
      <p>R$ {preco}</p>
      <Button styleButton={"btnAdicionaCart"} children={"Adicionar"} />
    </li>
  );
}

export default Product;
