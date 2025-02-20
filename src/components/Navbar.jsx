import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const total = 25000;
  const [token, setToken] = useState(true);

  function logeado() {
    setToken(!token);
    if (token) {
      console.log('deslogeado')
    } else {
      console.log('Logeado')} 
  }

  return (
    <nav>
      <div className="d-flex">
        <Button buttonText={"🍕 Home"} className="btn-outline-light" />
        <Button
          onClick={logeado}
          className={`${token ? "d-block" : "d-none"} btn-outline-light`}
          buttonText={"🔓 Profile"}
        />
        <Button
          onClick={logeado}
          className={`${token ? "d-block" : "d-none"} btn-outline-light`}
          buttonText={"🔒 Logout"}
        />
        <Button
          onClick={logeado}
          className={`${!token ? "d-block" : "d-none"} btn-outline-light`}
          buttonText={"🔐 Login"}
        />
        <Button
          onClick={logeado}
          className={`${!token ? "d-block" : "d-none"} btn-outline-light`}
          buttonText={"🔐 Register"}
        />
      </div>
      <Button
        buttonText={`🛒 Total: $ ${total.toLocaleString().replace(",", ".")}`}
        className="btn-outline-success"
      />
    </nav>
  );
};

export default Navbar;
