import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../pages/Product/ProductContext";

const StoreCard = (props) => {
  const { updateApi } = useContext(UserContext);
  const { myArray: _, updateApi1: updateApiVariable } = useContext(UserContext);

  const clickHandler = () => {
    updateApi({
      price: props.price,
      description: props.description,
      image: props.imageURL,
      name: props.name,
      colors: props.availableColors,
      brand: props.brand,
    });
  };

  const clickCartAddHandler = () => {
    updateApiVariable((oldArray) => [
      ...oldArray,
      {
        price: props.price,
        description: props.description,
        image: props.imageURL,
        name: props.name,
        colors: props.availableColors,
        brand: props.brand,
      },
    ]);
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md border border-gray-300 relative">
      <img
        src={
          props.imageURL
            ? props.imageURL
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        }
        alt={props.name}
        className="w-full max-h-96 object-fill bg-cover rounded-t-md"
      />
      <div className="w-full flex flex-col px-3 pb-6">
        <span className="text-xl font-semibold hover:underline">
          <Link to="/product" onClick={clickHandler}>
            {props.name}
          </Link>
        </span>
        <span className="font-thin">{props.brand}</span>
        <span className="mb-6 font-thin text-gray-500">
          category: {props.category}
        </span>

        <span className="text-xl">
          Price:
          <span className="font-bold">
            $
            {props.discountValue ? (
              <span>
                <span className="line-through me-2">{props.price}</span>
                <span>{(props.price * 20) / 100}</span>
              </span>
            ) : (
              <span>{props.price}</span>
            )}{" "}
          </span>
        </span>
        <span className="mt-3 flex gap-2 flex-wrap">
          {props.availableColors.length !== 0 ? (
            props.availableColors.map((color) => {
              return (
                <div
                  style={{ backgroundColor: `${color.hex_value}` }}
                  key={Math.random()}
                  className={`w-4 h-4 rounded-full`}
                ></div>
              );
            })
          ) : (
            <p className="">No available Colors</p>
          )}
        </span>
      </div>
      <button
        className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-pink-100 cursor-pointer flex items-center justify-center"
        onClick={clickCartAddHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default StoreCard;
