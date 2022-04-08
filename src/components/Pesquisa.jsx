import Button from "./Button";

function Pesquisa({ showProducts, pesquisaValue }) {
  return (
    <form>
      <section className="box-pesquisa">
        <input
          className="pesquisa"
          onChange={(e) => {
            pesquisaValue(e);
          }}
          name="pesquisa"
          type={"search"}
          placeholder={"Digitar pesquisa"}
        />
        <button
          className="btnPesquisa"
          onClick={(e) => {
            showProducts(e);
          }}
        >
          Pesquisar
        </button>
      </section>
    </form>
  );
}

export default Pesquisa;
