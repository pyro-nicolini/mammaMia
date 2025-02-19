import Button from "./Button";
import { useState } from "react"

const Navbar = () => {
  const total = 25000;
  const [token, setToken] = useState(false);
  // const token = false

  function logeado() {
    setToken(!token);
  };
  return (
    <nav>
      <div className="d-flex">
        <Button buttonText={"🍕 Home"} />
        <Button
          onClick={logeado}
          className={token ? "d-block" : "d-none"}
          buttonText={"🔓 Profile"}
        />
        <Button
          onClick={logeado}
          className={token ? "d-block" : "d-none"}
          buttonText={"🔒 Logout"}
        />
        <Button
          onClick={logeado}
          className={token ? "d-none" : "d-block"}
          buttonText={"🔐 Login"}
        />
        <Button
          onClick={logeado}
          className={token ? "d-none" : "d-block"}
          buttonText={"🔐 Register"}
        />
      </div>
      <Button buttonText={`🛒 Total: $ ${total.toLocaleString().replace(',','.')}`} />
    </nav>
  );
};

export default Navbar;
