import React from 'react';
import Header from "./Header";
import { Link } from "react-router-dom";


const Card = ({ title, checkbox, monthYear, couponNo, dueDate }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" checked={checkbox} />
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="text-sm">{monthYear}</p>
    </div>
    <div className="border-t border-gray-200 my-2 py-2">
      <p className="text-sm font-medium">Coupon No: {couponNo}</p>
      <p className="text-sm">Due Date: {dueDate}</p>
    </div>
  </div>
);

const CouponCard = () => (
  <>
  <div>
    <Header/>
  </div>
  
  <div className="flex justify-around pt-1">   
      <button className="bg-blue-500 hover:bg-green-600 text-white py-1 px-1 rounded-lg space-x-4">Reddemed Due Coupons</button>
      <button className="bg-blue-500 hover:bg-green-600 text-white py-1 px-1 rounded-lg space-x-4">Future Coupons</button>
      <button className="bg-blue-500 hover:bg-green-600 text-white py-1 px-1 rounded-lg space-x-4">Redeemed Coupons</button>
      <button className="bg-blue-500 hover:bg-green-600 text-white py-1 px-1 rounded-lg space-x-4">Expired Coupons</button>

  </div>
    <div className='justify-items-center mx-2'>
      <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Jan 2023"
          couponNo="123456789"
          dueDate="Mar 31, 2023"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <Card
          title="Card Title"
          checkbox={true}
          monthYear="Feb 2023"
          couponNo="234567890"
          dueDate="Apr 30, 2023"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Mar 2023"
          couponNo="345678901"
          dueDate="May 31, 2023"
        />
      </div>
      {/* Add more cards here */}
    </div>
    </div>
    
{/* testing code */}
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>




<div class="container mx-auto py-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Future Coupons</h2>
        <div class="border-t border-gray-300 pt-4">
        <div className="p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Mar 2023"
          couponNo="345678901"
          dueDate="May 31, 2023"
        />
      </div>
      <div className="p-2">
        <Card
          title="Card Title"
          checkbox={false}
          monthYear="Mar 2023"
          couponNo="345678901"
          dueDate="May 31, 2023"
        />
      </div>
        </div>
      </div>
    </div>
</div>
  </>

);

export default CouponCard;