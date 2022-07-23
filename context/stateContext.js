import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
const context = createContext();
import { client } from "../sanityClient";

export const StateContext = ({ children }) => {


  const toastMess = (path) => {
    if (path === "/") {
      toast.success(`Main page`);
    }
    if (path === "/contacts") {
      toast.success(`Contacts page`);
    }
  };

  return (
    <context.Provider
      value={{
        toastMess,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
