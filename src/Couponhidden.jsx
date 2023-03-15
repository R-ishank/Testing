import React from 'react'

const Couponhidden = (props) => {
    return (
        <div className={`coupon border border-3-grey shadow rounded-xl p-2`}>
            <div className="grid grid-cols-2 mb-2">
                <div className="left-part">
                    <p className='text-base'><b>Bhoomika Arora</b></p>
                    <p  className='text-xs'>ST NO-3 SHIVAJI PARK</p>
                    <p className='text-xs'>EKTP PH-4</p>
                    <p className='text-xs'>J-5/131</p>
                    <p className='text-xs'>Delhi-110032</p>
                </div>
                <div className="right-part text-right">
                    <p className={`text-black:  " text-base" }`}><b>EKT0034244X</b></p>
                    <p className='text-xs'>OCT 2023</p>
                    <br />
                    <p className='text-xs'><b>THE TIMES OF INDIA</b></p>
                    
                </div>
            </div>
            <hr />
            <hr />

            <div className="flex items-center h-3/6 text-center text-sm mt-2 ">
                <p className='w-full'>SHAHDARA / 0021692713 / 0021665321</p>
            </div>
        </div>
    )
}

export default Couponhidden