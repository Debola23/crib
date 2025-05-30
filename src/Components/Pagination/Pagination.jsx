import React from 'react'

export const Pagination = () => {
  return (
    <div className="mb-[4rem]">
      <div className="flex justify-center mt-8">
        <nav className="flex flex-wrap justify-center items-center border rounded-lg shadow-sm overflow-hidden">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white text-gray-600 hover:bg-gray-100 border-r">
            Prev
          </button>

          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white text-gray-700 hover:bg-gray-100 border-r">
            1
          </button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white text-gray-700 hover:bg-gray-100 border-r">
            2
          </button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-white bg-red-600 border-r">
            3
          </button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white text-gray-700 hover:bg-gray-100 border-r">
            4
          </button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white text-gray-700 hover:bg-gray-100 border-r">
            5
          </button>

          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </nav>
    </div>
  </div>
  )
}
