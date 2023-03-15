import React from 'react'
import Coupon from './Coupon'
import Table from './Table'
import Header from './Header'
const App = () => {
  return (
    <div className='fontfamilyhome'>
        <Header/>

      <Table/>

      {/* CARDS */}
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} />
          <Coupon hasButtons={false} type="scanned" />
          <Coupon hasButtons={false} type="success" />
          <Coupon hasButtons={true} type="fail" />
          <Coupon hasButtons={true} type="fail" />

        </div>
      </div>
    </div>
  )
}

export default App