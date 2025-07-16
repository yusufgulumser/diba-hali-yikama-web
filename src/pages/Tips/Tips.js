import React, { useState, useEffect } from 'react';
import styles from './Tips.module.css';

const Tips = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const cleaningTips = [
    {
      id: 1,
      title: "🌞 Halı Renk Koruma",
      description: "Halınızı güneş ışığından koruyun. Doğrudan güneş ışığı halı renklerini %30 oranında soldurabilir.",
      gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
      category: "Koruma",
      priority: "high"
    },
    {
      id: 2,
      title: "🏠 Günlük Bakım Rutini",
      description: "Halınızı haftada 2-3 kez elektrikli süpürge ile temizleyin. Bu, kirlerin derinlemesine yerleşmesini %80 önler.",
      gradient: "linear-gradient(135deg, #4CAF50, #2196F3)",
      category: "Bakım",
      priority: "high"
    },
    {
      id: 3,
      title: "💧 Leke Acil Müdahale",
      description: "Taze lekeler soğuk su ile hemen müdahale edilmelidir. Sıcak su protein lekelerini kalıcı hale getirir.",
      gradient: "linear-gradient(135deg, #00BCD4, #009688)",
      category: "Acil",
      priority: "critical"
    },
    {
      id: 4,
      title: "👥 Trafik Yolu Bakımı",
      description: "Yoğun geçiş alanlarında ayda 1 kez profesyonel temizlik yaptırın. Bu halının ömrünü 3 kat uzatır.",
      gradient: "linear-gradient(135deg, #9C27B0, #E91E63)",
      category: "Bakım",
      priority: "medium"
    },
    {
      id: 5,
      title: "💨 Nem Kontrolü",
      description: "Halı altı nemi %60'ın üzerine çıkmasın. Aşırı nem küf ve mantar oluşumuna neden olur.",
      gradient: "linear-gradient(135deg, #607D8B, #455A64)",
      category: "Sağlık",
      priority: "high"
    },
    {
      id: 6,
      title: "🧂 Yağ Lekesi SOS",
      description: "Yağ lekelerine hemen tuz döküp 15 dakika bekletin. Tuz yağı %70 oranında emer.",
      gradient: "linear-gradient(135deg, #FF5722, #F44336)",
      category: "Acil",
      priority: "critical"
    },
    {
      id: 7,
      title: "🛋️ Koltuk Döşeme Koruma",
      description: "Koltukları direkt güneşten koruyun ve 6 ayda bir profesyonel temizlik yaptırın.",
      gradient: "linear-gradient(135deg, #8BC34A, #4CAF50)",
      category: "Koruma",
      priority: "medium"
    },
    {
      id: 8,
      title: "🦠 Alerjen Temizliği",
      description: "Ev tozu akarlarının %95'i düzenli profesyonel temizlikle ortadan kaldırılabilir.",
      gradient: "linear-gradient(135deg, #3F51B5, #2196F3)",
      category: "Sağlık",
      priority: "high"
    },
    {
      id: 9,
      title: "🌬️ Doğru Kurutma",
      description: "Yıkanan halıları doğal hava akımında kurutun. Makine kurutma halı liflerine zarar verir.",
      gradient: "linear-gradient(135deg, #00BCD4, #03A9F4)",
      category: "Bakım",
      priority: "medium"
    },
    {
      id: 10,
      title: "🐕 Pet Lekesi Temizliği",
      description: "Hayvan lekelerine sirke-su karışımı (1:3 oran) uygulayın. Amonyak kokusunu nötralize eder.",
      gradient: "linear-gradient(135deg, #FF9800, #FF5722)",
      category: "Acil",
      priority: "critical"
    },
    {
      id: 11,
      title: "🧽 Profesyonel Temizlik",
      description: "Yılda 1-2 kez profesyonel temizlik, halının ömrünü 5-7 yıl uzatır ve sağlığınızı korur.",
      gradient: "linear-gradient(135deg, #E91E63, #9C27B0)",
      category: "Önemli",
      priority: "high"
    },
    {
      id: 12,
      title: "🪟 Perde Bakım İpucu",
      description: "Perdeleri 6 ayda bir yıkatın. Toz birikimi kalorifer verimini %20 düşürür ve alerjiye neden olur.",
      gradient: "linear-gradient(135deg, #795548, #5D4037)",
      category: "Bakım",
      priority: "medium"
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
    <div className={styles.tipsContainer}>
      <AnimatedShapes />
      <SparkleEffect />
      
      {/* Hero Section */}
      <section className={styles.heroSection} id="hero">
        <div 
          className={styles.cursor} 
          style={{ 
            left: mousePosition.x - 10, 
            top: mousePosition.y - 10 
          }}
        />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} ${isVisible.hero ? styles.animate : ''}`}>
              ✨ Profesyonel Halı Bakım Sırları ✨
            </h1>
            <p className={styles.heroSubtitle}>
              15+ yıllık deneyimimizden size özel, bilime dayalı halı ve döşeme bakım ipuçları
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10,000+</span>
                <span className={styles.statLabel}>Memnun Müşteri</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Yıl Deneyim</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>%98</span>
                <span className={styles.statLabel}>Başarı Oranı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Grid Section */}
      <section className={styles.tipsSection} id="tips">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible.tips ? styles.animate : ''}`}>
            💡 Uzman İpuçlarımız
          </h2>
          <div className={styles.tipsGrid}>
            {cleaningTips.map((tip, index) => (
              <div 
                key={tip.id} 
                className={`${styles.tipCard} ${styles[tip.priority]} ${isVisible.tips ? styles.slideInUp : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: tip.gradient
                }}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.sparkle}></div>
                <div className={styles.tipContent}>
                  <div className={styles.tipHeader}>
                    <span className={styles.categoryBadge}>{tip.category}</span>
                    <div className={styles.priorityIndicator}></div>
                  </div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipDescription}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Advice Section */}
      <section className={styles.expertSection} id="expert">
        <div className={styles.container}>
          <div className={styles.expertCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.expertContent}>
              <div className={styles.expertIcon}>👨‍🔬</div>
              <h3>🎯 Uzman Tavsiyesi</h3>
              <p>
                Bu ipuçları 15+ yıllık deneyimimize ve bilimsel araştırmalara dayanmaktadır. 
                Değerli halılarınız için düzenli profesyonel bakım her zaman en güvenli seçimdir.
              </p>
              <div className={styles.contactButtons}>
                <a 
                  href="https://wa.me/905334567890?text=Halı bakımı hakkında bilgi almak istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://wa.me/905334567890?text=Halı bakımı hakkında bilgi almak istiyorum.', '_blank');
                  }}
                >
                  💬 WhatsApp İletişim
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

export default Tips; 