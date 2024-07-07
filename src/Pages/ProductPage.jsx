import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_PRODUCTS } from "../Constants/Api";
import { Card } from "flowbite-react";
function ProductPage() {
    const navigate = useNavigate();
  let { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios.get(`${API_PRODUCTS}/${id}`).then(function (response) {
      console.log(response.data);
      setProduct(response.data);
    });
  };
  return (
    <>
      {product && (
        <div className="hero bg-base-200 overflow-hidden min-h-screen">
          <div className="hero-content flex-col lg:flex-row justify-center items-center">
            <img
              src={product.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{product.title}</h1>
              <h1 className="text-2xl font-bold">{product.category}</h1>
              <p className="py-6">{product.description}</p>
              <p>{product.rating.rate}</p>
              <p>{product.rating.count}</p>
              <button className="btn btn-success">add to cart</button>
              <button className="btn btn-success ms-4" onClick={()=>{navigate('/')}}>Return to main page</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
