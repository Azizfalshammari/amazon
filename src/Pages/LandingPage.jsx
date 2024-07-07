import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import axios from "axios";
import { API_PRODUCTS } from "../Constants/Api";
import Card from "../Components/Card";
function LandingPage() {
  const [AllProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState(AllProducts);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios.get(API_PRODUCTS).then(function (response) {
      console.log(response.data);
      setAllProducts(response.data);
    });
  };

  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(AllProducts);
      return;
    }
    const filterBySearch = AllProducts.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }
  return (
    <>
      <div className="flex flex-col w-full  overflow-hidden">
        <Navbar />
        <input type="text" />
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="w-full">
              <div className="flex flex-wrap w-full justify-center overflow-hidden">
                <div>
                  <input
                    className="input input-bordered join-item bg-white"
                    placeholder="Search"
                    onChange={(e)=>{setSearchVal(e.target.value)}}
                  />
                </div>
                <button className="btn btn-outline btn-primary"onClick={handleSearchClick}>Search</button>
                {AllProducts.map((product, index) => {
                  return (
                    <Card
                      key={index}
                      productId={product.id}
                      productPrice={product.price}
                      productImage={product.image}
                      productTitle={product.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
