import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Sasitharani. All rights reserved.
        </div>
        <div className="text-sm ml-auto">
          &copy; {new Date().getFullYear()} Sasitharani
        </div>
      </div>
    </footer>
    </div>
  )
}
