import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// SVG Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

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
            <span>🔴 CANLI</span>
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