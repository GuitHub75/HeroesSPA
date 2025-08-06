import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const onLogin = () => {
    login('ERICK ESCOBAR SUAREZ');
    navigate('/marvel',{
      replace: true //evita que el usuario pueda regresar a la pagina anterior con el boton de atras
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>

    </div>
  )
}
