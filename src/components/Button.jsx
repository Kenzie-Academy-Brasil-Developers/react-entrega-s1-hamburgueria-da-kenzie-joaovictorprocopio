function Button({ styleButton, children, onClick }) {
  return (
    <button onClick={onClick()} className={styleButton}>
      {children}
    </button>
  );
}

export default Button;
