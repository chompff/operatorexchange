import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Company Info - 15% larger */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center hover:opacity-80 transition-opacity w-fit -ml-3 -mt-2 cursor-pointer"
            >
              <div className="flex items-center">
                {/* Lottie Animation */}
                <div className="w-12 h-12">
                  <DotLottieReact
                    src="https://lottie.host/2ec7dc7d-1aad-4d51-889a-6d9fab29fc19/qkiTAxMCej.json"
                    loop
                    autoplay
                    speed={1}
                    style={{ 
                      width: '48px', 
                      height: '48px'
                    }}
                  />
                </div>
                <span className="text-lg font-bold text-gray-900 -ml-2">OPERATOR EXCHANGE</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 ml-2">
                  BETA
                </span>
              </div>
            </button>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI-powered workflow to digest dealflow incoming from the Operator Exchange platform. Easily send content to colleagues with notes and deck attached.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold">Send feedback to maikel@uneti-labs.com</span>
            </p>
          </div>

          {/* Built By - 50% more margin from column 1 */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Built By
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900">UNETI AI LABS</p>
                <p>Markkaweg 2</p>
                <p>2153 NB Nieuw-Vennep</p>
                <p>Netherlands</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 lg:col-start-8 space-y-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Legal
            </h3>
            <div className="space-y-3">
              <span className="block text-sm text-gray-600 opacity-50 cursor-default">
                Privacy Policy
              </span>
              <span className="block text-sm text-gray-600 opacity-50 cursor-default">
                Terms of Service
              </span>
              <span className="block text-sm text-gray-600 opacity-50 cursor-default">
                Disclaimer
              </span>
            </div>
          </div>

          {/* Disclaimer - 15% larger */}
          <div className="lg:col-span-4 lg:col-start-10 space-y-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Disclaimer
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              This AI-powered tool is provided for informational purposes only and does not constitute financial, legal, or investment advice. Output is generated automatically and may contain inaccuracies or omissions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>© {currentYear} UNETI AI LABS</span>
              <span>•</span>
              <span>All rights reserved</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <span>Powered by AI</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/company/uneti-labs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 