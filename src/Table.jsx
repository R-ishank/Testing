import React from 'react'

const Table = () => {
  return (
    <div className='container mx-auto p-2'>
      {/* Table */}
      <table className='w-full border border-3-grey rounded-xl shadow-md '>
        
        <tbody>
            <tr>
                <td className='text-red-600'>Due</td>
                <td className='border-r text-red-600'>28</td>
                <td className='text-green-400'>Redeem</td>
                <td className='text-green-400'>15</td>
            </tr>
            <tr>
                <td className='text-violet-400'>Scanned</td>
                <td className='border-r text-violet-400'>19</td>
                <td className='text-blue-400'>Acknowledged</td>
                <td className='text-blue-400'>1</td>
            </tr>
            <tr>
                <td className='text-black'>Future</td>
                <td className='border-r text-black'>14</td>
                <td className='text-red-400'>Expired</td>
                <td className='text-red-400'>0</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
// Table
