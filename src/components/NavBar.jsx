import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";



export default function NavBar() {

    const { listaCompras } = useContext(CartContext)
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Carrito </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" href="#">compras</NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                    <Badge badgeContent={listaCompras.length} color="secondary">
                        <ShoppingCart color="action" />
                    </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
