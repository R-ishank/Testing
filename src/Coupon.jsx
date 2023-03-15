import React from 'react'

const Coupon = (props) => {
    return (
        <div className={`coupon border border-1-grey shadow rounded-xl p-2 ${props.type == "success" ? "bg-green-200" : props.type == "fail" ? "bg-red-200" : ""}`}>
            <div className="grid grid-cols-2 mb-2">
                <div className="left-part">
                    <p><b>Bhoomika Arora</b></p>
                    <p>ST NO-3 SHIVAJI PARK</p>
                    <p>EKTP PH-4</p>
                    <p>J-5/131</p>
                    <p>Delhi-110032</p>
                </div>
                <div className="right-part text-right">
                    <p><b>EKT0034244X</b></p>
                    <p>OCT 2023</p>
                    <br />
                    <p><b>THE TIMES OF INDIA</b></p>
                    <p className='text-red-400'><b>Due on 09/03/2022</b></p>
                </div>
            </div>
            <hr />
            <hr />

            <div className="text-center mt-2">
                <p>SHAHDARA / 0021692713 / 0021665321</p>
            </div>

            <div className="flex justify-between mt-2">
                <button className='bg-green-300 text-white px-4 py-1 rounded'>Call Customer</button>
                <button className='bg-blue-300 text-white px-4 py-1 rounded'>SMS Customer</button>
            </div>
        </div>
    )
}

export default Coupon