'use client'

export default function Products() {
  const products = [
    {
      name: '企業ERP系統',
      category: '企業管理',
      description: '全方位企業資源規劃系統，整合財務、人事、庫存、銷售等模組',
      features: ['多模組整合', '即時報表', '行動裝置支援', '雲端部署'],
      price: '客製報價',
      highlight: false
    },
    {
      name: 'AI 數據分析平台',
      category: '數據智能',
      description: '運用機器學習技術，提供智能數據分析與預測功能',
      features: ['自動化報表', '預測分析', '視覺化儀表板', 'API 整合'],
      price: '月租方案',
      highlight: true
    },
    {
      name: '電商購物平台',
      category: '電子商務',
      description: '完整的電商解決方案，包含前台購物網站與後台管理系統',
      features: ['響應式設計', '金流串接', '庫存管理', 'SEO 優化'],
      price: '專案報價',
      highlight: false
    },
    {
      name: '雲端協作系統',
      category: '辦公協作',
      description: '企業內部協作平台，整合專案管理、文件共享、即時通訊',
      features: ['即時協作', '檔案管理', '權限控制', '行動 App'],
      price: '按人數計費',
      highlight: false
    }
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">產品方案</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            專為不同行業需求打造的軟體產品，提供完整的解決方案與技術支援
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${product.highlight ? 'border-2 border-blue-500 relative' : ''}`}>
              {product.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  推薦方案
                </div>
              )}
              
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">主要功能：</h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-6 flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">需要客製化解決方案？</h3>
            <p className="text-blue-200 mb-6">
              我們提供完全客製化的軟體開發服務，根據您的具體需求打造專屬的解決方案
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              聯絡我們討論
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}