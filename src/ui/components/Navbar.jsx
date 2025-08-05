import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login',{
      replace: true //evita que el usuario pueda regresar a la pagina anterior con el boton de atras
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
          label = "Marvel"
            className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({isActive}) =>`nav-item nav-link ${isActive ? "active" : ""}` }
            to="/dc"
          >
            DC
          </NavLink>
          
          <NavLink
            className={({isActive}) =>`nav-item nav-link ${isActive ? "active" : ""}` }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
              Erick Escobar
            </span>
            <button 
            className="nav-item nav-link btn btn-outline-info"
            onClick={onLogout}
            >
                Logout
            </button>
        </ul> 
      </div>
    </nav>
  );
};
