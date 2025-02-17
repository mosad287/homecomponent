import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginContextProvider from "./context/login/LoginContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContextProvider from "./context/cart/CartContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <LoginContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LoginContextProvider>
  </QueryClientProvider>
);
