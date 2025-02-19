function Button({ buttonText, className = '', onClick }) {
  return (
    <button
      type="button"
      className={`btn btn-outline-light m-1 ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}


export default Button;