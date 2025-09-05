'use client'

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: '軟體開發',
      description: '客製化軟體開發、Web應用程式、行動應用程式開發',
      features: ['前端開發 (React, Vue, Angular)', '後端開發 (Node.js, Python, Java)', '資料庫設計與優化', '系統架構規劃']
    },
    {
      icon: '📊',
      title: '數據分析',
      description: '大數據處理、商業智慧分析、機器學習應用',
      features: ['數據視覺化', '預測分析模型', '商業智慧報表', '即時數據監控']
    },
    {
      icon: '🔧',
      title: 'IT 資訊整合',
      description: '系統整合、API串接、雲端服務部署與維護',
      features: ['第三方系統整合', 'API 設計與開發', '雲端架構部署', '系統自動化']
    },
    {
      icon: '☁️',
      title: '雲端服務',
      description: '雲端基礎設施、DevOps、持續整合與部署',
      features: ['AWS/Azure/GCP 部署', 'Docker 容器化', 'CI/CD 流程建置', '監控與維護']
    },
    {
      icon: '🛡️',
      title: '資訊安全',
      description: '系統安全評估、資安防護、合規性檢查',
      features: ['安全性測試', '資料加密', '存取控制', '合規性諮詢']
    },
    {
      icon: '📈',
      title: '數位轉型諮詢',
      description: '企業數位化策略規劃、流程優化、技術導入',
      features: ['數位化策略', '流程自動化', '技術選型建議', '變革管理']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">服務項目</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提供全方位的軟體開發與IT解決方案，從需求分析到系統上線，全程專業服務
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}