function Pesquisa({ showProducts, pesquisaValue }) {
  return (
    <form>
      <section>
        <input
          onChange={(e) => {
            pesquisaValue(e);
          }}
          name="pesquisa"
          type={"search"}
        />
        <button onClick={showProducts()}>Pesquisar</button>
      </section>
    </form>
  );
}

export default Pesquisa;
