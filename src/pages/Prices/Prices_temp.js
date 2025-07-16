import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Prices.module.css';

const Prices = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeTab, setActiveTab] = useState('residential');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Modern Pricing Plans Data
  const pricingPlans = {
    residential: {
      title: "Ev Kullanıcıları",
      subtitle: "Eviniz için en uygun paketler",
      icon: "🏠",
      packages: [
        {
          id: 'basic',
          name: 'Temel Paket',
          popular: false,
          price: 299,
          originalPrice: 399,
          unit: 'paket',
          description: 'Küçük evler için ideal başlangıç paketi',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          features: [
            'Halı Temizliği (max 10m²)',
            'Koltuk Temizliği (2 parça)',
            'Ücretsiz Alma-Teslim',
            '48 Saat İçinde Teslimat',
            'Temel Hijyen Sertifikası'
          ]
        },
        {
          id: 'premium',
          name: 'Premium Paket',
          popular: true,
          price: 799,
          originalPrice: 999,
          unit: 'paket',
          description: 'En popüler seçim - Tam ev temizliği',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          features: [
            'Halı Temizliği (max 25m²)',
            'Tam Koltuk Takımı (3+2+1)',
            'Yatak Temizliği (2 adet)',
            'Perde Temizliği (4 panel)',
            'UV Sterilizasyon',
            'Leke Koruma Uygulaması',
            'Ücretsiz Alma-Teslim',
            '24 Saat Express Teslimat',
            'Premium Hijyen Sertifikası',
            '6 Ay Garanti'
          ]
        },
        {
          id: 'luxury',
          name: 'Lüks Paket',
          popular: false,
          price: 1499,
          originalPrice: 1899,
          unit: 'paket',
          description: 'Komple ev için ultra lüks hizmet',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          features: [
            'Sınırsız Halı Temizliği',
            'Tüm Mobilya Temizliği',
            'Yatak & Yastık Temizliği',
            'Perde & Stor Temizliği',
            'Nano Koruma Uygulaması',
            'Premium UV Sterilizasyon',
            'Alerjen Temizliği',
            'Koku Giderme Sistemi',
            'Same Day Teslimat',
            'VIP Müşteri Hattı',
            '1 Yıl Garanti',
            'Aylık Bakım Kontrolü'
          ]
        }
      ]
    },
    commercial: {
      title: "İşletmeler",
      subtitle: "Ofis ve ticari alanlar için çözümler",
      icon: "🏢",
      packages: [
        {
          id: 'office',
          name: 'Ofis Paketi',
          popular: true,
          price: 1299,
          originalPrice: 1599,
          unit: 'paket',
          description: 'Küçük-orta ölçekli ofisler için',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          features: [
            'Ofis Halıları (max 50m²)',
            'Koltuk & Sandalye Temizliği',
            'Meeting Room Temizliği',
            'Antibakteriyel Uygulama',
            'Çalışma Saatleri Dışında Hizmet',
            'Hijyen Sertifikası',
            'Aylık Abonelik İmkanı'
          ]
        },
        {
          id: 'hotel',
          name: 'Otel & Restoran',
          popular: false,
          price: 2999,
          originalPrice: 3499,
          unit: 'paket',
          description: 'Konaklama ve yeme-içme işletmeleri',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          features: [
            'Tüm Oda Halıları',
            'Lobı & Ortak Alan Temizliği',
            'Restoran Koltukları',
            'Perde & Stor Sistemleri',
            'Günlük Bakım Seçeneği',
            'Premium Hijyen Protokolü',
            '24/7 Acil Müdahale',
            'Müşteri Memnuniyet Garantisi'
          ]
        }
      ]
    }
  };

  // Individual Services Data
  const individualServices = [
    {
      category: 'Halı Temizliği',
      icon: '🏠',
      color: '#667eea',
      items: [
        { name: 'Makina Halısı', price: 25, unit: 'm²', description: 'Standard halı temizliği' },
        { name: 'El Dokuması', price: 45, unit: 'm²', description: 'Özel bakım gerektirir' },
        { name: 'Yün Halı', price: 35, unit: 'm²', description: 'Doğal elyaf temizliği' },
        { name: 'Shaggy Halı', price: 30, unit: 'm²', description: 'Uzun tüylü halılar' },
        { name: 'Kilim', price: 20, unit: 'm²', description: 'İnce dokuma kilimler' }
      ]
    },
    {
      category: 'Koltuk & Mobilya',
      icon: '🛋️',
      color: '#f093fb',
      items: [
        { name: 'Tekli Koltuk', price: 150, unit: 'adet', description: 'Berjer ve tekli koltuklar' },
        { name: 'İkili Koltuk', price: 250, unit: 'adet', description: 'İki kişilik koltuklar' },
        { name: 'Üçlü Koltuk', price: 350, unit: 'adet', description: 'Üç kişilik koltuklar' },
        { name: 'Köşe Takımı', price: 800, unit: 'takım', description: 'L şeklinde köşe takımları' },
        { name: 'Chester Koltuk', price: 400, unit: 'adet', description: 'Klasik chester koltuklar' }
      ]
    },
    {
      category: 'Yatak & Uyku Sistemleri',
      icon: '🛏️',
      color: '#4facfe',
      items: [
        { name: 'Yatak (Tek)', price: 150, unit: 'adet', description: '90x190 tek kişilik' },
        { name: 'Yatak (Çift)', price: 200, unit: 'adet', description: '160x200 çift kişilik' },
        { name: 'Yatak (King)', price: 250, unit: 'adet', description: '180x200 king size' },
        { name: 'Yastık', price: 25, unit: 'adet', description: 'Tüm yastık tipleri' },
        { name: 'Yorgan', price: 75, unit: 'adet', description: 'Yorgan temizliği' }
      ]
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.prices}>
      {/* Hero Section */}
      <section className={styles.hero} id="hero" data-animate>
        <div className={styles.heroBackground}>
          <div className={styles.heroShapes}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
          </div>
        </div>
        
        <div className="container">
          <div className={`${styles.heroContent} ${isVisible('hero') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.heroLabel}>💰 Şeffaf Fiyatlandırma</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>Diba Halı Yıkama</span>
              <span className={styles.titleSub}>Fiyat Listesi 2025</span>
            </h1>
            <p className={styles.heroDescription}>
              Şeffaf fiyatlarımız ile kaliteli hizmeti uygun maliyetle alın. 
              Gizli ücret yok, sürpriz fatura yok!
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>%30</span>
                <span className={styles.statLabel}>Tasarruf</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>0₺</span>
                <span className={styles.statLabel}>Ek Ücret</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24sa</span>
                <span className={styles.statLabel}>Teslimat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection Tabs */}
      <section className={styles.tabsSection} id="tabs" data-animate>
        <div className="container">
          <div className={`${styles.tabsContainer} ${isVisible('tabs') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.tabButtons}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'residential' ? styles.active : ''}`}
                onClick={() => setActiveTab('residential')}
              >
                <span className={styles.tabIcon}>🏠</span>
                <span>Ev Kullanıcıları</span>
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'commercial' ? styles.active : ''}`}
                onClick={() => setActiveTab('commercial')}
              >
                <span className={styles.tabIcon}>🏢</span>
                <span>İşletmeler</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className={styles.packagesSection} id="packages" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('packages') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>
              {pricingPlans[activeTab].icon} {pricingPlans[activeTab].title}
            </span>
            <h2 className={styles.sectionTitle}>
              {pricingPlans[activeTab].subtitle}
            </h2>
          </div>
          
          <div className={`${styles.packagesContainer} ${isVisible('packages') ? 'fade-in visible' : 'fade-in'}`}>
            {pricingPlans[activeTab].packages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className={styles.popularBadge}>
                    <span>En Popüler</span>
                  </div>
                )}
                
                <div className={styles.packageHeader} style={{ background: pkg.gradient }}>
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                  <div className={styles.packagePrice}>
                    <span className={styles.price}>{pkg.price}₺</span>
                    {pkg.originalPrice && (
                      <span className={styles.originalPrice}>{pkg.originalPrice}₺</span>
                    )}
                    <span className={styles.unit}>/{pkg.unit}</span>
                  </div>
                  <p className={styles.packageDescription}>{pkg.description}</p>
                </div>
                
                <div className={styles.packageBody}>
                  <div className={styles.packageFeatures}>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <i className="fas fa-check"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className={styles.packageAction}>
                    <span>Bu Paketi Seç</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className={styles.servicesSection} id="services" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('services') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>📋 Birim Fiyatlar</span>
            <h2 className={styles.sectionTitle}>
              Tekil Hizmet Fiyatları
            </h2>
            <p className={styles.sectionDescription}>
              İhtiyacınıza göre tekil hizmetlerimizi de tercih edebilirsiniz
            </p>
          </div>
          
          <div className={`${styles.servicesContainer} ${isVisible('services') ? 'fade-in visible' : 'fade-in'}`}>
            {individualServices.map((category, index) => (
              <div 
                key={category.category} 
                className={styles.serviceCategory}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon} style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                </div>
                
                <div className={styles.categoryServices}>
                  {category.items.map((item, idx) => (
                    <div key={idx} className={styles.serviceItem}>
                      <div className={styles.serviceInfo}>
                        <h4 className={styles.serviceName}>{item.name}</h4>
                        <p className={styles.serviceDescription}>{item.description}</p>
                      </div>
                      <div className={styles.servicePrice}>
                        <span className={styles.price}>{item.price}₺</span>
                        <span className={styles.unit}>/{item.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="cta" data-animate>
        <div className="container">
          <div className={`${styles.ctaContent} ${isVisible('cta') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.ctaText}>
              <h2>Özel Teklifinizi Alın</h2>
              <p>
                Daha büyük projeler için özel fiyat teklifleri hazırlıyoruz. 
                Ücretsiz keşif ve detaylı fiyat teklifi için iletişime geçin.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaPrimary}>
                <span>Teklif Al</span>
                <i className="fas fa-calculator"></i>
              </Link>
              <a href="tel:+905001234567" className={styles.ctaSecondary}>
                <i className="fas fa-phone"></i>
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
