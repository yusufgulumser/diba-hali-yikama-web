import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Prices.module.css';

const Prices = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalEstimate, setTotalEstimate] = useState(0);

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

  // Modern Pricing Data
  const pricingCategories = [
    {
      id: 'carpet',
      name: 'Halı Temizliği',
      icon: '🏠',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Her türlü halı için özel temizlik çözümleri',
      featured: true,
      services: [
        { 
          name: 'Makina Halısı', 
          price: 25, 
          unit: 'm²', 
          popular: true,
          description: 'Standard makina halısı derin temizlik',
          features: ['UV Sterilizasyon', 'Hızlı Kurutma', 'Leke Koruma']
        },
        { 
          name: 'El Dokuması Halı', 
          price: 45, 
          unit: 'm²', 
          premium: true,
          description: 'El dokuması halılar için özel bakım',
          features: ['Özel Temizlik', 'Renk Koruma', 'Form Korunması']
        },
        { 
          name: 'Yün Halı', 
          price: 35, 
          unit: 'm²',
          description: 'Doğal yün halılar için özel işlem',
          features: ['Doğal Temizlik', 'Antibakteriyel', 'Yumuşaklık']
        },
        { 
          name: 'Shaggy Halı', 
          price: 30, 
          unit: 'm²',
          description: 'Uzun tüylü halılar için derin temizlik',
          features: ['Tüy Bakımı', 'Hacim Koruma', 'Parlaklık']
        }
      ]
    },
    {
      id: 'furniture',
      name: 'Koltuk & Mobilya',
      icon: '🛋️',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Koltuk ve mobilya temizliği',
      services: [
        { 
          name: 'Koltuk Takımı (3+2+1)', 
          price: 800, 
          unit: 'takım', 
          popular: true,
          description: 'Tam koltuk takımı temizliği',
          features: ['Kumaş Koruma', 'Renk Tazeleme', 'Form Koruma']
        },
        { 
          name: 'Tekli Koltuk', 
          price: 200, 
          unit: 'adet',
          description: 'Tekli koltuk/berjer temizliği',
          features: ['Derin Temizlik', 'Koku Giderme', 'Hijyen']
        },
        { 
          name: 'L Köşe Takımı', 
          price: 1200, 
          unit: 'takım',
          description: 'Büyük köşe koltuk takımları',
          features: ['Geniş Alan', 'Detaylı Temizlik', 'Uzun Ömür']
        }
      ]
    },
    {
      id: 'bedroom',
      name: 'Yatak & Yatak Odası',
      icon: '🛌',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Sağlıklı uyku için hijyenik temizlik',
      services: [
        { 
          name: 'Tek Kişilik Yatak', 
          price: 300, 
          unit: 'adet',
          description: 'Tek kişilik yatak hijyen temizliği',
          features: ['Alerjen Temizlik', 'Bakterisidal', 'Koku Giderme']
        },
        { 
          name: 'Çift Kişilik Yatak', 
          price: 450, 
          unit: 'adet', 
          popular: true,
          description: 'Çift kişilik yatak derin temizlik',
          features: ['Derin Hijyen', 'Akar Kontrolü', 'Sertifikalı']
        },
        { 
          name: 'Yorgan & Yastık', 
          price: 150, 
          unit: 'takım',
          description: 'Yorgan ve yastık temizliği',
          features: ['Yumuşak Dokular', 'Hacim Koruma', 'Hijyen']
        }
      ]
    },
    {
      id: 'curtains',
      name: 'Perde & Tekstil',
      icon: '🪟',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      description: 'Ev tekstilleri için özel bakım',
      services: [
        { 
          name: 'Stor Perde', 
          price: 80, 
          unit: 'm²',
          description: 'Tüm stor perde türleri',
          features: ['Renk Koruma', 'Mekanizma Bakım', 'Anti-statik']
        },
        { 
          name: 'Klasik Perde', 
          price: 60, 
          unit: 'm²',
          description: 'Kumaş perdeler için özel temizlik',
          features: ['Kumaş Bakım', 'Büzgü Koruma', 'Renklilik']
        },
        { 
          name: 'Battaniye', 
          price: 120, 
          unit: 'adet',
          description: 'Her türlü battaniye temizliği',
          features: ['Yumuşaklık', 'Hacim Koruma', 'Hijyen']
        }
      ]
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  const filteredCategories = activeCategory === 'all' 
    ? pricingCategories 
    : pricingCategories.filter(cat => cat.id === activeCategory);

  const addToEstimate = (service, category) => {
    const newService = {
      id: Date.now(),
      name: service.name,
      price: service.price,
      unit: service.unit,
      category: category.name,
      quantity: 1
    };
    setSelectedServices(prev => [...prev, newService]);
    calculateTotal([...selectedServices, newService]);
  };

  const removeFromEstimate = (serviceId) => {
    const updated = selectedServices.filter(s => s.id !== serviceId);
    setSelectedServices(updated);
    calculateTotal(updated);
  };

  const updateQuantity = (serviceId, quantity) => {
    const updated = selectedServices.map(s => 
      s.id === serviceId ? { ...s, quantity: Math.max(1, quantity) } : s
    );
    setSelectedServices(updated);
    calculateTotal(updated);
  };

  const calculateTotal = (services) => {
    const total = services.reduce((sum, service) => sum + (service.price * service.quantity), 0);
    setTotalEstimate(total);
  };

  return (
    <div className={styles.pricesPage}>
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
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <span className={styles.heroLabel}>💰 Şeffaf Fiyatlandırma</span>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleMain}>Diba Halı Yıkama</span>
                <span className={styles.titleSub}>Fiyat Listesi 2025</span>
              </h1>
              <p className={styles.heroDescription}>
                Gizli maliyet yok, ek ücret yok. Tüm hizmetlerimiz için net fiyatlar ve 
                kalite garantisi. İstediğiniz hizmeti seçin, anında fiyat hesaplayın.
              </p>
              <div className={styles.heroFeatures}>
                <span className={styles.heroFeature}>✓ Sabit Fiyat Garantisi</span>
                <span className={styles.heroFeature}>✓ Ücretsiz Keşif</span>
                <span className={styles.heroFeature}>✓ Esnek Ödeme</span>
              </div>
            </div>
            
            <div className={styles.heroRight}>
              <div className={styles.priceCalculator}>
                <div className={styles.calculatorHeader}>
                  <h3>💡 Hızlı Fiyat Hesaplama</h3>
                  <p>Seçtiğiniz hizmetler</p>
                </div>
                
                {selectedServices.length === 0 ? (
                  <div className={styles.emptyCalculator}>
                    <div className={styles.emptyIcon}>🧮</div>
                    <p>Henüz hizmet seçmediniz</p>
                    <small>Aşağıdan hizmet seçerek fiyat hesaplayın</small>
                  </div>
                ) : (
                  <>
                    <div className={styles.selectedServices}>
                      {selectedServices.map(service => (
                        <div key={service.id} className={styles.selectedService}>
                          <div className={styles.serviceInfo}>
                            <h4>{service.name}</h4>
                            <span className={styles.serviceCategory}>{service.category}</span>
                          </div>
                          <div className={styles.serviceControls}>
                            <div className={styles.quantityControl}>
                              <button onClick={() => updateQuantity(service.id, service.quantity - 1)}>-</button>
                              <span>{service.quantity}</span>
                              <button onClick={() => updateQuantity(service.id, service.quantity + 1)}>+</button>
                            </div>
                            <span className={styles.servicePrice}>₺{service.price * service.quantity}</span>
                            <button 
                              className={styles.removeBtn} 
                              onClick={() => removeFromEstimate(service.id)}
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.calculatorFooter}>
                      <div className={styles.totalPrice}>
                        <span>Toplam Tahmini</span>
                        <span className={styles.total}>₺{totalEstimate}</span>
                      </div>
                      <Link to="/contact" className={styles.getQuoteBtn}>
                        Teklif Al
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.categoryFilter}>
            <button 
              className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span>🏠</span>
              Tüm Hizmetler
            </button>
            {pricingCategories.map(category => (
              <button 
                key={category.id}
                className={`${styles.filterBtn} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className={styles.pricingSection} id="pricing" data-animate>
        <div className="container">
          <div className={styles.categoriesGrid}>
            {filteredCategories.map((category, index) => (
              <div 
                key={category.id} 
                className={`${styles.categoryCard} ${isVisible('pricing') ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.categoryHeader} style={{ background: category.color }}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <div className={styles.categoryInfo}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  {category.featured && <span className={styles.featuredBadge}>⭐ Popüler</span>}
                </div>
                
                <div className={styles.servicesGrid}>
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className={`${styles.serviceCard} ${service.popular ? styles.popular : ''} ${service.premium ? styles.premium : ''}`}
                    >
                      <div className={styles.serviceHeader}>
                        <h4>{service.name}</h4>
                        {service.popular && <span className={styles.popularBadge}>🔥 Popüler</span>}
                        {service.premium && <span className={styles.premiumBadge}>👑 Premium</span>}
                      </div>
                      
                      <p className={styles.serviceDescription}>{service.description}</p>
                      
                      <div className={styles.serviceFeatures}>
                        {service.features.map((feature, fIndex) => (
                          <span key={fIndex} className={styles.feature}>
                            <i className="fas fa-check"></i>
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className={styles.serviceFooter}>
                        <div className={styles.priceInfo}>
                          <span className={styles.price}>₺{service.price}</span>
                          <span className={styles.unit}>/{service.unit}</span>
                        </div>
                        <button 
                          className={styles.addBtn}
                          onClick={() => addToEstimate(service, category)}
                        >
                          <i className="fas fa-plus"></i>
                          Ekle
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection} id="info" data-animate>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🚚</div>
              <h3>Ücretsiz Alma-Getirme</h3>
              <p>İstanbul genelinde ücretsiz alma ve getirme hizmeti. Evinizden aldığımız tekstilleri temizleyip geri getiriyoruz.</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⚡</div>
              <h3>48 Saat Teslimat</h3>
              <p>Acil ihtiyaçlarınız için hızlı teslimat seçeneği. Normal teslimat süresi 3-5 iş günüdür.</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🛡️</div>
              <h3>Hasar Garantisi</h3>
              <p>Tüm hizmetlerimizde %100 hasar garantisi. Herhangi bir sorun durumunda tam tazminat.</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>💳</div>
              <h3>Esnek Ödeme</h3>
              <p>Nakit, kart veya havale seçenekleri. Kurumsal müşteriler için özel ödeme koşulları.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Hemen Teklif Alın</h2>
            <p>Uzman ekibimiz size özel fiyat teklifi hazırlasın. Ücretsiz keşif ve danışmanlık.</p>
            
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.primaryBtn}>
                <span>Teklif Al</span>
                <i className="fas fa-calculator"></i>
              </Link>
              <a href="tel:+90XXXXXXXXXX" className={styles.phoneBtn}>
                <span>Hemen Ara</span>
                <i className="fas fa-phone"></i>
              </a>
            </div>
            
            <div className={styles.ctaNote}>
              <small>📞 7/24 Müşteri Hizmetleri | 🕒 Aynı Gün Keşif</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
