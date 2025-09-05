'use client'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NextITX",
    "alternateName": "NextITX 企業資源整合",
    "url": "https://nextitx.pages.dev",
    "logo": "https://nextitx.pages.dev/logo.png",
    "description": "AI 時代的企業資源整合專家，專業軟體開發公司，20年經驗專精 AI 智能整合、IT 維運管理、企業資源整合",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "和平路164號",
      "addressLocality": "屏東市",
      "addressRegion": "屏東縣",
      "postalCode": "90000",
      "addressCountry": "TW"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+886-8-732-6789",
      "contactType": "customer service",
      "availableLanguage": ["Chinese", "English"]
    },
    "email": "info@nextitx.com.tw",
    "foundingDate": "2004",
    "employees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "sameAs": [
      "https://www.facebook.com/NextITX",
      "https://www.linkedin.com/company/nextitx"
    ],
    "knowsAbout": [
      "軟體開發",
      "AI 人工智能",
      "IT 維運管理",
      "企業資源整合",
      "數據分析",
      "機器學習",
      "雲端服務",
      "自動化"
    ],
    "serviceArea": {
      "@type": "State",
      "name": "台灣"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "軟體開發與 AI 整合服務",
    "provider": {
      "@type": "Organization",
      "name": "NextITX"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NextITX 服務項目",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "軟體開發",
            "description": "客製化軟體開發、Web應用程式、行動應用程式開發"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI 智能整合",
            "description": "人工智能技術整合、機器學習應用、智能化系統升級"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT 維運管理",
            "description": "智能化 IT 維運、系統監控、自動化運維管理"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "企業資源整合",
            "description": "ERP 系統整合、企業流程優化、資源配置管理"
          }
        }
      ]
    },
    "areaServed": "台灣",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://nextitx.pages.dev",
      "serviceSmsNumber": "+886-8-732-6789"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nextitx.pages.dev",
    "name": "NextITX",
    "image": "https://nextitx.pages.dev/logo.png",
    "description": "AI 時代的企業資源整合專家，專業軟體開發公司",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "和平路164號",
      "addressLocality": "屏東市",
      "addressRegion": "屏東縣",
      "postalCode": "90000",
      "addressCountry": "TW"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.6687",
      "longitude": "120.4884"
    },
    "url": "https://nextitx.pages.dev",
    "telephone": "+886-8-732-6789",
    "email": "info@nextitx.com.tw",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首頁",
        "item": "https://nextitx.pages.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "關於我們",
        "item": "https://nextitx.pages.dev/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "服務項目",
        "item": "https://nextitx.pages.dev/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "產品方案",
        "item": "https://nextitx.pages.dev/#products"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "聯絡我們",
        "item": "https://nextitx.pages.dev/#contact"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "NextITX 主要提供什麼服務？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextITX 是 AI 時代的企業資源整合專家，主要提供軟體開發、AI 智能整合、IT 維運管理、企業資源整合、數據分析和下一世代轉型等服務。"
        }
      },
      {
        "@type": "Question",
        "name": "為什麼選擇 NextITX？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextITX 擁有 20年以上專業經驗，500+ 專案經驗，服務過 100+ 企業客戶，專精於 AI 智能化解決方案，提供客製化服務和合理透明的報價。"
        }
      },
      {
        "@type": "Question",
        "name": "NextITX 如何協助企業進行 AI 轉型？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我們提供完整的 AI 轉型服務，包括 AI 模型開發與部署、智能化系統升級、下一世代架構設計、智能化流程重塑，協助企業建構智能化的資訊服務生態系統。"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}