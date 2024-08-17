import React from 'react'

function Table({ children, col1, col2, col3, col4 }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-0 md:mx-44">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-white uppercase bg-gradient-3">
                <tr>
                    <th scope="col" className="p-3">
                        {col1}
                    </th>
                    <th scope="col" className="p-3">
                        {col2}
                    </th>
                    <th scope="col" className="p-3">
                        {col3}
                    </th>
                    <th scope="col" className="p-3">
                        {col4}
                    </th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
  )
}

export default Table