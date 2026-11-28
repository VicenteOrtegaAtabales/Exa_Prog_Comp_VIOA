import { Link } from "react-router-dom";

function Navbar({ carrito }) {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/poleras">Poleras</Link>
            {" | "}
            <Link to="/chaquetas">Chaquetas</Link>
            {" | "}
            <Link to="/pantalones">Pantalones</Link>
            {" | "}
            <Link to="/login">Login</Link>
            {" | "}
            <Link to="/contacto">Contacto</Link>
            {" | "}
            <Link to="/carrito">Carrito ({carrito.length})</Link>
        </nav>
    );
}

export default Navbar;