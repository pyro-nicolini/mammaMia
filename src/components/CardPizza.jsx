import Button from "./Button";

function CardPizza({ name, price, ingredients, img }) {
    return (
      <div className="card shadow-lg bg-dark border-black text-white" style={{ maxWidth: "18rem" }}>
        <img
          className="card-img-top rounded"
          src={img}
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h4 className="card-subtitle mb-2 text-warning">${price.toLocaleString().replace(',','.')}</h4>
          <p className="card-text">{ingredients.join(", ")}</p>
        </div>
        <div>
        <Button buttonText={`ver más...`} />
        <Button buttonText={`Añadir 🛒`} />
        </div>
      </div>
    );
  }
  
  export default CardPizza;
  