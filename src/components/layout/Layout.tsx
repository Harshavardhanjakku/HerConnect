
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Heart, Users, ShoppingCart, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navigationItems = [
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <Calendar size={20} />, label: "Cycle", path: "/cycle" },
    { icon: <Heart size={20} />, label: "Wellness", path: "/wellness" },
    { icon: <Users size={20} />, label: "Community", path: "/community" },
    { icon: <ShoppingCart size={20} />, label: "Shop", path: "/marketplace" },
    { icon: <User size={20} />, label: "Profile", path: "/profile" },
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-pearlWhite">
      <Header />
      <main className="flex-1 container mx-auto p-4 pb-20">
        {children}
      </main>
      
      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          {navigationItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                location.pathname === item.path
                  ? "text-deepPlum"
                  : "text-gray-500"
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      
      <Footer />
    </div>
  );
};

export default Layout;
