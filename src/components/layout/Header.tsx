
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blushRose to-softLavender flex items-center justify-center">
            <span className="text-deepPlum font-serif text-xl">H+</span>
          </div>
          <span className="font-serif text-xl font-medium text-deepPlum">HerCycle+</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 text-deepPlum hover:bg-softLavender/30 transition-colors">
            <Bell size={20} />
          </button>
          
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-blushRose text-deepPlum">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
