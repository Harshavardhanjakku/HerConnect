
import React from 'react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
  description: string;
}

interface ProductItemProps {
  product: Product;
  onAddToCart: (id: number, name: string) => void;
}

const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
      <div className="p-3 text-center bg-gray-50">
        <span className="text-4xl">{product.image}</span>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-1 mb-2">
          <span>⭐ {product.rating} ({product.reviews})</span>
          <span className="font-medium text-deepPlum">${product.price}</span>
        </div>
        <div className="flex gap-1 mb-3">
          {product.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-softLavender/30 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Button 
          size="sm" 
          className="w-full text-xs bg-forestTeal hover:bg-forestTeal/90"
          onClick={() => onAddToCart(product.id, product.name)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
