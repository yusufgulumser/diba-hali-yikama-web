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

    // Re-observe all elements when activeTab changes
    const observeElements = () => {
      document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
      });
    };

    // Initial observation
    observeElements();
    
    // Re-observe after a short delay to catch dynamically added elements
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [activeTab]); // Add activeTab to dependencies

  // Ev kullanıcıları için detaylı fiyat listesi
  const residentialServices = [
    {
      category: 'Halı Temizliği',
      icon: '🏠',
      color: '#667eea',
      items: [
        { name: 'Makina Halısı', price: 25, unit: 'm²', description: 'Standard makina dokuması halılar', popular: true },
        { name: 'El Dokuması Halı', price: 45, unit: 'm²', description: 'El dokuması ve antika halılar' },
        { name: 'Yün Halı', price: 35, unit: 'm²', description: 'Doğal yün elyaflı halılar' },
        { name: 'Shaggy Halı', price: 30, unit: 'm²', description: 'Uzun tüylü modern halılar' },
        { name: 'Kilim & Düz Dokuma', price: 20, unit: 'm²', description: 'İnce dokuma kilim ve yer minderleri' }
      ]
    },
    {
      category: 'Koltuk & Mobilya',
      icon: '🛋️',
      color: '#f093fb',
      items: [
        { name: 'Tekli Koltuk', price: 150, unit: 'adet', description: 'Berjer ve tekli koltuklar', popular: true },
        { name: 'İkili Koltuk', price: 250, unit: 'adet', description: 'İki kişilik koltuklar' },
        { name: 'Üçlü Koltuk', price: 350, unit: 'adet', description: 'Üç kişilik koltuklar' },
        { name: 'Köşe Takımı', price: 800, unit: 'takım', description: 'L şeklinde köşe takımları' },
        { name: 'Yemek Sandalyesi', price: 35, unit: 'adet', description: 'Kumaş kaplı yemek sandalyeleri' }
      ]
    },
    {
      category: 'Yatak & Uyku Sistemleri',
      icon: '🛏️',
      color: '#4facfe',
      items: [
        { name: 'Tek Kişilik Yatak', price: 150, unit: 'adet', description: '90x190 tek kişilik yatak', popular: true },
        { name: 'Çift Kişilik Yatak', price: 200, unit: 'adet', description: '160x200 çift kişilik yatak' },
        { name: 'King Size Yatak', price: 250, unit: 'adet', description: '180x200 king size yatak' },
        { name: 'Yastık Temizliği', price: 25, unit: 'adet', description: 'Tüm yastık çeşitleri' },
        { name: 'Yorgan Temizliği', price: 75, unit: 'adet', description: 'Yorgan ve nevresim takımları' }
      ]
    },
    {
      category: 'Perde & Tekstil',
      icon: '🪟',
      color: '#10b981',
      items: [
        { name: 'Stor Perde', price: 15, unit: 'm²', description: 'Zebra ve rollo stor perdeler' },
        { name: 'Klasik Perde', price: 20, unit: 'm²', description: 'Fon ve tül perdeler' },
        { name: 'Blackout Perde', price: 25, unit: 'm²', description: 'Kalın karartma perdeleri' },
        { name: 'Jaluzi Temizliği', price: 12, unit: 'm²', description: 'Ahşap ve PVC jaluziler' }
      ]
    },
    {
      category: 'Özel Hizmetler',
      icon: '✨',
      color: '#f59e0b',
      items: [
        { name: 'Leke Çıkarma', price: 50, unit: 'işlem', description: 'Özel leke çıkarma işlemi' },
        { name: 'Koku Giderme', price: 40, unit: 'işlem', description: 'Koku giderme ve deodorize' },
        { name: 'Antibakteriyel Uygulama', price: 30, unit: 'işlem', description: 'Hijyen ve dezenfeksiyon' },
        { name: 'Express Teslimat', price: 100, unit: 'hizmet', description: '24 saat içinde teslimat' }
      ]
    }
  ];

  // İşletmeler için paketler
  const commercialPackages = [
    {
      id: 'restaurant-chair',
      name: 'Restoran Sandalye Paketi',
      popular: true,
      price: 1899,
      originalPrice: 2299,
      unit: 'paket',
      description: 'Restoran ve kafe işletmeleri için sandalye temizlik paketi',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        '50 Adet Sandalye Temizliği',
        'Leke ve Kir Giderme',
        'Antibakteriyel Uygulama',
        'Hızlı Kurutma Sistemi',
        'Çalışma Saatleri Dışında Hizmet',
        'Hijyen Sertifikası',
        'Aylık Bakım Seçeneği',
        'Ücretsiz Keşif'
      ]
    },
    {
      id: 'office-carpet-chair',
      name: 'Ofis Halı & Mobilya Paketi',
      popular: false,
      price: 2499,
      originalPrice: 2999,
      unit: 'paket',
      description: 'Ofisler için komple halı ve mobilya temizlik çözümü',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        'Ofis Halısı (100m² ye kadar)',
        'Ofis Sandalyeleri (30 adet)',
        'Meeting Room Temizliği',
        'Koltuk ve Mobilya Temizliği',
        'Antibakteriyel Dezenfeksiyon',
        'UV Sterilizasyon',
        'Mesai Saatleri Dışında Hizmet',
        'Çeyreklik Bakım Planı'
      ]
    },
    {
      id: 'hotel-complete',
      name: 'Otel Komple Temizlik',
      popular: false,
      price: 4999,
      originalPrice: 5999,
      unit: 'paket',
      description: 'Otel ve konaklama işletmeleri için kapsamlı temizlik',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: [
        'Tüm Oda Halıları',
        'Lobı ve Ortak Alan Halıları',
        'Koltuk ve Sandalye Temizliği',
        'Perde ve Stor Temizliği',
        'Yatak ve Yastık Hijyeni',
        'Premium UV Sterilizasyon',
        '24/7 Acil Müdahale Hattı',
        'Müşteri Memnuniyet Garantisi'
      ]
    },
    {
      id: 'clinic-hygiene',
      name: 'Klinik & Sağlık Merkezi',
      popular: false,
      price: 3299,
      originalPrice: 3799,
      unit: 'paket',
      description: 'Sağlık kuruluşları için özel hijyen paketi',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      features: [
        'Medikal Grade Temizlik',
        'Hasta Sandalyesi Hijyeni',
        'Bekleme Salonu Temizliği',
        'Antibakteriyel & Antiviral',
        'Hastane Standartı Sterilizasyon',
        'Özel Hijyen Protokolü',
        'Sertifikalı Temizlik Ekibi',
        'Haftalık Bakım Seçeneği'
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

      {/* Content Based on Active Tab */}
      {activeTab === 'residential' ? (
        // Ev kullanıcıları için tekli fiyatlar
        <section className={styles.servicesSection} id="services" data-animate>
          <div className="container">
            <div className={`${styles.sectionHeader} ${isVisible('services') || activeTab === 'residential' ? 'fade-in visible' : 'fade-in'}`}>
              <span className={styles.sectionLabel}>🏠 Ev Kullanıcıları</span>
              <h2 className={styles.sectionTitle}>
                Birim Fiyatlarımızla İhtiyacınız Kadar Hizmet Alın
              </h2>
              <p className={styles.sectionDescription}>
                Sadece ihtiyacınız olan hizmetler için ödeme yapın. Paket zorunluluğu yok!
              </p>
            </div>
            
            <div className={`${styles.servicesContainer} ${isVisible('services') || activeTab === 'residential' ? 'fade-in visible' : 'fade-in'}`}>
              {residentialServices.map((category, index) => (
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
                      <div key={idx} className={`${styles.serviceItem} ${item.popular ? styles.popularService : ''}`}>
                        <div className={styles.serviceInfo}>
                          <h4 className={styles.serviceName}>
                            {item.name}
                            {item.popular && <span className={styles.popularTag}>Popüler</span>}
                          </h4>
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
      ) : (
        // İşletmeler için paketler
        <section className={styles.packagesSection} id="packages" data-animate>
          <div className="container">
            <div className={`${styles.sectionHeader} ${isVisible('packages') || activeTab === 'commercial' ? 'fade-in visible' : 'fade-in'}`}>
              <span className={styles.sectionLabel}>🏢 İşletmeler</span>
              <h2 className={styles.sectionTitle}>
                İş Yerinize Özel Hazırlanmış Paket Çözümler
              </h2>
            </div>
            
            <div className={`${styles.packagesContainer} ${isVisible('packages') || activeTab === 'commercial' ? 'fade-in visible' : 'fade-in'}`}>
              {commercialPackages.map((pkg, index) => (
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
      )}

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
