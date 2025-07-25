import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // WhatsApp SVG Component
  const WhatsAppSVG = () => (
    <svg viewBox="0 0 24 24" width="64" height="64" fill="#25D366" style={{ marginBottom: '20px' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
    </svg>
  );

  // Instagram SVG Component
  const InstagramSVG = () => (
    <svg viewBox="0 0 24 24" width="64" height="64" style={{ marginBottom: '20px' }}>
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#833AB4"/>
          <stop offset="25%" stopColor="#C13584"/>
          <stop offset="50%" stopColor="#E1306C"/>
          <stop offset="75%" stopColor="#FD1D1D"/>
          <stop offset="100%" stopColor="#F77737"/>
        </linearGradient>
      </defs>
      <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  // Phone SVG Component
  const PhoneSVG = () => (
    <svg viewBox="0 0 24 24" width="64" height="64" style={{ marginBottom: '20px' }}>
      <defs>
        <linearGradient id="phone-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50"/>
          <stop offset="50%" stopColor="#2196F3"/>
          <stop offset="100%" stopColor="#673AB7"/>
        </linearGradient>
      </defs>
      <path fill="url(#phone-gradient)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );

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
    <div className={styles.contactContainer}>
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div className={styles.floatingShape} style={{
          left: mousePosition.x * 0.01 + '%',
          top: mousePosition.y * 0.01 + '%'
        }}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} id="hero">
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${isVisible.hero ? styles.animate : ''}`}>
            🌟 İletişime Geçin 🌟
          </h1>
          <p className={`${styles.heroSubtitle} ${isVisible.hero ? styles.animate : ''}`}>
            Profesyonel halı, koltuk ve ev tekstili temizlik hizmeti için bizimle iletişime geçin
          </p>
          <div className={styles.heroParticles}>
            <span>✨</span>
            <span>💎</span>
            <span>🌟</span>
            <span>⭐</span>
            <span>💫</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.socialContact} id="contact">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible.contact ? styles.animate : ''}`}>
            💬 Bizimle İletişime Geçin
          </h2>
          <p className={styles.sectionDescription}>
            Halı, kilim ve kumaş ürünlerinizin temizliği için hemen iletişime geçin! 7/24 hizmetinizdeyiz.
          </p>
          <div className={styles.socialGrid}>
            <div className={`${styles.contactCard} ${styles.whatsappCard} ${isVisible.contact ? styles.slideInLeft : ''}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <WhatsAppSVG />
              <h3>WhatsApp İletişim</h3>
              <p>Hızlı ve kolay iletişim için WhatsApp üzerinden bize ulaşın.</p>
              <p className={styles.phoneNumber}>📞 +90 533 456 78 90</p>
              <a 
                href="https://wa.me/905334567890?text=Merhaba, halı yıkama hizmeti hakkında bilgi almak istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactButton}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://wa.me/905334567890?text=Merhaba, halı yıkama hizmeti hakkında bilgi almak istiyorum.', '_blank');
                }}
              >
                💬 Mesaj Gönder
              </a>
            </div>

            <div className={`${styles.contactCard} ${styles.instagramCard} ${isVisible.contact ? styles.slideInRight : ''}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <InstagramSVG />
              <h3>Instagram Takip</h3>
              <p>Son çalışmalarımızı ve müşteri yorumlarını Instagram'da takip edin.</p>
              <p className={styles.socialHandle}>📸 @diba_hali_yikama</p>
              <a 
                href="https://www.instagram.com/diba_hali_yikama/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactButton}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.instagram.com/diba_hali_yikama/', '_blank');
                }}
              >
                📱 Takip Et
              </a>
            </div>

            <div className={`${styles.contactCard} ${styles.phoneCard} ${isVisible.contact ? styles.slideInUp : ''}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <PhoneSVG />
              <h3>Telefon İletişim</h3>
              <p>Direkt arama yaparak hızlıca randevu alın ve sorularınızı sorun.</p>
              <p className={styles.phoneNumber}>📞 +90 533 456 78 90</p>
              <a 
                href="tel:+905334567890" 
                className={styles.contactButton}
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
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyUsSection} id="features">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible.features ? styles.animate : ''}`}>
            🏆 Neden Diba Halı Yıkama? 🏆
          </h2>
          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} ${isVisible.features ? styles.bounceIn : ''}`}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>15 Yıl Tecrübe</h3>
              <p>Sektörde 15 yıllık deneyim ve binlerce memnun müşteri</p>
              <div className={styles.sparkles}>
                <span>✨</span>
                <span>💫</span>
                <span>⭐</span>
              </div>
            </div>
            
            <div className={`${styles.featureCard} ${isVisible.features ? styles.bounceIn : ''}`} style={{animationDelay: '0.1s'}}>
              <div className={styles.featureIcon}>🚚</div>
              <h3>Ücretsiz Kargo</h3>
              <p>İstanbul genelinde kapıdan alım ve teslim hizmeti tamamen ücretsiz</p>
              <div className={styles.sparkles}>
                <span>🌟</span>
                <span>💎</span>
                <span>✨</span>
              </div>
            </div>
            
            <div className={`${styles.featureCard} ${isVisible.features ? styles.bounceIn : ''}`} style={{animationDelay: '0.2s'}}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>%100 Garanti</h3>
              <p>Hasar durumunda tam tazminat garantisi veriyoruz</p>
              <div className={styles.sparkles}>
                <span>⭐</span>
                <span>🌟</span>
                <span>💫</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className={styles.reviewsSection} id="reviews">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible.reviews ? styles.animate : ''}`}>
            💬 Müşteri Yorumları
          </h2>
          <div className={styles.reviewsGrid}>
            <div className={`${styles.reviewCard} ${isVisible.reviews ? styles.slideInLeft : ''}`}>
              <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
              <p>"Halılarım tertemiz oldu! Çok memnunum hizmetlerinden."</p>
              <div className={styles.reviewer}>- Ayşe K.</div>
            </div>
            
            <div className={`${styles.reviewCard} ${isVisible.reviews ? styles.slideInUp : ''}`}>
              <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
              <p>"Profesyonel ekip, zamanında teslimat. Kesinlikle tavsiye ederim."</p>
              <div className={styles.reviewer}>- Mehmet A.</div>
            </div>
            
            <div className={`${styles.reviewCard} ${isVisible.reviews ? styles.slideInRight : ''}`}>
              <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
              <p>"Fiyatları çok uygun ve kalite mükemmel. Çok teşekkürler!"</p>
              <div className={styles.reviewer}>- Fatma S.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} id="faq">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible.faq ? styles.animate : ''}`}>
            ❓ Sıkça Sorulan Sorular
          </h2>
          <div className={styles.faqGrid}>
            <div className={`${styles.faqCard} ${isVisible.faq ? styles.fadeInUp : ''}`}>
              <h3>🕐 Teslim süresi ne kadar?</h3>
              <p>Normal şartlarda 2-3 iş günü içinde halılarınızı temizleyip teslim ediyoruz.</p>
            </div>
            
            <div className={`${styles.faqCard} ${isVisible.faq ? styles.fadeInUp : ''}`} style={{animationDelay: '0.1s'}}>
              <h3>🚚 Ücretsiz kargo var mı?</h3>
              <p>Evet! İstanbul genelinde kapıdan alım ve teslim hizmeti tamamen ücretsizdir.</p>
            </div>
            
            <div className={`${styles.faqCard} ${isVisible.faq ? styles.fadeInUp : ''}`} style={{animationDelay: '0.2s'}}>
              <h3>💰 Fiyatlar nasıl belirleniyor?</h3>
              <p>Halı boyutu ve kirlilik durumuna göre şeffaf fiyatlandırma yapıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className={styles.emergencySection} id="emergency">
        <div className={styles.container}>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyIcon}>🚨</div>
            <div>
              <h2>Acil Temizlik mi Lazım?</h2>
              <p>7/24 acil halı temizlik hizmeti için hemen arayın!</p>
            </div>
            <Link to="/contact" className={styles.emergencyButton}>
              Hemen Ara
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
