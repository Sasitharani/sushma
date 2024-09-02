import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <header className=" text-white py-4 mb-10 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-xl font-bold">SIGMA CORP</span>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/about-us" className="text-white hover:text-gray-400">About</Link>
          <Link href="/contact-us" className="text-white hover:text-gray-400">Contact</Link>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          CLICK
        </button>
      </div>
    </header>
    </div>
  )
}
