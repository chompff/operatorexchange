import { ReactNode } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface StealthLayoutProps {
  children: ReactNode;
}

const StealthLayout = ({ children }: StealthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      {/* Simple header with just the EED TOOL logo */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
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
            <span className="text-xl font-bold text-gray-900 -ml-4">OPERATOR EXCHANGE</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 ml-3">
              BETA
            </span>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default StealthLayout; 