import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Estas escribiendo mal la ruta</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/Login" style={{ color: "blue", textDecoration: "underline" }}>
        Ir a la página de Acceso
      </Link>
    </div>
  );
};

export default NotFound;
