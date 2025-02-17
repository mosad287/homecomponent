import { useContext } from "react";
import { LoginContext } from "../context/login/LoginContext";
import { Navigate } from "react-router-dom";

function HomeProtect({ children }) {
  const { checklogIn } = useContext(LoginContext);

  if (checklogIn) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
}

export default HomeProtect;
