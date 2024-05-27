import { getCart, removeFromCart } from "@/config/Api";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// Create a context
export const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [from, setFrom] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [count, setCount] = useState([]);

  const getCartData = () => {
    const guestId = Cookies.get("guestId");
    if (guestId) {
      getCart(guestId)
        .then((res) => {
          if (res.data.success) {
            setCartData(res.data.data.rows);
            setCount(res.data.data.count);
            setPaymentDetails(res.data.data.cartData);
          }
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.message || err.message;
          toast.error(errorMessage);
        })
        .finally(() => {
          setLoading(false); // Ensure loading is set to false after data fetch
        });
    } else {
      setLoading(false); // No guestId found, stop loading
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const updateCartData = (newCartData) => {
    setCartData(newCartData); // Update cart data
  };

  const removeItemFromCart = (variantId) => {
    const guestId = Cookies.get("guestId");

    const data = {
      guestId: guestId,
      variantId: variantId,
    };

    removeFromCart(data)
      .then((res) => {
        if (res.data.success) {
          toast.success("Item removed");
          getCartData(); // Refresh cart data after removal
        }
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || err.message;
        toast.error(errorMessage);
      });
  };

  // Pass state and functions to the context value
  const contextValue = {
    email,
    password,
    from,
    cartData,
    loading,
    paymentDetails,
    count,
    setEmail,
    setPassword,
    setFrom,
    setCartData,
    setLoading,
    setPaymentDetails,
    updateCartData,
    removeFromCart,
    removeItemFromCart,
    getCartData,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
    
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
