
import React from 'react';
import { Home, Calendar, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-t">
      <div className="container mx-auto">
        <div className="flex items-center justify-around py-3">
          <Link to="/" className="flex flex-col items-center space-y-1">
            <Home size={20} className="text-deepPlum" />
            <span className="text-xs text-deepPlum">Home</span>
          </Link>

          <Link to="/cycle" className="flex flex-col items-center space-y-1">
            <Calendar size={20} className="text-deepPlum" />
            <span className="text-xs text-deepPlum">Cycle</span>
          </Link>

          <Link to="/wellness" className="flex flex-col items-center space-y-1">
            <Heart size={20} className="text-deepPlum" />
            <span className="text-xs text-deepPlum">Wellness</span>
          </Link>

          <Link to="/profile" className="flex flex-col items-center space-y-1">
            <User size={20} className="text-deepPlum" />
            <span className="text-xs text-deepPlum">Profile</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
