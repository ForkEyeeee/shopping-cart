import { useOutletContext } from "react-router-dom";

const useContext = () => {
  const { cartItems, data, handleAddCart, handleClearItems, itemQuantity } =
    useOutletContext();
  return { cartItems, data, handleAddCart, handleClearItems, itemQuantity };
};

export default useContext;
