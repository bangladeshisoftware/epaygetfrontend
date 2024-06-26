"use clint";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { toast } from "react-toastify";
import ApiRequest from "@/app/_lib/Api_request";

function Balance() {
  const [balance, setbalance] = useState(0);
  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = async () => {
    const response = await ApiRequest({
      url: "/user",
      method: "get",
    });
    if (response.status == 200) {
      setbalance(response.data.user.balance);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="rounded-md mt-10 ml-0 lg:ml-5">
      <div className=" border shadow-lg mb-2 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Balance</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-4 px-1 lg:px-0 pb-5">
        <div className="border shadow-lg rounded-md  px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold "> {balance}</h2>
            </div>
            <div>
              <p>Total Balance</p>
            </div>
          </div>
        </div>

        <div className="border shadow-lg rounded-md  px-20 py-16 lg:py-8  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold "> {balance}</h2>
            </div>
            <div>
              <p>Weekly Balance</p>
            </div>
          </div>
        </div>
        <div className="border shadow-lg rounded-md  px-20 py-16 lg:py-8  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold "> {balance}</h2>
            </div>
            <div>
              <p>Monthly Balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
