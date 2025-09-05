'use client'

export default function About() {
  const stats = [
    { number: '500+', label: '專案經驗' },
    { number: '20+', label: '服務年資' },
    { number: '100+', label: '企業客戶' },
    { number: '100%', label: '客戶滿意度' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-6">關於 NextITX</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            NextITX 是一家專業的軟體開發公司，致力於為企業提供全方位的IT解決方案。
            我們擁有豐富的軟體開發經驗，專精於數據分析、系統整合與創新技術應用。
            面對 AI 時代的來臨，我們進一步升級為企業資源整合專家，
            協助企業實現智能化的 IT 轉型與下一世代資訊服務。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">我們的使命</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              在 AI 驅動的數位新時代，協助企業實現全面的 IT 資源整合升級。
              我們結合人工智能、雲端運算、大數據分析等前沿技術，
              重新定義企業的 IT 維運管理和資源管理模式，
              打造真正智能化的下一世代資訊服務生態系統。
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">AI 驅動的智能化解決方案</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">企業資源整合升級專家</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">下一世代資訊服務架構</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">24/7 智能維運管理</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">核心價值</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">智能創新</h4>
                <p className="text-gray-600">整合 AI 技術與傳統 IT，創造智能化競爭優勢</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">資源整合</h4>
                <p className="text-gray-600">全面整合企業 IT 資源，實現最佳效能配置</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">轉型夥伴</h4>
                <p className="text-gray-600">陪伴企業走向 AI 時代，共創下一世代成功</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">持續進化</h4>
                <p className="text-gray-600">不斷升級技術架構，保持領先市場地位</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}