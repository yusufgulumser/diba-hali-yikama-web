import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo2 from '../../assets/logo2.jpg';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

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

  // Hero Content Data
  const heroContent = {
    title: "Diba Halı Yıkama",
    subtitle: "Evinizdeki Her Tekstile Profesyonel Dokunuş",
    description: "Modern teknoloji ve uzman kadromuzla halı, koltuk, yatak ve perdelerinizi fabrika çıkışı gibi tertemiz hale getiriyoruz. Güvenilir, hızlı ve ekolojik çözümler.",
    features: [
      "✓ Aynı Gün Teslimat",
      "✓ Çevre Dostu Ürünler",
      "✓ 15+ Yıl Deneyim",
      "✓ %100 Memnuniyet Garantisi"
    ]
  };

  // Auto counter effect for stats
  const [stats, setStats] = useState({
    experience: 0,
    customers: 0,
    satisfaction: 0,
    coverage: 0
  });

  useEffect(() => {
    const isHeroVisible = visibleSections.has('hero');
    
    if (!isHeroVisible) return;

    const targets = { experience: 15, customers: 50000, satisfaction: 99.8, coverage: 24 };
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    let current = { experience: 0, customers: 0, satisfaction: 0, coverage: 0 };
    const increments = {
      experience: targets.experience / steps,
      customers: targets.customers / steps,
      satisfaction: targets.satisfaction / steps,
      coverage: targets.coverage / steps
    };

    const timer = setInterval(() => {
      current.experience = Math.min(current.experience + increments.experience, targets.experience);
      current.customers = Math.min(current.customers + increments.customers, targets.customers);
      current.satisfaction = Math.min(current.satisfaction + increments.satisfaction, targets.satisfaction);
      current.coverage = Math.min(current.coverage + increments.coverage, targets.coverage);

      setStats({ ...current });

      if (current.experience >= targets.experience) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visibleSections]);




  // Premium Services Data
  const premiumServices = [
    {
      id: 1,
      title: 'Halı Derin Temizlik',
      description: 'Nano teknoloji ile halılarınızın derinlemesine temizliği',
      icon: '�️',
      price: '80₺/m²',
      priceNote: 'başlangıç fiyatlarıyla',
      features: ['UV Sterilizasyon', 'Leke Koruma', 'Anti-bakteriyel'],
      image: `${process.env.PUBLIC_URL}/images/carpet-cleaning.jpeg`,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Lüks Koltuk Bakımı',
      description: 'Premium kumaşlar için özel bakım sistemi',
      icon: '�️',
      price: '600₺/koltuk',
      priceNote: 'başlangıç fiyatlarıyla',
      features: ['Kumaş Koruma', 'Renk Tazeleme', 'Form Koruma'],
      image: `${process.env.PUBLIC_URL}/images/sofa-cleaning.jpg`,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Hijyenik Yatak Servisi',
      description: 'Sağlıklı uyku için yatak hijyen sistemi',
      icon: '�️',
      price: '1000₺/yatak',
      priceNote: 'başlangıç fiyatlarıyla',
      features: ['Alerjen Temizlik', 'Koku Giderme', 'Hijyen Sertifikası'],
      image: `${process.env.PUBLIC_URL}/images/mattress-cleaning.jpg`,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.home}>
      {/* Modern Hero Section */}
      <section className={styles.modernHero} id="hero" data-animate>
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
              <div className={styles.heroText}>
                <span className={styles.heroLabel}>🏆 İstanbul'un #1 Halı Yıkama Markası</span>
                <h1 className={styles.heroTitle}>
                  <span className={styles.titleMain}>{heroContent.title}</span>
                  <span className={styles.titleSub}>{heroContent.subtitle}</span>
                </h1>
                <p className={styles.heroDescription}>{heroContent.description}</p>
                
                <div className={styles.heroFeatures}>
                  {heroContent.features.map((feature, index) => (
                    <span key={index} className={styles.heroFeature}>{feature}</span>
                  ))}
                </div>
                
                <div className={styles.heroActions}>
                  <Link to="/contact" className={styles.primaryAction}>
                    <span>Ücretsiz Keşif</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link to="/services" className={styles.secondaryAction}>
                    <i className="fas fa-play"></i>
                    <span>Hizmetleri İzle</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={styles.heroRight}>
              <div className={styles.heroVisual}>
                <div className={styles.mainImage}>
                  <img src={logo2} alt="Diba Halı Yıkama - Profesyonel Temizlik Hizmeti" />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.floatingCards}>
                  <div className={styles.statCard}>
                    <span className={styles.statNumber}>{Math.round(stats.experience)}+</span>
                    <span className={styles.statLabel}>Yıl Deneyim</span>
                  </div>
                  <div className={styles.statCard}>
                    <span className={styles.statNumber}>{Math.round(stats.customers/1000)}K+</span>
                    <span className={styles.statLabel}>Mutlu Müşteri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className={`${styles.premiumServices} section`} id="premium-services" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('premium-services') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>💎 Premium Hizmetler</span>
            <h2 className={styles.sectionTitle}>
              Evinizin Her Köşesi İçin
              <span className={styles.titleAccent}>Özel Çözümler</span>
            </h2>
            <p className={styles.sectionDescription}>
              Her tekstil türü için özel geliştirilmiş temizlik teknolojileri
            </p>
          </div>
          
          <div className={`${styles.servicesContainer} ${isVisible('premium-services') ? 'fade-in visible' : 'fade-in'}`}>
            {premiumServices.map((service, index) => (
              <div key={service.id} className={styles.premiumCard} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={styles.cardHeader} style={{ background: service.gradient }}>
                  <div className={styles.cardIcon}>{service.icon}</div>
                  <div className={styles.cardPrice}>
                    {service.price}
                    <span className={styles.priceNote}>{service.priceNote}</span>
                  </div>
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                  
                  <div className={styles.cardFeatures}>
                    {service.features.map((feature, idx) => (
                      <span key={idx} className={styles.cardFeature}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.cardActions}>
                    <Link to="/contact" className={styles.cardAction}>
                      <span>Sipariş Ver</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link to="/prices" className={styles.priceAction}>
                      <span>Fiyat Öğren</span>
                      <i className="fas fa-calculator"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`${styles.processSection} section section-alt`} id="process" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('process') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>⚡ Süreç</span>
            <h2 className={styles.sectionTitle}>
              3 Adımda 
              <span className={styles.titleAccent}>Tertemiz Ev</span>
            </h2>
          </div>
          
          <div className={`${styles.processSteps} ${isVisible('process') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepIcon}>📞</div>
              <h3>İletişim</h3>
              <p>Ücretsiz keşif için bizi arayın. Uzmanlarımız size en uygun çözümü sunar.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepIcon}>🚚</div>
              <h3>Toplama</h3>
              <p>Tekstillerinizi evinizden alır, modern tesisimizde özenle temizleriz.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepIcon}>✨</div>
              <h3>Teslimat</h3>
              <p>Tertemiz tekstillerinizi 48 saat içinde evinize teslim ederiz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection}`} id="cta" data-animate>
        <div className="container">
          <div className={`${styles.ctaContent} ${isVisible('cta') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.ctaText}>
              <h2>Evinizi Yenileyin, Konforunuzu Artırın</h2>
              <p>Uzman ekibimiz sizin için hazır. Ücretsiz keşif ve fiyat teklifi alın.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaPrimary}>
                <span>Hemen Başla</span>
                <i className="fas fa-rocket"></i>
              </Link>
              <Link to="/prices" className={styles.ctaSecondary}>
                Fiyat Listesi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;