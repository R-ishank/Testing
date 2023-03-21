import React, { useEffect } from "react";
import Header from "./Header";

const Accordianfilter = () => {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="fontfamilyhome">
        <Header />
        <div className="border-2  shadow rounded-xl">
          <div className="text-red-600 flex justify-between justify-items-center">
            <p className="p-2">Filter</p>
            <img className="crossclose" src="/close.png"></img>
          </div>

          <button className="accordion">Dealer</button>
          <div className="panel">
            <div className="option">
              <option className="">Rishank</option>
            </div>
            <div className="option">
              <option>jatin</option>
            </div>
            <div className="option">
              <option>Rishank1</option>
            </div>
          </div>

          <button className="accordion">Sales Executive</button>
          <div className="panel">
            <select className="option">
              <option>Rishank</option>
              <option>Mahesh</option>
              <option>Jatin</option>
            </select>
          </div>

          <button className="accordion">Depot</button>
          <div className="panel">
            <select className="option">
              <option>Rishank</option>
              <option>Mahesh</option>
              <option>Jatin</option>
            </select>
          </div>

          <button className="accordion">Publication</button>
          <div className="panel">
            <select className="option">
              <option>Rishank</option>
              <option>Mahesh</option>
              <option>Jatin</option>
            </select>
          </div>

          <button className="accordion">Status</button>
          <div className="panel">
            <select className="option">
              <option>Rishank</option>
              <option>Mahesh</option>
              <option>Jatin</option>
            </select>
          </div>

          <button className="accordion">Customer</button>
          <div className="panel">
            <input
              className="w-full rounded-md border-2 mb-3 "
              placeholder="Customer Name/Customer Code/Coupon Number"
            ></input>
          </div>

          <button className="accordion">Status</button>
          <div className="panel">
            <select className="option">
              <option>All</option>
              <option>Due</option>
              <option>Scanned</option>
            </select>
          </div>

          <button className="accordion">Date</button>
          <div className="panel pb-5">
            <div className=" max-sm-12">
              <div className="mb-3">
                <span className="text-gray-500">From:</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                  />
                </div>
              </div>
              <div className="">
                <span className="text-gray-500">To:</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="p-5 flex justify-between justify-items-center">
        <button class="border-solid border-2 bg-sky-500/100 p-2 border-rose-600">Submit </button>
        <button class="border-solid border-2 p-2 border-rose-600">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Accordianfilter;
