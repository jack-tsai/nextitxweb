'use client'

export default function About() {
  const stats = [
    { number: '50+', label: '專案經驗' },
    { number: '5+', label: '服務年資' },
    { number: '20+', label: '企業客戶' },
    { number: '100%', label: '客戶滿意度' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">關於 NextIT</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            NextIT 是一家專業的軟體開發公司，致力於為企業提供全方位的IT解決方案。
            我們擁有豐富的軟體開發經驗，專精於數據分析、系統整合與創新技術應用。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">我們的使命</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              透過先進的軟體技術與深度的數據分析能力，協助企業數位轉型，
              提升營運效率，創造更大的商業價值。我們不只是技術供應商，
              更是您數位化路程上的戰略夥伴。
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">專業的技術團隊</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">客製化解決方案</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">持續的技術支援</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">核心價值</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">創新</h4>
                <p className="text-gray-600">持續採用最新技術，為客戶創造競爭優勢</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">專業</h4>
                <p className="text-gray-600">深耕技術領域，提供最專業的服務品質</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">合作</h4>
                <p className="text-gray-600">與客戶建立長期夥伴關係，共同成長</p>
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