import React from 'react'

const Table = () => {
  return (
    <div className='container mx-auto p-2'>
      {/* Table */}
      <table className='w-full border border-3-grey rounded'>
        <tbody>
            <tr>
                <td>Due</td>
                <td className='border-1-grey'>28</td>
                <td>Redeem</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Scanned</td>
                <td>19</td>
                <td>Acknowledged</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Future</td>
                <td>14</td>
                <td>Expired</td>
                <td>0</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
// Table
