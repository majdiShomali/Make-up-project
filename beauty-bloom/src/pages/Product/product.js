import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./product.css";

import { useContext } from "react";
import { UserContext } from "./ProductContext";

import "./product.css";

const Product = () => {
  const { product_Api, updateValueProduct_Api } = useContext(UserContext);

  console.log(product_Api);
  const { myArray, updateApi1 } = useContext(UserContext);
  const { Quantity, updateValueQuantity } = useContext(UserContext);

  const [colorButton, setcolorButton] = useState("none");
  const [buttonId, setButtonId] = useState();
  const { Price, updateValuePrice } = useContext(UserContext);

  updateValuePrice(product_Api.price);

  function ButtonOnClick(i) {
    setButtonId(i);
    setcolorButton("black");
  }

  function handleChange(event) {
    updateValueQuantity(event.target.value);
  }

  const clickHandler1 = () => {
    updateApi1((oldArray) => [...oldArray, product_Api]);
  };

  return (
    <div className="mainContainer0">

    
      <div className="productContainer">
        <div className="productSection1 productBox">
          <img src={product_Api.image} alt="" />

          <div className="productButtons1">
            {/* {

    
      product_Api.colors.map((e,i)=>{
        return <button style={{background:buttonId===i ? "black" : "none"}} onClick={()=>abyss(i)}  >  </button>
       })

    } */}
          </div>

          <p className="para">Net Wt. 0.12 oz</p>
          <p className="para">
            FREE OF PARABENS OR FRAGRANCE. FORMULATED WITHOUT ALCOHOL, BARLEY,
            CORN, OATS, RYE, SOY, SPELT, OR WHEAT. SELECT SHADES ARE VEGAN.
          </p>
          {/* <Link to='/about'>Go to Aboutpage</Link>  */}
        </div>

        <div className="productSection2 productBox">
          <p className="productNeme par">{product_Api.name}</p>
          <p className="productPrice par">
            $<span>{product_Api.price}</span>
          </p>

          <div className="producShades">
            <p className="par">Shades</p>
            <div className="productButtons2">
              {product_Api.colors.map((e, i) => {
                return (
                  <button
                    style={{ backgroundColor: product_Api.colors[i].hex_value }}
                    onClick={() => ButtonOnClick(i)}
                  ></button>
                );
              })}
            </div>
          </div>

          <p className=" par">Quantity</p>
          <input
            type="number"
            onChange={handleChange}
            value={Quantity}
            style={{ textAlign: "center" }}
          />

          <Link to="/Cart">
            <button onClick={clickHandler1} className="addToCartButton">
              Add to Cart
            </button>
          </Link>

          <p className="prodeuctDescription para">Description</p>
          <p className="prodeuctDescriptionp para">{product_Api.description}</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
