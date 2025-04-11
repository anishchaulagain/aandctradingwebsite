'use client'
import { useState } from 'react';
import { Search, MenuIcon, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample product data - replace with your actual products
const initialProducts = [
  {
    id: 1,
    name: "Coco Crunch",
    description: "Premium single-origin coffee beans, locally roasted in small batches",
    image: "https://res.cloudinary.com/dv9s1kiz2/image/upload/v1744123820/aandctrading/53ba47fc-cce4-4d63-8f0f-d0ca6860d194.png",
    category: "Biscuit"
  },
  {
    id: 2,
    name: "Handcrafted Ceramic Mug",
    description: "Unique stoneware mugs made by local artisans",
    image: "/api/placeholder/500/400",
    category: "Homeware"
  },
  {
    id: 3,
    name: "Organic Honey",
    description: "Raw, unfiltered honey sourced from local beekeepers",
    image: "/api/placeholder/500/400",
    category: "Food"
  },
  {
    id: 4,
    name: "Hand-woven Basket",
    description: "Traditional basket weaving techniques using sustainable materials",
    image: "/api/placeholder/500/400",
    category: "Homeware"
  },
  {
    id: 5,
    name: "Lavender Essential Oil",
    description: "100% pure essential oil distilled from locally grown lavender",
    image: "/api/placeholder/500/400",
    category: "Wellness"
  },
  {
    id: 6,
    name: "Artisan Sourdough Bread",
    description: "Freshly baked using traditional fermentation methods",
    image: "/api/placeholder/500/400",
    category: "Food"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

export default function ProductShowcase() {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Extract unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))];
  
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredProducts(products.filter(product => 
        product.category === category && (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ));
    }
    setMobileMenuOpen(false);
  };
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (activeCategory === "All") {
      setFilteredProducts(products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) || 
        product.description.toLowerCase().includes(query.toLowerCase())
      ));
    } else {
      setFilteredProducts(products.filter(product => 
        product.category === activeCategory && (
          product.name.toLowerCase().includes(query.toLowerCase()) || 
          product.description.toLowerCase().includes(query.toLowerCase())
        )
      ));
    }
  };
  
  return (
    <div className="min-h-screen bg-[#fff9f0]">
      {/* Hero section */}
      <motion.div 
        className="relative pt-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3a5a40] font-serif"
            variants={itemVariants}
          >
            Discover Our Collection
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-xl text-xl text-[#588157]"
            variants={itemVariants}
          >
            Curated products that celebrate craftsmanship and quality from our local artisans.
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and filters */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
                  activeCategory === category
                    ? 'bg-[#588157] text-white'
                    : 'bg-white text-[#3a5a40] hover:bg-[#a3b18a] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Search */}
          <motion.div 
            className="relative w-full md:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-[#588157]" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border text-[#3a5a40] border-[#a3b18a] bg-white rounded-md focus:ring-2 focus:ring-[#588157] focus:border-[#588157] shadow-sm"
            />
          </motion.div>
        </motion.div>
        
        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="group bg-white p-6 rounded-lg overflow-hidden border border-[#dad7cd] shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 12px 25px -5px rgba(58, 90, 64, 0.1), 0 10px 10px -5px rgba(58, 90, 64, 0.04)"
                }}
                layout
              >
                <motion.div 
                  className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-[#f0f5f1] transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
                <motion.div 
                  className="mt-4 flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.h3 
                    className="text-lg font-bold text-[#3a5a40]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.span 
                    className="mt-1 text-sm text-[#588157] font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    {product.category}
                  </motion.span>
                  <motion.p 
                    className="mt-2 text-sm text-[#606c38] line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    {product.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-white rounded-lg shadow-sm"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[#3a5a40] text-lg">No products found matching your criteria.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}