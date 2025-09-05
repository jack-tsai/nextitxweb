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
      icon: '🤖',
      title: 'AI 智能整合',
      description: '人工智能技術整合、機器學習應用、智能化系統升級',
      features: ['AI 模型開發與部署', '自然語言處理應用', '電腦視覺解決方案', '智能決策系統']
    },
    {
      icon: '📊',
      title: '數據分析',
      description: '大數據處理、商業智慧分析、AI 驅動的預測分析',
      features: ['數據視覺化', 'AI 預測分析模型', '商業智慧報表', '即時數據監控']
    },
    {
      icon: '⚙️',
      title: 'IT 維運管理',
      description: '智能化 IT 維運、系統監控、自動化運維管理',
      features: ['智能監控系統', '自動化故障處理', '效能優化分析', '24/7 維運支援']
    },
    {
      icon: '🏢',
      title: '企業資源整合',
      description: 'ERP 系統整合、企業流程優化、資源配置管理',
      features: ['ERP 系統客製化', '企業流程自動化', '資源配置優化', '跨系統數據整合']
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
      icon: '🚀',
      title: '下一世代轉型',
      description: 'AI 時代的數位轉型諮詢、下一世代資訊服務架構設計',
      features: ['AI 轉型策略規劃', '下一世代架構設計', '智能化流程重塑', '數位生態系統建構']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">服務項目</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 時代的全方位 IT 解決方案，從傳統軟體開發到智能化企業資源整合，
            協助您的企業實現下一世代的資訊服務升級轉型
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