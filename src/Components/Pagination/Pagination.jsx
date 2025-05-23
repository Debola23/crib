import React from 'react'

export const Pagination = () => {
  return (
    <div className='mb-[4rem]'>
        <div className="flex justify-center mt-8">
            <nav className="inline-flex items-center border rounded-lg shadow-sm overflow-hidden">
                <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 border-r">Prev</button>

                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r">1</button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r">2</button>
                <button className="px-4 py-2  text-white bg-red-600 border-r">3</button> 
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r">4</button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 border-r">5</button>

                <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100">Next</button>
            </nav>
        </div>
    </div>
  )
}
