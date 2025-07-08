
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { AdminLogin } from "./components/AdminLogin";
import { AdminPanel } from "./components/AdminPanel";
import { useAdmin } from "./hooks/useAdmin";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/scrolltotop";

const queryClient = new QueryClient();

const AppContent = () => {
  const { showLogin, isAuthenticated, handleLogin, handleLogout, closeLogin } = useAdmin();

  if (isAuthenticated) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#9EB3C2' }}>
      <Navigation />
      <main className="flex-1">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      
      {showLogin && (
        <AdminLogin onLogin={handleLogin} onClose={closeLogin} />
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
