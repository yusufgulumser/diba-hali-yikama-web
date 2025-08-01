import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo1 from '../../assets/logoPng.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch event handlers for swipe functionality
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else if (isRightSwipe && !isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    }
    
    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    mobileMenu.addEventListener('touchstart', handleTouchStart);
    mobileMenu.addEventListener('touchmove', handleTouchMove);
    mobileMenu.addEventListener('touchend', handleTouchEnd);

    return () => {
      mobileMenu.removeEventListener('touchstart', handleTouchStart);
      mobileMenu.removeEventListener('touchmove', handleTouchMove);
      mobileMenu.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <img src={logo1} alt="Diba Halı Yıkama" className={styles.logoImage} />
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Diba</span>
              <span className={styles.logoSub}>Halı Yıkama</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            <li>
              <Link 
                to="/services" 
                className={isActive('/services') ? styles.active : ''}
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link 
                to="/prices" 
                className={isActive('/prices') ? styles.active : ''}
              >
                Fiyatlarımız
              </Link>
            </li>
            <li>
              <Link 
                to="/tips" 
                className={isActive('/tips') ? styles.active : ''}
              >
                Puf Noktalar
              </Link>
            </li>
            <li>
              <Link 
                to="/service-areas" 
                className={isActive('/service-areas') ? styles.active : ''}
              >
                Hizmet Bölgeleri
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? styles.active : ''}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? styles.active : ''}
              >
                İletişim
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile Navigation */}
          <div 
            ref={mobileMenuRef}
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
          >
            {/* Close Button */}
            <button 
              className={styles.closeButton}
              onClick={closeMobileMenu}
              aria-label="Menüyü Kapat"
            >
              <span className={styles.closeIcon}>
                <span></span>
                <span></span>
              </span>
            </button>
            
            <ul className={styles.mobileNavLinks}>
              <li>
                <Link 
                  to="/services" 
                  className={isActive('/services') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link 
                  to="/prices" 
                  className={isActive('/prices') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Fiyatlarımız
                </Link>
              </li>
              <li>
                <Link 
                  to="/tips" 
                  className={isActive('/tips') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Puf Noktalar
                </Link>
              </li>
              <li>
                <Link 
                  to="/service-areas" 
                  className={isActive('/service-areas') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Hizmet Bölgeleri
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div 
              className={styles.overlay} 
              onClick={closeMobileMenu}
            ></div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 