import { useState } from "react";
import StoreCard from "../../components/StoreCard";
import useFetchData from "../../hooks/useFetchData";
import Pagination from "@mui/material/Pagination";

import { MagnifyingGlass } from "react-loader-spinner";

const baseEndpoint = "http://makeup-api.herokuapp.com/api/v1/products.json?";

const Store = () => {
  const [apiModifiers, setApiModifiers] = useState("?");

  const { data, isLoading, error, setData, unmodifiedData } = useFetchData(
    baseEndpoint + apiModifiers
  );

  const [currentPage, setCurrentPage] = useState(1);

  let totalItems;
  let totalPages;
  let slicedArray;

  if (!isLoading) {
    const itemsPerPage = 12;
    totalItems = data.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    slicedArray = data.slice(startIndex, endIndex);
  }

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.price.value === ">20")
      setApiModifiers(baseEndpoint + "&price_greater_than=20");
    else if (event.target.price.value === "<20")
      setApiModifiers(baseEndpoint + "&price_less_than=20");
    if (event.target.price.value === ">10")
      setApiModifiers(baseEndpoint + "&price_greater_than=10");
    else if (event.target.price.value === "<10")
      setApiModifiers(baseEndpoint + "&price_less_than=10");

    if (event.target.product_type.value !== "null")
      setApiModifiers(
        (prevState) =>
          prevState + `&product_type=${event.target.product_type.value}`
      );
  };

  const handleSearch = () => {
    const inputValue = document.getElementById("search").value;
    console.log(unmodifiedData);
    setData([
      ...unmodifiedData.filter((element) =>
        element.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    ]);
  };

  return (
    <div className="min-h-screen bg-primary-color flex flex-col gap-3 py-12 px-6">
      <span className="font-semibold text-xl">Sort By:</span>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-6 "
      >
        <select className="select select-bordered w-full max-w-xs" id="price">
          <option disabled selected value="null">
            Price
          </option>
          <option value=">20">Price greater than $20</option>
          <option value=">10">Price greater than $10</option>
          <option value="<20">Price less than $20</option>
          <option value="<10">Price less than $10</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          id="product_type"
        >
          <option disabled selected value="null">
            Product type
          </option>
          <option value="blush">Blush</option>
          <option value="bronzer">Bronzer</option>
          <option value="eyebrow">Eyebrow</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="eyeshadow">Eyeshadow</option>
          <option value="foundation">Foundation</option>
          <option value="lip_liner">Lip liner</option>
          <option value="lipstick">Lipstick</option>
          <option value="mascara">Mascara</option>
          <option value="nail_polish">Nail polish</option>
        </select>

        <button className="btn bg-white text-gray-800 border border-gray-400 hover:bg-white hover:border-gray-400 w-24">
          Apply
        </button>

        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-3/4 flex-shrink-0"
              id="search"
            />
            <button className="btn btn-square" action="" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className=" grid grid-cols-1 max-w sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3">
        {error && <div>{error}</div>}
        {isLoading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#be908c"
          />
        )}
        {!isLoading &&
          slicedArray.map((element) => {
            console.log(slicedArray);
            return (
              <StoreCard
                key={element.id}
                imageURL={element.api_featured_image}
                name={element.name}
                brand={element.brand}
                category={element.category}
                price={element.price}
                description={element.description}
                availableColors={element.product_colors}
              />
            );
          })}
      </div>
      {!isLoading && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Store;
