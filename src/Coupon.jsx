import React from 'react'

const Coupon = (props) => {
    return (
        <div className={`coupon border-2  shadow rounded-xl p-2 ${props.type == "redeem" ? "border-green-400" : props.type == "due" ? "border-red-600" : props.type == "scanned" ? "border-violet-400" : props.type == "acknowledged" ? "border-blue-400" : props.type == "future" ? "border-black" : props.type == "expired" ? "border-orange-400" :"border-grey"}`}>
            <div className="grid grid-cols-2 mb-2">
                <div className="left-part">
                    <p className='text-base'><b>Bhoomika Arora</b></p>
                    <p className='text-xs'>ST NO-3 SHIVAJI PARK</p>
                    <p className='text-xs'>EKTP PH-4</p>
                    <p className='text-xs'>J-5/131</p>
                    <p className='text-xs'>Delhi-110032</p>
                </div>
                <div className="right-part text-right">
                    <p className={`text-black ${props.type == "redeem" ? "text-green-400" : props.type == "due" ? "text-red-600" : props.type == "scanned" ? "text-violet-400" : props.type == "acknowledged" ? "text-blue-400" : props.type == "future" ? "text-black-400" : props.type == "expired" ? "text-orange-400" : " text-base"}`}><b>EKT0034244X</b></p>
                    <p className='text-xs'>OCT 2023</p>
                    <br />
                    <p className='text-xs'><b>THE TIMES OF INDIA</b></p>
                    {
                        props.hideDue ?
                            <></> :
                            <p className={`text-black ${props.type == "redeem" ? "text-green-400" : props.type == "due" ? "text-red-600" : props.type == "scanned" ? "text-violet-400" : props.type == "acknowledged" ? "text-blue-400" : props.type == "future" ? "text-black-400" : props.type == "expired" ? "text-orange-400" : "text-xs"}`}><b>Due on 09/03/2022</b></p>
                    }
                </div>
            </div>
            <hr />
            <hr />

            <div className={`text-center text-sm mt-2 ${props.hideDue ? 'lg:h-1/2 flex items-center' : ''}`}>
                <p className={`${props.hideDue ? 'w-full' : ''}`}>SHAHDARA / 0021692713 / 0021665321</p>
            </div>

            {
                props.hideDue ?
                    <></> :
                    <div className="flex justify-between mt-2">
                        <button className='bg-green-300 text-white px-4 py-1 rounded'>Call Customer</button>
                        <button className='bg-blue-300 text-white px-4 py-1 rounded'>SMS Customer</button>
                    </div>
            }
        </div>
    )
}

export default Coupon