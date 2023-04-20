import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Card = ({ title, checkbox, monthYear, couponNo, dueDate,couponCount }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" checked={checkbox} />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm">{monthYear}</p>
    </div>
    <div className="border-t border-gray-200 my-2 py-2">
      <p className="text-sm ">Coupon No: {couponNo}</p>
      <p className="text-sm">Due Date: {dueDate}</p>
    </div>
    <div className=" flex border-t border-gray-200 my-2 py-2">
      <p className="text-sm ">Due Coupons: </p><br/><p className="text-sm pl-1 font-medium text-red-800"> {couponCount}</p>
    </div>
  </div>
);

const UserDetails = () => (
  <>
    <Header />

    <div className="lg:flex lg:justify-center pt-2 pl-2 ">
      <p className="drop-shadow-2xl text-red-800  text-2xl ">Rishank Tiwari</p>
    </div>
    <div className="flex lg:justify-center bg-white rounded-lg shadow-2xl pt-1">
      <div className="pt-3">
        <img src="/user.gif" />
      </div>
      <div className="pl-2">
        <p>sf-118</p>
        <p>Gaziabad-20100111</p>
        <p>Uttar Pradesh</p>
        <p>987654321</p>
        <p>xyz@gmail.com</p>
      </div>
    </div>
    <div className="lg:flex lg:justify-center lg:pr-0 pr-4 flex justify-end justify-items-end text-red-800 font-medium text-2xl mt-1">
      <h3>ORDERS</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3  mx-2">
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
        />
      </div>
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
          couponCount="5"
        />
      </div>
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
          couponCount="5"
        />
      </div>
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
          couponCount="5"
        />
      </div>
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
          couponCount="5"
        />
      </div>
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
          couponCount="5"
        />
      </div>
      <div className="  p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
        />
      </div>
    </div>
    <div className="flex justify-end mx-2" style={{paddingBottom:"50px"}}>
      <button className=" rounded-lg bg-red-600 text-white  py-2 px-10">
        REDEEM{" "}
      </button>
    </div>
  </>
);

export default UserDetails;
