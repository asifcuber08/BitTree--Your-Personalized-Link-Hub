import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-pink-300 text-black font-bold flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} BitTree - All rights reserved!</p>
    </footer>
  )
}

export default Footer