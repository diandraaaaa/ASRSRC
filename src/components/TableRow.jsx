import React from 'react'

function TableRow({text1, text2, text3, text4}) {
  return (
    <tr className="bg-white border-b hover:bg-[#F3FFF3]">
        <th scope="row" className="px-3 py-4 font-medium text-customBlack whitespace-nowrap">
            {text1}
        </th>
        <td className="px-3 py-4">
            {text2}
        </td>
        <td className="px-3 py-4">
            {text3}
        </td>
        <td className="px-3 py-4">
            {text4}
        </td>
    </tr>
  )
}

export default TableRow