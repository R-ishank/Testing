import React from "react";
import Coupon from "./Coupon";
import Table from "./Table";
import Header from "./Header";
import Filtertab from "./Filtertab";
import Accordianfilter from "./Accordianfilter";
const App = () => {
  return (
    <div className="fontfamilyhome">
      <Header />
      <Filtertab />
      <Table />

      {/* CARDS */}
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <Coupon hasButtons={false} type="expired" hideDue={true} />
          <Coupon hasButtons={false} type="expired" />
          <Coupon hasButtons={false} type="expired" />
          <Coupon hasButtons={false} type="redeem" />
          <Coupon hasButtons={false} type="redeem" />
          <Coupon hasButtons={false} type="acknowledged" />
          <Coupon hasButtons={false} type="acknowledged" />
          <Coupon hasButtons={false} type="scanned" />
          <Coupon hasButtons={false} type="scanned" />
          <Coupon hasButtons={true} type="due" />
          <Coupon hasButtons={true} type="due" />
        </div>
      </div>
    </div>
  );
};

export default App;
