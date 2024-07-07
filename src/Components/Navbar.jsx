import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  FlagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown, FaOpencart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const naviagate = useNavigate();
  return (
    <div className="flex max-sm:flex-col w-[90%] p-4 items-center gap-2 justify-between max-w-full overflow-hidden">
      <div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt=""
          className="w-[64px]"
        />
      </div>
      <div className="">
        deliever to <br />
        <div className="flex">
          <CiLocationOn />
          <span className="font-bold ">SAUDI ARABIA</span>
        </div>
      </div>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item bg-white"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item max-sm:hidden bg-gray-100">
          <option>Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <div className="indicator">
          <button className="btn join-item text-[black] bg-[#F3A847] hover:scale-110 hover:bg-white">
            Search
          </button>
        </div>
      </div>
      <div className="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png"
          alt=""
          className="w-[24px]"
        />
      </div>
      <div onClick={()=>{naviagate("/signup")}} className="cursor-pointer hover:scale-105">
        <div className="text-sm">Hello, sign in</div> <div>Account & Lists</div>
      </div>
      <div>
        <span className="text-sm">
          Returns <br />
        </span>{" "}
        and orders
      </div>
      <div>
        <FaCartArrowDown size={32} />
      </div>
    </div>
  );
}

export default Navbar;
