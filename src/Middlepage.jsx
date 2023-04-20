import React, { useEffect } from "react";
import Header from "./Header";

const Card = ({ title, checkbox, monthYear, couponNo, dueDate }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" checked={checkbox} />
        <h3 className="text-lg ">{title}</h3>
      </div>
      <p className="text-sm">{monthYear}</p>
    </div>
    <div className="border-t border-gray-200 my-2 py-2">
      <p className="text-sm ">Coupon No: {couponNo}</p>
      <p className="text-sm">Due Date: {dueDate}</p>
    </div>
  </div>
);
const Card1 = ({ title, monthYear, couponNo, dueDate }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <h3 className="text-lg ">{title}</h3>
      </div>
      <p className="text-sm">{monthYear}</p>
    </div>
    <div className="border-t border-gray-200 my-2 py-2">
      <p className="text-sm ">Coupon No: {couponNo}</p>
      <p className="text-sm">Due Date: {dueDate}</p>
    </div>
  </div>
);

const Accordianfilter1 = () => {
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

        <div className="flex justify-center pt-.5 ">
          <p className="drop-shadow-2xl text-red-800 text-xl">
            Redeem e-Coupon
          </p>
        </div>
        <div className="flex justify-center pt-.5 ">
          <p>Following coupon details are related to Order:</p>
        </div>
        <div className="flex justify-center pt-.5 ">
          <p className="drop-shadow-2xl text-red-800 text-lg">123456</p>
        </div>
        <div className="border-2  shadow rounded-xl ">
          <button className="accordion">Redeem Due Coupons</button>
          <div className="panel">
            <div className="lg:flex lg:justify-center flex justify-end mx-2">
              <button className="rounded-lg bg-red-600 text-white   py-2 px-10">
                REDEEM{" "}
              </button>
            </div>

            <div className="lg:flex lg:justify-between mx-2">
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
            </div>
          </div>
          {/* Redeem Due Coupons END */}
          <button className="accordion">Future Coupons</button>
          <div className="panel">
            <div className="lg:flex lg:justify-center flex justify-end mx-2">
              <button className="rounded-lg bg-red-600 text-white ml-1 py-2 px-10">
                REDEEM{" "}
              </button>
              <button className="rounded-lg bg-red-600 text-white ml-1 py-2 px-10">
                REVOKE{" "}
              </button>
            </div>
            <div className="lg:flex lg:justify-between mx-2">
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
            </div>
          </div>
          {/* Future Coupons END */}
          <button className="accordion">Redeemed Coupons</button>
          <div className="panel">
            <div className="lg:flex lg:justify-between mx-2">
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
            </div>
          </div>
          {/* Redeemed Coupons END */}
          <button className="accordion">Expired Coupons</button>
          <div className="panel">
            <div className="lg:flex lg:justify-between mx-2">
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 p-2">
                <Card1
                  title="Card Title"
                  checkbox={false}
                  monthYear="Feb 2023"
                  couponNo="234567890"
                  dueDate="Apr 30, 2023"
                />
              </div>
            </div>
          </div>
          {/* Expired Coupons END */}
        </div>

        {/* Buttons */}
        <div className="p-5 flex justify-end justify-items-center">
          <button className="rounded-lg bg-red-600 text-white  py-2 px-10">
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordianfilter1;
