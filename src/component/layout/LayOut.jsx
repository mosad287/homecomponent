import { Outlet } from "react-router-dom";
import Heder from "../heder/Heder";
import { useContext } from "react";
import { LoginContext } from "../../context/login/LoginContext";
import { Spinner } from "flowbite-react";

function LayOut() {
  const { loading } = useContext(LoginContext);
  return (
    <div className="relative">
      <Heder />
      {loading ? (
        <div className="w-full h-screen bg-spinnerground flex flex-row items-center justify-center">
          <Spinner
            className="bg-slate-600 rounded-full"
            aria-label="Extra large spinner example"
            size="xl"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default LayOut;
