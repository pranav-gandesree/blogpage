import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { Search, Phone, ChevronDown } from 'lucide-react'
import location from "../assets/location.svg"

const NavItem = ({ label, hasDropdown }) => (
  <li className="relative group">
    <a href="#" className="text-gray-300 hover:text-white flex items-center px-3 py-2">
      {label}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </a>
    {hasDropdown && (
      <ul className="absolute hidden group-hover:block bg-[#1F1F1F] text-gray-300 py-2 mt-1 min-w-[150px]">
        <li><a href="#" className="block px-4 py-2 ">Submenu 1</a></li>
        <li><a href="#" className="block px-4 py-2 ">Submenu 2</a></li>
        <li><a href="#" className="block px-4 py-2">Submenu 3</a></li>
      </ul>
    )}
  </li>
)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#1F1F1F] text-white h-24 md:h-32"> 
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2"> 
          <div className="flex items-center h-[46px]">
            <a href="/" className="w-16 font-bold text-2xl">
                <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for..."
                className="text-[#ffffff] py-2 px-4 pl-10 w-[712px] h-[50px] focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1 text-red-500" />
              <span>1800-4190-525</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <img src={location} alt='location logo' />
              <div className='flex flex-col h-8'>
                <span>Nearby Stores</span>
                <span>Get Direction</span>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden"> 
            <Search className="w-6 h-6 text-gray-400 mr-4" /> 
            <button
              className="mr-2" // Add margin for spacing
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-[#1F1F1F]`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-col md:flex-row justify-center py-2">
            <NavItem label="Smartphone" hasDropdown />
            <NavItem label="Feature Phones" />
            <NavItem label="Smart TV" hasDropdown />
            <NavItem label="Smart Gadgets" hasDropdown />
            <NavItem label="Home Care" />
            <NavItem label="Personal Care" />
            <NavItem label="About Us" />
            <NavItem label="Support" hasDropdown />
          </ul>
        </div>
      </div>
    </nav>
  )
}
