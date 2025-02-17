import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/login/LoginContext";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/cart/CartContext";

function Heder() {
  const { checklogIn, setCheckLogIn } = useContext(LoginContext);
  const { cartlength } = useContext(CartContext);

  const navigate = useNavigate();

  function handelLogOut() {
    localStorage.removeItem("userToken");
    setCheckLogIn(true);
    navigate("/login");
  }

  let links = [
    { name: "Home", to: "/" },
    { name: "Cart", to: "/cart" },
    { name: "Wish List", to: "/wishlist" },
    { name: "Product", to: "/product" },
    { name: "Categories", to: "/categories" },
    { name: "Brands", to: "/brands" },
  ];

  return (
    <div className="flex flex-row items-center justify-center bg-gray-100 py-2 w-[100%]">
      <Navbar className="bg-gray-100 w-[100%] xl:w-[90%]" fluid rounded>
        <Link to="/">
          <span className="self-center whitespace-nowrap text-[25px] font-semibold dark:text-white">
            Fresh Cart
          </span>
        </Link>
        <div className="flex md:order-2">
          {checklogIn ? (
            <div className="flex flex-row items-center justify-center gap-5">
              <NavLink className="text-gray-700" to="/regester">
                Regester
              </NavLink>
              <NavLink to="/login" className="text-gray-700 pr-2">
                Log in
              </NavLink>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center gap-5">
              <div className="relative">
                <FaShoppingCart className="text-[25px] shopicon text-gray-700" />
                <div className="absolute left-4 bottom-3 bg-green-500 px-[3px] text-white rounded-full">
                  <h1>{cartlength}</h1>
                </div>
              </div>
              <p
                onClick={handelLogOut}
                className="text-gray-700 pr-2 cursor-pointer"
              >
                Log out
              </p>
            </div>
          )}

          <Navbar.Toggle />
        </div>
        {!checklogIn && (
          <Navbar.Collapse>
            {links.map(({ name, to }, index) => (
              <NavLink className="text-gray-700" to={to} key={index}>
                {name}
              </NavLink>
            ))}
          </Navbar.Collapse>
        )}
      </Navbar>
    </div>
  );
}

export default Heder;
