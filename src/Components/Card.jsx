import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Card({ productId, productPrice, productImage, productTitle }) {

  return (
    <>
      <div className=" flex flex-col lg:w-[30%] lg:max-w-[30%] justify-center items-center  gap-2 sm:gap-4 shadow hover:scale-105 hover:border-gray-700 hover:border-spacing-8 hover:border ">
        <Link to={`/product/${productId}`}>
          <div className="h-1/6 my-5">{productTitle}</div>
          <div className="flex justify-center items-center p-2">
            <img className="max-w-[207px] h-4/6 " src={productImage} alt="" />
          </div>
          <div className="h-1/6 mb-6">{productPrice}</div>
          <button ></button>
        </Link>
      </div>
    </>
  );
}

export default Card;
