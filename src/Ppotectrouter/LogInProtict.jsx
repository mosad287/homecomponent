import { useContext } from "react";
import { LoginContext } from "../context/login/LoginContext";
import { Navigate } from "react-router-dom";

function LogInProtect({ children }) {
  const { checklogIn } = useContext(LoginContext);

  if (checklogIn) {
    return children;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
}

export default LogInProtect;
