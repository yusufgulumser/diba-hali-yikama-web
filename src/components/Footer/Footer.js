import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(Math.floor(Math.random() * 20) + 8);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Occasionally update visitor count
      if (Math.random() < 0.1) {
        setVisitorCount(prev => Math.max(1, prev + (Math.random() > 0.5 ? 1 : -1)));
      }
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const areas = ['Esenler', 'Güngören', 'Bağcılar', 'Bayrampaşa', 'Zeytinburnu', 'Bahçelievler'];

  return (
    <footer className={styles.revolutionaryFooter}>
      {/* Dynamic Background */}
      <div className={styles.dynamicBackground}>
        <div 
          className={styles.mouseFollower}
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`
          }}
        />
        <div className={styles.particleField}>
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className={styles.gradientMesh}>
          <div className={styles.meshBlob1} />
          <div className={styles.meshBlob2} />
          <div className={styles.meshBlob3} />
        </div>
      </div>

      {/* Live Status Header */}
      <div className={styles.liveStatusHeader}>
        <div className={styles.statusContainer}>
          <div className={styles.liveIndicator}>
            <div className={styles.pulsingDot} />
            <span>CANLI</span>
          </div>
          <div className={styles.liveStats}>
            <span className={styles.stat}>
              <span className={styles.statIcon}>👥</span>
              {visitorCount} kişi şu anda online
            </span>
            <span className={styles.stat}>
              <span className={styles.statIcon}>⏰</span>
              {currentTime.toLocaleTimeString('tr-TR')}
            </span>
            <span className={styles.stat}>
              <span className={styles.statIcon}>📞</span>
              7/24 Müşteri Desteği
            </span>
          </div>
          <div className={styles.weatherWidget}>
            <span>🌤️ İstanbul 22°C</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainContent}>
        <div className={styles.contentGrid}>
          
          {/* Brand Showcase */}
          <div className={styles.brandShowcase}>
            <div className={styles.brandHeader}>
              <div className={styles.logoContainer}>
                <h2 className={styles.brandLogo}>
                  <span className={styles.logoMain}>Diba</span>
                  <span className={styles.logoSub}>Halı Yıkama</span>
                </h2>
              </div>
              <div className={styles.establishedYear}>
                <span className={styles.yearLabel}>Kurulduğu Yıl</span>
                <span className={styles.year}>2009</span>
              </div>
            </div>
            
            <div className={styles.brandDescription}>
              <p>
                İstanbul'da 15+ yıldır halı, kilim ve ev tekstili temizliğinde 
                öncü olan Diba Halı Yıkama, modern teknoloji ve ekolojik ürünlerle 
                müşterilerine en kaliteli hizmeti sunuyor.
              </p>
            </div>

            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>🏆</span>
                <div className={styles.achievementInfo}>
                  <span className={styles.achievementTitle}>İstanbul'un En İyisi</span>
                  <span className={styles.achievementYear}>2023</span>
                </div>
              </div>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>🌿</span>
                <div className={styles.achievementInfo}>
                  <span className={styles.achievementTitle}>Eco-Friendly Sertifikası</span>
                  <span className={styles.achievementYear}>2022</span>
                </div>
              </div>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>💯</span>
                <div className={styles.achievementInfo}>
                  <span className={styles.achievementTitle}>%100 Müşteri Memnuniyeti</span>
                  <span className={styles.achievementYear}>2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Map */}
          <div className={styles.areasMap}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🗺️</span>
              Hizmet Haritası
            </h3>
            <div className={styles.mapGrid}>
              {areas.map((area, index) => (
                <Link 
                  key={index}
                  to="/service-areas" 
                  className={styles.areaPin}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--pin-color': `hsl(${index * 60}, 70%, 50%)`
                  }}
                >
                  <div className={styles.pinIcon}>📍</div>
                  <span className={styles.areaName}>{area}</span>
                  <div className={styles.pinPulse}></div>
                </Link>
              ))}
            </div>
            <div className={styles.mapActions}>
              <Link to="/service-areas" className={styles.exploreMap}>
                <span>Haritayı Keşfet</span>
                <span className={styles.exploreIcon}>🧭</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Call Button */}
      <a href="tel:+905301839656" className={styles.quickCallButton}>
        <div className={styles.phoneIcon}>📞</div>
      </a>

      {/* Bottom Control Panel */}
      <div className={styles.controlPanel}>
        <div className={styles.panelGrid}>
          <div className={styles.copyrightSection}>
            <div className={styles.copyrightIcon}>©</div>
            <div className={styles.copyrightText}>
              <span className={styles.copyrightYear}>2024</span>
              <span className={styles.copyrightBrand}>Diba Halı Yıkama</span>
              <span className={styles.copyrightNote}>Tüm hakları saklıdır</span>
            </div>
          </div>
          
          <div className={styles.quickNavigation}>
            <Link to="/about" className={styles.navLink}>
              <span className={styles.navIcon}>ℹ️</span>
              <span>Hakkımızda</span>
            </Link>
            <Link to="/tips" className={styles.navLink}>
              <span className={styles.navIcon}>💡</span>
              <span>Puf Noktaları</span>
            </Link>
            <Link to="/contact" className={styles.navLink}>
              <span className={styles.navIcon}>📞</span>
              <span>İletişim</span>
            </Link>
          </div>
          
          <div className={styles.supportCenter}>
            <a href="tel:+905301839656" className={styles.supportButton}>
              <span className={styles.supportIcon}>🎧</span>
              <span>7/24 Destek</span>
              <div className={styles.supportPulse}></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 