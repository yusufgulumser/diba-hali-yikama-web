import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeTimeline, setActiveTimeline] = useState(0);

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

  // Animasyon durumunu kontrol eden yardımcı fonksiyon
  const isVisible = (sectionId) => visibleSections.has(sectionId);

  // İstatistik verileri
  const stats = [
    {
      icon: "🏆",
      number: "15+",
      label: "Yıl Deneyim",
      description: "Sektörde köklü deneyim",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: "😊", 
      number: "15K+",
      label: "Mutlu Müşteri",
      description: "Güvenilir hizmet",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: "🧽",
      number: "50K+", 
      label: "Temizlenen Ürün",
      description: "Başarıyla tamamlanan",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: "⭐",
      number: "%99.8",
      label: "Memnuniyet",
      description: "Kalite garantisi",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  // Zaman çizelgesi verileri
  const timeline = [
    {
      year: "2009",
      title: "Kuruluş",
      description: "Esenler'de küçük bir atölye ile başladık",
      icon: "🏠",
      details: "Sadece birkaç kişilik ekibimizle, her halıya özel özen göstererek temizlik hizmeti vermeye başladık."
    },
    {
      year: "2012",
      title: "Büyüme",
      description: "İlk genişlememi gerçekleştirdik",
      icon: "📈",
      details: "Müşteri memnuniyeti sayesinde ekibimizi genişlettik ve daha fazla halıya hizmet vermeye başladık."
    },
    {
      year: "2015",
      title: "Taşınma",
      description: "Bağcılar'a modern tesisimiz",
      icon: "🏢",
      details: "Modern makinalarımız ve daha geniş alanımızla koltuk, yatak, perde temizliği hizmetlerini de ekledik."
    },
    {
      year: "2018",
      title: "Dijitalleşme",
      description: "Online hizmet sistemi",
      icon: "💻",
      details: "Müşterilerimizin talep ettiği modern hizmet anlayışı ile dijital platform oluşturduk."
    },
    {
      year: "2024",
      title: "Liderlik",
      description: "İstanbul'un en güvenilir markası",
      icon: "👑",
      details: "15+ yıllık deneyimimizle İstanbul'da halı yıkama sektörünün lider markası olduk."
    }
  ];

  // Değerlerimiz
  const values = [
    {
      icon: "🛡️",
      title: "Güvenilirlik",
      description: "15+ yıldır aynı kalite ve güvenle hizmet veriyoruz",
      color: "#667eea"
    },
    {
      icon: "🌿",
      title: "Çevre Dostu",
      description: "Doğa dostu ürünlerle temizlik yapıyoruz",
      color: "#43e97b"
    },
    {
      icon: "⚡",
      title: "Hızlı Hizmet",
      description: "24-48 saat içinde alma-teslim garantisi",
      color: "#f093fb"
    },
    {
      icon: "💎",
      title: "Premium Kalite",
      description: "Her ürüne özel temizlik protokolü uyguluyoruz",
      color: "#4facfe"
    }
  ];

  // Ekip üyeleri
  const team = [
    {
      name: "Ahmet Diba",
      role: "Kurucu & Genel Müdür",
      experience: "15+ Yıl",
      image: "👨‍💼",
      description: "Sektörün deneyimli ismi"
    },
    {
      name: "Mehmet Yılmaz",
      role: "Operasyon Müdürü",
      experience: "12+ Yıl",
      image: "👨‍🔧",
      description: "Teknik süreçlerin uzmanı"
    },
    {
      name: "Fatma Öz",
      role: "Kalite Kontrol",
      experience: "8+ Yıl",
      image: "👩‍🔬",
      description: "Kalite standartlarının garanti"
    },
    {
      name: "Ali Demir",
      role: "Müşteri Hizmetleri",
      experience: "10+ Yıl",
      image: "👨‍💻",
      description: "Müşteri memnuniyetinin anahtarı"
    }
  ];

  return (
    <div className={styles.about}>
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
            <span className={styles.heroLabel}>🏆 Hakkımızda</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>15+ Yıllık Deneyimle</span>
              <span className={styles.titleSub}>İstanbul'un En Güvenilir Halı Yıkama Markası</span>
            </h1>
            <p className={styles.heroDescription}>
              2009'dan bu yana ailenizin sağlığı ve konforuyla için temizlik standardında 
              hiçbir ödün vermeyen, güvenilir ve kaliteli hizmet anlayışımızla yanınızdayız.
            </p>
            
            <div className={styles.heroActions}>
              <Link to="/contact" className={styles.primaryAction}>
                <span>Hizmet Al</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <a href="tel:+905301839656" className={styles.secondaryAction}>
                <i className="fas fa-phone"></i>
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} id="stats" data-animate>
        <div className="container">
          <div className={`${styles.statsGrid} ${isVisible('stats') ? 'fade-in visible' : 'fade-in'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statBackground} style={{ background: stat.gradient }}></div>
                <div className={styles.statContent}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statDescription}>{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className={styles.timelineSection} id="timeline" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('timeline') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>📚 Hikayemiz</span>
            <h2 className={styles.sectionTitle}>
              Başarı Yolculuğumuz
            </h2>
            <p className={styles.sectionDescription}>
              Küçük bir atölyeden İstanbul'un lider markasına uzanan 15 yıllık hikayemiz
            </p>
          </div>
          
          <div className={`${styles.timeline} ${isVisible('timeline') ? 'fade-in visible' : 'fade-in'}`}>
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`${styles.timelineItem} ${activeTimeline === index ? styles.active : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveTimeline(index)}
              >
                <div className={styles.timelineIcon}>
                  <span>{item.icon}</span>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                  <p className={styles.timelineDetails}>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection} id="values" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('values') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>💎 Değerlerimiz</span>
            <h2 className={styles.sectionTitle}>
              Bizi Farklı Kılan Değerler
            </h2>
          </div>
          
          <div className={`${styles.valuesGrid} ${isVisible('values') ? 'fade-in visible' : 'fade-in'}`}>
            {values.map((value, index) => (
              <div 
                key={index}
                className={styles.valueCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.valueIcon} style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection} id="team" data-animate>
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('team') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.sectionLabel}>👥 Ekibimiz</span>
            <h2 className={styles.sectionTitle}>
              Deneyimli ve Uzman Kadromuz
            </h2>
            <p className={styles.sectionDescription}>
              Kaliteli hizmetin arkasındaki deneyimli ekibimizle tanışın
            </p>
          </div>
          
          <div className={`${styles.teamGrid} ${isVisible('team') ? 'fade-in visible' : 'fade-in'}`}>
            {team.map((member, index) => (
              <div 
                key={index}
                className={styles.teamCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.memberImage}>{member.image}</div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <span className={styles.memberExperience}>{member.experience}</span>
                  <p className={styles.memberDescription}>{member.description}</p>
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
              <h2>15+ Yıllık Deneyimimizi Keşfedin</h2>
              <p>
                Güvenilir hizmet anlayışımız ve kalite garantimizle 
                halılarınızı en iyi şekilde temizliyoruz.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaPrimary}>
                <span>Hizmet Al</span>
                <i className="fas fa-cleaning"></i>
              </Link>
              <Link to="/prices" className={styles.ctaSecondary}>
                <span>Fiyat Listesi</span>
                <i className="fas fa-list-ul"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 