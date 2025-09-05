'use client'

export default function Hero() {
  return (
    <header role="banner">
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              NextITX
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-blue-100">
              AI 時代的企業資源整合專家
            </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            在 AI 時代，您的 IT 需要更全面的轉型！我們專精於 IT 企業資源整合升級，
            不論是 IT 維運管理或企業資源管理，都能協助您改造下一世代的資訊服務，
            透過智能化技術實現真正的數位轉型
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              了解服務項目
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              立即諮詢
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    </header>
  )
}