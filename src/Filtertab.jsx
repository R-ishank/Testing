import React from 'react'

const Filtertab = () => {
  return (
    <div className='container mx-auto p-2'>
      <table className='w-full border border-3-grey rounded-xl shadow-md'>
        <tbody>
            <td className='text-black-600'>Due</td>
            <td className='text-black-600'>Redeemed</td>
        </tbody>
      </table>
    </div>
  )
}

export default Filtertab