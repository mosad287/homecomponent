import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./component/layout/LayOut";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import WishList from "./component/wishlist/WishList";
import Products from "./component/products/Products";
import Categories from "./component/categories/Categories";
import Brands from "./component/brands/Brands";
import LogIn from "./component/login/LogIn";
import Regester from "./component/regester/Regester";
import NotFound from "./component/notfound/NotFound";
import HomeProtect from "./Ppotectrouter/HomeProtect";
import LogInProtect from "./Ppotectrouter/LogInProtict";
import ProductDetails from "./component/products/ProductDetails";
import ForgetPassword from "./component/login/ForgetPassword";
import VerifyCode from "./component/login/VerifyCode";
import ResetPassword from "./component/login/ResetPassword";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        //is login

        {
          index: true,
          element: (
            <HomeProtect>
              <Home />
            </HomeProtect>
          ),
        },
        {
          path: "cart",
          element: (
            <HomeProtect>
              <Cart />
            </HomeProtect>
          ),
        },
        {
          path: "wishlist",
          element: (
            <HomeProtect>
              <WishList />
            </HomeProtect>
          ),
        },
        {
          path: "product",
          element: (
            <HomeProtect>
              <Products />
            </HomeProtect>
          ),
        },
        {
          path: "categories",
          element: (
            <HomeProtect>
              <Categories />
            </HomeProtect>
          ),
        },
        {
          path: "brands",
          element: (
            <HomeProtect>
              <Brands />
            </HomeProtect>
          ),
        },
        {
          path: "productdetails/:id",
          element: (
            <HomeProtect>
              <ProductDetails />
            </HomeProtect>
          ),
        },

        //is not login

        {
          path: "login",
          element: (
            <LogInProtect>
              <LogIn />
            </LogInProtect>
          ),
        },
        {
          path: "regester",
          element: (
            <LogInProtect>
              <Regester />
            </LogInProtect>
          ),
        },
        {
          path: "forgetpassword",
          element: (
            <LogInProtect>
              <ForgetPassword />
            </LogInProtect>
          ),
        },

        {
          path: "verifycode",
          element: (
            <LogInProtect>
              <VerifyCode />
            </LogInProtect>
          ),
        },
        {
          path: "resetpassword",
          element: (
            <LogInProtect>
              <ResetPassword />
            </LogInProtect>
          ),
        },

        ////////////

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
