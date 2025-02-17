import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [checkUpdateCart, setCheckUpdateCart] = useState(true);
  const [cartlength, setCartLength] = useState(0);

  return (
    <CartContext.Provider
      value={{ checkUpdateCart, setCheckUpdateCart, cartlength, setCartLength }}
    >
      {children}
    </CartContext.Provider>
  );
}
