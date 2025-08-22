import { Routes, Route, Navigate } from "react-router-dom";
import { useStealthMode } from "@/lib/utils";



// Layout Components
import Layout from "@/components/layout/Layout";
import StealthLayout from "@/components/layout/StealthLayout";

// Tool Pages (Only Results page)
import ResultsPage from "@/pages/tools/results";

const AppRoutes = () => {
  const { isStealthMode } = useStealthMode();

  // In stealth mode, use StealthLayout and restrict routes
  if (isStealthMode) {
    return (
      <Routes>
        {/* Serve Results page directly at root */}
        <Route path="/" element={<StealthLayout><ResultsPage /></StealthLayout>} />
        
        {/* Catch-all route */}
        <Route path="*" element={<StealthLayout><ResultsPage /></StealthLayout>} />
      </Routes>
    );
  }

  // Normal mode - full routing
  return (
    <Routes>
      {/* Public Routes - serve Results page directly at root */}
      <Route path="/" element={<Layout><ResultsPage /></Layout>} />
      
      {/* Catch-all route */}
      <Route path="*" element={<Layout><ResultsPage /></Layout>} />
    </Routes>
  );
};

export default AppRoutes; 