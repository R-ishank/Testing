import React from 'react'

const Table = () => {
  return (
    <div className='container mx-auto p-2'>
      {/* Table */}

      <div className='w-full border border-3-grey rounded-xl shadow-md'>
        <table className='w-full'>

          <tbody>
            <tr>
              <td className='text-red-600 p-1'>Due</td>
              <td className='border-r text-red-600'>28</td>
              <td className='text-green-400 p-1'>Redeem</td>
              <td className='text-green-400'>15</td>
            </tr>
            <tr>
              <td className='text-violet-400 p-1'>Scanned</td>
              <td className='border-r text-violet-400'>19</td>
              <td className='text-blue-400 p-1'>Acknowledged</td>
              <td className='text-blue-400'>1</td>
            </tr>
            <tr>
              <td className='text-black p-1'>Future</td>
              <td className='border-r text-black'>14</td>
              <td className='text-red-400 p-1'>Expired</td>
              <td className='text-red-400'>0</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Table
// Table
