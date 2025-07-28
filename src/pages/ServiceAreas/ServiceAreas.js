import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceAreas.module.css';

const ServiceAreas = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeArea, setActiveArea] = useState(null);

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

  // İstanbul'daki ana hizmet bölgeleri
  const serviceAreas = [
    {
      id: 'esenler',
      district: 'Esenler',
      isMainCenter: true,
      icon: '🏠',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      coverageTime: '30 dk',
      description: 'Ana merkez konumumuz. En hızlı hizmet bölgesi.',
      neighborhoods: [
        'Atışalanı', 'Çiftehavuzlar', 'Fevzi Çakmak', 'Havaalanı', 
        'Kemer', 'Menderes', 'Namık Kemal', 'Nine Hatun', 
        'Oruçreis', 'Tuna', 'Turgutreis', 'Yavuz Selim'
      ],
      stats: {
        customers: '2500+',
        deliveryTime: 'Aynı Gün',
        rating: 4.9
      }
    },
    {
      id: 'gungoren',
      district: 'Güngören',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      coverageTime: '45 dk',
      description: 'Yoğun ticari bölge, özel paketler mevcut.',
      neighborhoods: [
        'Abdurrahman Nafiz Gürman', 'Akçaburgaz', 'Geçit',
        'Güneştepe', 'Haznedar', 'Mareşal Fevzi Çakmak',
        'Mehmet Nesih Özmen', 'Merkez', 'Tozkoparan'
      ],
      stats: {
        customers: '1800+',
        deliveryTime: '48 Saat',
        rating: 4.8
      }
    },
    {
      id: 'bagcilar',
      district: 'Bağcılar',
      icon: '🏘️',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      coverageTime: '1 saat',
      description: 'Büyük yerleşim bölgesi, toplu indirimler.',
      neighborhoods: [
        'Bağlar', 'Demirkapı', 'Evren', 'Fatih', 'Göztepe',
        'Güneşli', 'İnönü', 'Kemalpaşa', 'Kirazlı', 'Mahmutbey',
        'Merkez', 'Sakızağacı', 'Sancaktepe', 'Yıldıztepe', 'Yüzyıl'
      ],
      stats: {
        customers: '3200+',
        deliveryTime: '48 Saat',
        rating: 4.9
      }
    },
    {
      id: 'bayramapasa',
      district: 'Bayrampaşa',
      icon: '🏛️',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      coverageTime: '45 dk',
      description: 'Merkezi konum, hızlı erişim imkanı.',
      neighborhoods: [
        'Altıntepsi', 'Cevatpaşa', 'Kartaltepe', 'Muratpaşa',
        'Ortamahalle', 'Ruhupaşa', 'Terazidere', 'Vatan', 'Yıldırım'
      ],
      stats: {
        customers: '1500+',
        deliveryTime: '24 Saat',
        rating: 4.7
      }
    },
    {
      id: 'zeytinburnu',
      district: 'Zeytinburnu',
      icon: '🌊',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      coverageTime: '1 saat',
      description: 'Sahil bölgesi, özel temizlik çözümleri.',
      neighborhoods: [
        'Beştelsiz', 'Çırpıcı', 'Gökalp', 'Merkezefendi',
        'Nuripaşa', 'Sümer', 'Telsiz', 'Veliefendi', 'Yenidoğan'
      ],
      stats: {
        customers: '1200+',
        deliveryTime: '48 Saat',
        rating: 4.8
      }
    },
    {
      id: 'bahcelievler',
      district: 'Bahçelievler',
      icon: '🌸',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      coverageTime: '1 saat',
      description: 'Premium yerleşim, lüks hizmet paketleri.',
      neighborhoods: [
        'Adnan Kahveci', 'Bahçelievler', 'Cumhuriyet', 'Ertuğrulgazi',
        'Fevzi Çakmak', 'Hürriyet', 'Kocasinan', 'Sirinevler',
        'Soğanlı', 'Şirinevler', 'Yenibosna', 'Zafer'
      ],
      stats: {
        customers: '2100+',
        deliveryTime: '48 Saat',
        rating: 4.9
      }
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.serviceAreas}>
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
            <span className={styles.heroLabel}>📍 Hizmet Bölgeleri</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>İstanbul'un Her Köşesinde</span>
              <span className={styles.titleSub}>Güvenilir Halı Yıkama Hizmeti</span>
            </h1>
            <p className={styles.heroDescription}>
              Esenler merkezli olarak 6 ilçede 60+ mahallede ücretsiz alma-teslim ile 
              profesyonel halı yıkama hizmeti sunuyoruz.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>60+</span>
                <span className={styles.statLabel}>Mahalle</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>0₺</span>
                <span className={styles.statLabel}>Taşıma Ücreti</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15k+</span>
                <span className={styles.statLabel}>Mutlu Müşteri</span>
              </div>
            </div>
            
            <div className={styles.heroActions}>
              <Link to="/contact" className={styles.primaryAction}>
                <span>Bölgeni Kontrol Et</span>
                <i className="fas fa-map-marker-alt"></i>
              </Link>
              <a href="tel:+905301839656" className={styles.secondaryAction}>
                <i className="fas fa-phone"></i>
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className={styles.areasSection} id="areas" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('areas') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>🗺️ Hizmet Haritası</span>
            <h2 className={styles.sectionTitle}>
              Kapsamlı Hizmet Ağımız
            </h2>
            <p className={styles.sectionDescription}>
              Her bölge için özel çözümler ve hızlı teslimat seçenekleri
            </p>
          </div>
          
          <div className={`${styles.areasGrid} ${isVisible('areas') ? 'fade-in visible' : 'fade-in'}`}>
            {serviceAreas.map((area, index) => (
              <div 
                key={area.id} 
                className={`${styles.areaCard} ${area.isMainCenter ? styles.mainCenter : ''} ${activeArea === area.id ? styles.active : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveArea(area.id)}
                onMouseLeave={() => setActiveArea(null)}
              >
                <div className={styles.cardHeader} style={{ background: area.gradient }}>
                  <div className={styles.areaInfo}>
                    <div className={styles.areaIcon}>{area.icon}</div>
                    <div className={styles.areaDetails}>
                      <h3 className={styles.areaName}>{area.district}</h3>
                      <p className={styles.areaDescription}>{area.description}</p>
                    </div>
                  </div>
                  {area.isMainCenter && (
                    <div className={styles.mainBadge}>
                      <span>Ana Merkez</span>
                    </div>
                  )}
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.areaStats}>
                    <div className={styles.statBox}>
                      <span className={styles.statValue}>{area.stats.customers}</span>
                      <span className={styles.statDesc}>Müşteri</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statValue}>{area.coverageTime}</span>
                      <span className={styles.statDesc}>Ulaşım</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statValue}>{area.stats.rating}</span>
                      <span className={styles.statDesc}>Puan</span>
                    </div>
                  </div>
                  
                  <div className={styles.neighborhoodsContainer}>
                    <h4 className={styles.neighborhoodsTitle}>
                      <span>Hizmet Verilen Mahalleler</span>
                      <span className={styles.neighborhoodCount}>{area.neighborhoods.length}</span>
                    </h4>
                    <div className={styles.neighborhoodsList}>
                      {area.neighborhoods.slice(0, 8).map((neighborhood, idx) => (
                        <span key={idx} className={styles.neighborhood}>
                          {neighborhood}
                        </span>
                      ))}
                      {area.neighborhoods.length > 8 && (
                        <span className={styles.moreNeighborhoods}>
                          +{area.neighborhoods.length - 8} daha
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.deliveryInfo}>
                    <div className={styles.deliveryIcon}>
                      <i className="fas fa-truck"></i>
                    </div>
                    <div className={styles.deliveryDetails}>
                      <span className={styles.deliveryTitle}>Teslimat Süresi</span>
                      <span className={styles.deliveryTime}>{area.stats.deliveryTime}</span>
                    </div>
                  </div>
                  <Link to="/contact" className={styles.orderButton}>
                    <span>Sipariş Ver</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
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
              <h2>Bölgeniz Listede Yok mu?</h2>
              <p>
                Henüz listelenmemiş bölgeler için özel çözümler üretiyoruz. 
                İletişime geçin, size en yakın hizmet noktasını bulalım.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaPrimary}>
                <span>Özel Teklif Al</span>
                <i className="fas fa-map-marked-alt"></i>
              </Link>
              <a href="https://wa.me/905301839656" className={styles.ctaSecondary}>
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
