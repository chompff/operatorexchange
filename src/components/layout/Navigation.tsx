import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../../styles/button-overlay.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white border-b border-gray-100 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 py-6">
          {/* Logo - Centered */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              {/* Lottie Animation */}
              <div className="w-24 h-24">
                <DotLottieReact
                  src="https://lottie.host/2ec7dc7d-1aad-4d51-889a-6d9fab29fc19/qkiTAxMCej.json"
                  loop
                  autoplay
                  speed={1}
                  style={{ 
                    width: '96px', 
                    height: '96px'
                  }}
                />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 -ml-4 ${
                isScrolled ? 'text-gray-900' : 'text-gray-900 drop-shadow-sm'
              }`}>OPERATOR EXCHANGE</span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium transition-colors duration-300 ml-3 ${
                isScrolled 
                  ? 'bg-orange-100 text-orange-800 border border-orange-200' 
                  : 'bg-orange-100/90 text-orange-800 border border-orange-200/90 backdrop-blur-sm'
              }`}>
                BETA
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 