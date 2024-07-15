"use client";
import {
  generateGuestId,
  getCart,
  login,
  removeFromCart,
  updateCart,
} from "@/config/Api";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
  const [guestId, setGuestId] = useState(null);

  useEffect(() => {
    const setGuestIdInCookies = async () => {
      const storedGuestId = Cookies.get("guestId");
      if (!storedGuestId) {
        try {
          const newGuestId = await generateGuestId();
          Cookies.set("guestId", newGuestId.data.data.guestId, { expires: 7 });
          setGuestId(newGuestId.data.data.guestId);
        } catch (error) {
          console.error("Failed to generate guest ID:", error);
        }
      } else {
        setGuestId(storedGuestId);
      }
    };

    setGuestIdInCookies();
  }, []);

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
    if (guestId) {
      getCartData();
    }
  }, [guestId]);

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

  const updateCartData = (variantId, value) => {
    const guestId = Cookies.get("guestId");

    const data = {
      guestId: guestId,
      qty: value,
      variantId: variantId,
    };

    updateCart(data)
      .then((res) => {
        if (res.data.success) {
          toast.success("Item updated");
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
    guestId,
    setGuestId,
    setEmail,
    setPassword,
    setFrom,
    setCartData,
    setLoading,
    setPaymentDetails,
    removeFromCart,
    removeItemFromCart,
    getCartData,
    updateCartData,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
