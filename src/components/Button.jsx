function Button({ styleButton, children, onClick, idBtn }) {
  return (
    <button
      id={idBtn}
      onClick={(e) => {
        onClick(e);
        console.log(e.target);
      }}
      className={styleButton}
    >
      {children}
    </button>
  );
}

export default Button;
