
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ProductItem from '@/components/ui/ProductItem';
import { toast } from '@/components/ui/sonner';

const MarketplacePage = () => {
  const categories = ["Tampons", "Pads", "Menstrual Cups", "Period Underwear", "Heat Patches", "Wellness"];
  
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Cotton Tampons",
      price: 8.99,
      image: "🧻",
      rating: 4.8,
      reviews: 215,
      tags: ["Organic", "Eco-friendly"],
      description: "100% organic cotton tampons, free from pesticides and harsh chemicals."
    },
    {
      id: 2,
      name: "Reusable Period Cup",
      price: 29.99,
      image: "🥤",
      rating: 4.6,
      reviews: 342,
      tags: ["Reusable", "12hr protection"],
      description: "Medical-grade silicone cup that can be worn for up to 12 hours."
    },
    {
      id: 3,
      name: "Adhesive Heat Patches",
      price: 12.99,
      image: "🔥",
      rating: 4.9,
      reviews: 189,
      tags: ["8hr relief", "Discreet"],
      description: "Ultra-thin heat patches that provide up to 8 hours of cramp relief."
    },
    {
      id: 4,
      name: "Period Proof Underwear",
      price: 34.99,
      image: "👙",
      rating: 4.7,
      reviews: 267,
      tags: ["Absorbent", "Leak-proof"],
      description: "Super absorbent underwear that replaces pads and tampons."
    }
  ];
  
  const addToCart = (productId: number, productName: string) => {
    toast.success(`Added to Cart`, {
      description: `${productName} has been added to your cart.`,
    });
  };
  
  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-2xl">Marketplace</h1>
          <Button variant="outline" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-deepPlum text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </Button>
        </div>
        
        <Card className="p-4">
          <div className="bg-gradient-to-r from-softLavender to-blushRose p-4 rounded-lg text-center mb-4">
            <h2 className="font-serif text-xl mb-1">Personalized Period Care</h2>
            <p className="text-sm">Products tailored to your cycle, body, and preferences</p>
          </div>
          
          <div className="relative mb-4">
            <Input placeholder="Search products..." className="pr-10" />
            <Button className="absolute right-1 top-1 h-8 w-8 p-0">🔍</Button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className={index === 0 ? "bg-softLavender" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <h3 className="font-medium text-lg mb-3">Recommended For You</h3>
          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.map((product) => (
              <ProductItem 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
          
          <Button className="w-full mt-4 bg-forestTeal hover:bg-forestTeal/90">
            View All Products
          </Button>
        </Card>
        
        <Card className="p-4 bg-blushRose/10">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blushRose flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-xl">🎁</span>
            </div>
            <div>
              <h3 className="font-medium">Cycle Care Box</h3>
              <p className="text-sm text-gray-600">Monthly essentials delivered before your period</p>
            </div>
          </div>
          <Button className="w-full bg-deepPlum hover:bg-deepPlum/90">
            Learn More
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default MarketplacePage;
