import React from "react";
import { Children, createContext, useState } from "react";

import product0001 from "../Product/images/product0001.jpg";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [product_Api, setproduct_Api] = useState(); //pApi

  const [imgButton, setimgButton] = useState(product0001);
  const [Price, setPrice] = useState(0);
  const [Quantity, setQuantity] = useState(1);
  const [myArray, setMyArray] = useState([]);

  const [signState,setSignState] = useState("Login");

  const updatesignState = (newValue) => {
    setSignState(newValue);
  };

  const updateApi1 = (newValue) => {
    setMyArray(newValue);
  };

  const updateApi = (newValue) => {
    console.log(newValue);
    setproduct_Api(newValue);
    console.log(product_Api);
  };

  const updateValueProduct_Api = (newValue) => {
    setproduct_Api(newValue);
  };

  const updateValueImgButton = (newValue) => {
    setimgButton(newValue);
  };

  const updateValuePrice = (newValue) => {
    setPrice(newValue);
  };

  const updateValueQuantity = (newValue) => {
    setQuantity(newValue);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          product_Api,
          updateValueProduct_Api,
          imgButton,
          updateValueImgButton,
          Price,
          updateValuePrice,
          Quantity,
          updateValueQuantity,
          updateApi,
          updateApi1,
          myArray,
          signState,
          updatesignState
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;
