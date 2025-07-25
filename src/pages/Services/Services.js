import React, { useState, useEffect, useRef } from 'react';
import styles from './Services.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slide1 from '../../assets/slide1.jpeg';
import slide2 from '../../assets/slide2.jpeg';
import slide3 from '../../assets/slide3.jpeg';
import video1 from '../../assets/video1.mp4';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const videoRef = useRef(null);

  // Slider data
  const slides = [
    {
      id: 1,
      type: 'video',
      src: video1,
      title: 'Profesyonel Temizlik Sürecimiz',
      subtitle: 'Modern teknoloji ile mükemmel sonuçlar'
    },
    {
      id: 2,
      type: 'image',
      src: slide1,
      title: 'Halı Temizleme Uzmanları',
      subtitle: 'Her türlü halı için özel çözümler'
    },
    {
      id: 3,
      type: 'image',
      src: slide2,
      title: 'Koltuk & Mobilya Bakımı',
      subtitle: 'Evinizin konforunu koruyoruz'
    },
    {
      id: 4,
      type: 'image',
      src: slide3,
      title: 'Perde & Tekstil Hizmetleri',
      subtitle: 'Evinizdeki her detaya özen'
    }
  ];

  // Video bittiğinde autoplay'i tekrar başlat
  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    if (swiperInstance) {
      swiperInstance.autoplay.start();
      // Video bittikten sonra otomatik olarak sonraki slide'a geç
      setTimeout(() => {
        swiperInstance.slideNext();
      }, 1000);
    }
  };

  // Video yüklendiğinde otomatik başlat
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
        // Video oynarken autoplay'i durdur
        if (swiperInstance) {
          swiperInstance.autoplay.stop();
        }
      }).catch(() => {
        // Autoplay engellenirse kullanıcı etkileşimi bekle
        setIsVideoPlaying(false);
      });
    }
  };

  // Slide değiştiğinde video'yu durdur
  const handleSlideChange = (swiper) => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    
    // Video slide'ından çıktığında autoplay'i başlat
    if (swiper.activeIndex !== 0) {
      swiper.autoplay.start();
    } else {
      // Video slide'ına geldiğinde video'yu başlat
      setTimeout(() => {
        handleVideoLoaded();
      }, 500);
    }
  };

  // Animated Background Shapes Component
  const AnimatedShapes = () => (
    <div className={styles.backgroundShapes}>
      <div className={styles.floatingShape}></div>
      <div className={styles.floatingShape}></div>
      <div className={styles.floatingShape}></div>
      <div className={styles.floatingShape}></div>
      <div className={styles.floatingShape}></div>
    </div>
  );

  // Sparkle Effect Component
  const SparkleEffect = () => (
    <div className={styles.sparkles}>
      <div className={styles.sparkle}></div>
      <div className={styles.sparkle}></div>
      <div className={styles.sparkle}></div>
      <div className={styles.sparkle}></div>
      <div className={styles.sparkle}></div>
    </div>
  );

  // Service Icon SVG Components
  const CarpetIcon = () => (
    <svg viewBox="0 0 64 64" width="80" height="80">
      <defs>
        <linearGradient id="carpet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B"/>
          <stop offset="100%" stopColor="#FFE66D"/>
        </linearGradient>
      </defs>
      <rect x="8" y="20" width="48" height="32" rx="4" fill="url(#carpet-gradient)" stroke="#fff" strokeWidth="2"/>
      <path d="M12 24 L60 24 M12 28 L60 28 M12 32 L60 32 M12 36 L60 36 M12 40 L60 40 M12 44 L60 44 M12 48 L60 48" stroke="#fff" strokeWidth="1" opacity="0.6"/>
      <circle cx="32" cy="12" r="4" fill="#FFD700"/>
    </svg>
  );

  const SofaIcon = () => (
    <svg viewBox="0 0 64 64" width="80" height="80">
      <defs>
        <linearGradient id="sofa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4"/>
          <stop offset="100%" stopColor="#44A08D"/>
        </linearGradient>
      </defs>
      <path d="M8 32 L8 48 L56 48 L56 32 L52 28 L12 28 Z" fill="url(#sofa-gradient)" stroke="#fff" strokeWidth="2"/>
      <rect x="12" y="20" width="40" height="16" rx="8" fill="url(#sofa-gradient)" stroke="#fff" strokeWidth="2"/>
      <circle cx="16" cy="52" r="3" fill="#333"/>
      <circle cx="48" cy="52" r="3" fill="#333"/>
    </svg>
  );

  const CurtainIcon = () => (
    <svg viewBox="0 0 64 64" width="80" height="80">
      <defs>
        <linearGradient id="curtain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea"/>
          <stop offset="100%" stopColor="#764ba2"/>
        </linearGradient>
      </defs>
      <path d="M10 8 L54 8 L54 12 L52 12 L52 56 L12 56 L12 12 L10 12 Z" fill="url(#curtain-gradient)" stroke="#fff" strokeWidth="2"/>
      <path d="M20 16 Q24 20 20 24 Q24 28 20 32 Q24 36 20 40 Q24 44 20 48" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M44 16 Q40 20 44 24 Q40 28 44 32 Q40 36 44 40 Q40 44 44 48" stroke="#fff" strokeWidth="2" fill="none"/>
      <rect x="28" y="8" width="8" height="4" fill="#FFD700"/>
    </svg>
  );

  const MattressIcon = () => (
    <svg viewBox="0 0 64 64" width="80" height="80">
      <defs>
        <linearGradient id="mattress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8E6CF"/>
          <stop offset="100%" stopColor="#88D8A3"/>
        </linearGradient>
      </defs>
      <rect x="8" y="24" width="48" height="20" rx="6" fill="url(#mattress-gradient)" stroke="#fff" strokeWidth="2"/>
      <path d="M12 28 L52 28 M12 32 L52 32 M12 36 L52 36 M12 40 L52 40" stroke="#fff" strokeWidth="1" opacity="0.7"/>
      <rect x="6" y="44" width="52" height="8" rx="4" fill="#8B4513" stroke="#fff" strokeWidth="2"/>
      <circle cx="32" cy="16" r="6" fill="#87CEEB" stroke="#fff" strokeWidth="2"/>
      <path d="M32 10 L32 22 M26 16 L38 16" stroke="#fff" strokeWidth="2"/>
    </svg>
  );

  const BlanketIcon = () => (
    <svg viewBox="0 0 64 64" width="80" height="80">
      <defs>
        <linearGradient id="blanket-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFECD2"/>
          <stop offset="100%" stopColor="#FCB69F"/>
        </linearGradient>
      </defs>
      <path d="M12 16 Q32 8 52 16 L52 48 Q32 56 12 48 Z" fill="url(#blanket-gradient)" stroke="#fff" strokeWidth="2"/>
      <path d="M16 20 Q32 14 48 20 M16 28 Q32 22 48 28 M16 36 Q32 30 48 36 M16 44 Q32 38 48 44" stroke="#fff" strokeWidth="1" opacity="0.6"/>
      <circle cx="20" cy="12" r="3" fill="#FFD700"/>
      <circle cx="44" cy="12" r="3" fill="#FFD700"/>
    </svg>
  );

  const DuvetIcon = () => (
    <svg viewBox="0 0 64 64" width="80" height="80">
      <defs>
        <linearGradient id="duvet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9A9E"/>
          <stop offset="100%" stopColor="#FECFEF"/>
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="32" rx="24" ry="20" fill="url(#duvet-gradient)" stroke="#fff" strokeWidth="2"/>
      <path d="M16 24 Q32 16 48 24 M16 32 Q32 24 48 32 M16 40 Q32 32 48 40" stroke="#fff" strokeWidth="1" opacity="0.8"/>
      <circle cx="24" cy="20" r="2" fill="#FFD700"/>
      <circle cx="40" cy="20" r="2" fill="#FFD700"/>
      <circle cx="32" cy="48" r="2" fill="#FFD700"/>
    </svg>
  );

  const services = [
    {
      id: 1,
      title: "Halı Temizleme",
      description: "Profesyonel halı yıkama ve leke çıkarma hizmeti. Tüm halı türleri için uygun.",
      features: ["Derin temizlik", "Leke çıkarma", "Dezenfeksiyon", "Hızlı kurutma"],
      price: "₺80'den başlayan fiyatlar",
      icon: <CarpetIcon />,
      gradient: "linear-gradient(135deg, #FF6B6B, #FFE66D)",
      category: "Ana Hizmet"
    },
    {
      id: 2,
      title: "Koltuk Temizleme", 
      description: "Koltuk, kanepe ve oturma gruplarının profesyonel temizliği.",
      features: ["Kumaş koruma", "Leke temizleme", "Dezodorizasyon", "Antibakteriyel"],
      price: "₺600'den başlayan fiyatlar",
      icon: <SofaIcon />,
      gradient: "linear-gradient(135deg, #4ECDC4, #44A08D)",
      category: "Popüler"
    },
    {
      id: 3,
      title: "Perde Temizleme",
      description: "Tüm perde türleri için özel temizlik ve bakım hizmeti.",
      features: ["Hassas kumaş bakımı", "Buruşmazlık", "Renk koruma", "UV koruması"],
      price: "₺150'den başlayan fiyatlar",
      icon: <CurtainIcon />,
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
      category: "Özel"
    },
    {
      id: 4,
      title: "Yatak Temizleme",
      description: "Yatak, şilte ve yatak aksesuarlarının hijyenik temizliği.",
      features: ["Akar temizleme", "Hijyen sağlama", "Koku giderme", "Sağlık koruması"],
      price: "₺1000'den başlayan fiyatlar",
      icon: <MattressIcon />,
      gradient: "linear-gradient(135deg, #A8E6CF, #88D8A3)",
      category: "Sağlık"
    },
    {
      id: 5,
      title: "Battaniye Temizleme",
      description: "Battaniye, örtü ve büyük tekstil ürünlerinin temizliği.",
      features: ["Yumuşaklık koruma", "Antibakteriyel", "Koku giderme", "Özel bakım"],
      price: "₺300'dan başlayan fiyatlar",
      icon: <BlanketIcon />,
      gradient: "linear-gradient(135deg, #FFECD2, #FCB69F)",
      category: "Ekonomik"
    },
    {
      id: 6,
      title: "Yorgan Temizleme",
      description: "Yorgan, nevresim ve yatak tekstillerinin profesyonel bakımı.",
      features: ["Tüy bakımı", "Hacim koruma", "Hijyenik temizlik", "Allerjen temizleme"],
      price: "₺400'dan başlayan fiyatlar",
      icon: <DuvetIcon />,
      gradient: "linear-gradient(135deg, #FF9A9E, #FECFEF)",
      category: "Premium"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "15+ Yıl Deneyim",
      description: "Sektördeki uzun yıllarımızla kazandığımız deneyimi hizmetinizde",
      badge: "Uzman Ekip"
    },
    {
      icon: "🚚",
      title: "Ücretsiz Alma-Teslim",
      description: "Evinizden alıp temizlik sonrası geri getiriyoruz",
      badge: "Bedava Hizmet"
    },
    {
      icon: "🛡️",
      title: "Hasar Garantisi",
      description: "Tüm işlemlerimizde %100 hasar garantisi sunuyoruz",
      badge: "%100 Güvence"
    },
    {
      icon: "⚡",
      title: "Hızlı Teslimat",
      description: "1 hafta içinde temizlenmiş ürünlerinizi teslim ediyoruz",
      badge: "1 Hafta"
    },
    {
      icon: "🌿",
      title: "Ekolojik Ürünler",
      description: "Çevre ve sağlık dostu temizlik malzemeleri kullanıyoruz",
      badge: "Çevre Dostu"
    },
    {
      icon: "💯",
      title: "Memnuniyet Garantisi",
      description: "%99.8 müşteri memnuniyeti ile hizmet veriyoruz",
      badge: "Kalite Taahhüdü"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.servicesContainer}>
      <AnimatedShapes />
      <SparkleEffect />
      
      {/* Cursor Effect */}
      <div 
        className={styles.cursor} 
        style={{ 
          left: mousePosition.x - 10, 
          top: mousePosition.y - 10 
        }}
      />

      {/* Hero Slider Section */}
      <section className={styles.heroSlider}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          pagination={{
            el: `.${styles.sliderDots}`,
            clickable: true,
            bulletClass: styles.dot,
            bulletActiveClass: styles.activeDot,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          speed={1000}
          loop={true}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className={styles.swiperContainer}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className={styles.swiperSlide}>
              <div className={styles.slide}>
                {slide.type === 'video' ? (
                  <div className={styles.videoContainer}>
                    <video 
                      ref={videoRef}
                      src={slide.src}
                      muted 
                      playsInline
                      className={styles.sliderVideo}
                      onEnded={handleVideoEnded}
                      onLoadedData={handleVideoLoaded}
                    />
                  </div>
                ) : (
                  <img 
                    src={slide.src} 
                    alt={slide.title}
                    className={styles.sliderImage}
                  />
                )}
                
                <div className={styles.slideContent}>
                  <div className={styles.slideTextContainer}>
                    <h2 className={styles.slideTitle}>{slide.title}</h2>
                    <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                    <div className={styles.slideActions}>
                      <button className={styles.ctaButton}>
                        <span>Hizmeti İncele</span>
                        <i className="fas fa-arrow-right"></i>
                      </button>
                      <button className={styles.secondaryButton}>
                        <i className="fas fa-phone"></i>
                        <span>Hemen Ara</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation */}
          <div className={styles.prevButton}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className={styles.nextButton}>
            <i className="fas fa-chevron-right"></i>
          </div>
          
          {/* Custom Pagination */}
          <div className={styles.sliderDots}></div>
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className={styles.heroSection} id="hero">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} ${isVisible.hero ? styles.animate : ''}`}>
              ✨ Profesyonel Temizlik Hizmetlerimiz ✨
            </h1>
            <p className={styles.heroSubtitle}>
              15+ yıllık deneyimimiz ve modern teknolojimizle halı, koltuk, yatak ve perdelerinize özel bakım sunuyoruz
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50,000+</span>
                <span className={styles.statLabel}>Mutlu Müşteri</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>%99.8</span>
                <span className={styles.statLabel}>Memnuniyet</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Ana Hizmet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible.services ? styles.animate : ''}`}>
            🧽 Hizmetlerimiz
          </h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`${styles.serviceCard} ${isVisible.services ? styles.slideInUp : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: service.gradient
                }}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                
                <div className={styles.serviceContent}>
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <span className={styles.categoryBadge}>{service.category}</span>
                  </div>
                  
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={styles.priceSection}>
                    <span className={styles.price}>{service.price}</span>
                  </div>
                  
                  <div className={styles.serviceActions}>
                    <a 
                      href="https://wa.me/905334567890?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactBtn}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('https://wa.me/905334567890?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank');
                      }}
                    >
                      💬 Bilgi Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUsSection} id="why-us">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible['why-us'] ? styles.animate : ''}`}>
            🏆 Neden Diba Halı Yıkama?
          </h2>
          <div className={styles.reasonsGrid}>
            {whyChooseUs.map((reason, index) => (
              <div 
                key={index} 
                className={`${styles.reasonCard} ${isVisible['why-us'] ? styles.slideInUp : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                
                <div className={styles.reasonContent}>
                  <div className={styles.reasonHeader}>
                    <div className={styles.reasonIcon}>{reason.icon}</div>
                    <span className={styles.reasonBadge}>{reason.badge}</span>
                  </div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDescription}>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="cta">
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>📞</div>
              <h3>Hemen Randevu Alın!</h3>
              <p>
                Halı, koltuk, perde ve diğer tekstil ürünlerinizin temizliği için 
                hemen iletişime geçin. Ücretsiz keşif ve fiyat teklifi!
              </p>
              <div className={styles.ctaButtons}>
                <a 
                  href="https://wa.me/905334567890?text=Merhaba, randevu almak istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://wa.me/905334567890?text=Merhaba, randevu almak istiyorum.', '_blank');
                  }}
                >
                  💬 WhatsApp Randevu
                </a>
                <a 
                  href="tel:+905334567890" 
                  className={styles.phoneBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:+905334567890';
                  }}
                >
                  📞 Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;