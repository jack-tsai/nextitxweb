'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            NextIT
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              首頁
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              關於我們
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              服務項目
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              產品方案
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              聯絡我們
            </button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`bg-gray-700 transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`bg-gray-700 transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600">首頁</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600">關於我們</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-600">服務項目</button>
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-blue-600">產品方案</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600">聯絡我們</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}