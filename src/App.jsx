import React from 'react'
import Coupon from './Coupon'

const App = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="container mx-auto p-2 flex justify-between items-center">
        <img src="https://en.expensereduction.com/wp-content/uploads/2018/02/logo-placeholder.png" className='w-50 h-12' alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
      </div>



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
          <Coupon hasButtons={true} type="fail" />
          <Coupon hasButtons={true} type="fail" />
        </div>
      </div>
    </div>
  )
}

export default App