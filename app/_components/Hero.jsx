'use client'
import { motion } from 'framer-motion';
import { ArrowRight, Package, TrendingUp, ShoppingCart } from 'lucide-react';

export default function HeroSection() {
    // Framer motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 }
        }
    };

    const productCategories = [
        { name: "Premium Drinks", icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><ShoppingCart size={24} /></div>, color: "bg-blue-50 border-blue-200" },
        { name: "Snacks & Chips", icon: <div className="bg-yellow-100 p-3 rounded-full text-yellow-600"><Package size={24} /></div>, color: "bg-yellow-50 border-yellow-200" },
        { name: "Confectionery", icon: <div className="bg-red-100 p-3 rounded-full text-red-600"><TrendingUp size={24} /></div>, color: "bg-red-50 border-red-200" }
    ];

    return (
        <div className="bg-gradient-to-b from-orange-50 to-white overflow-hidden">
            {/* Main Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 mt-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Hero Content */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-4">
                                Premium Food Distribution of Nepal
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                        >
                            Connecting <span className="text-orange-500">Delicious Brands</span> With <span className="text-blue-600">Happy Customers</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-gray-600 max-w-lg"
                        >
                            Your trusted distribution partner for premium drinks, snacks, and confectionery products across Nepal and beyond.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-black hover:bg-gray-900 cursor-pointer  text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-red-200 transition-all duration-300"
                            >
                                <a href="/products" className='flex gap-x-2 items-center'>Our Products <ArrowRight size={18} /></a>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300"
                            
                            >
                                <a href="mailto:anishchaulagain2058@gmail.com">Become a Retailer</a>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 text-gray-500"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full bg-orange-${i * 100} border-2 border-white flex items-center justify-center text-xs text-white font-bold`}>
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <span>Trusted by 100+ retailers nationwide</span>
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        variants={fadeIn}
                        className="relative"
                    >
                        <div className="relative">
                            <motion.div
                                initial={{ rotate: -5, y: 20 }}
                                animate={{ rotate: 0, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="aspect-w-4 aspect-h-3 relative">
                                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                        <div className="text-center text-white px-4">
                                            <div className="text-5xl font-bold mb-2">Premium Distribution</div>
                                            <div className="text-xl">Quality Products, Reliable Service</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Decoration Elements */}
                            <motion.div
                                initial={{ x: -30, y: -20, opacity: 0 }}
                                animate={{ x: -60, y: -40, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="absolute -top-10 -left-10 bg-blue-500 w-24 h-24 rounded-xl shadow-lg transform -rotate-12 hidden md:block"
                            />
                            <motion.div
                                initial={{ x: 30, y: 20, opacity: 0 }}
                                animate={{ x: 60, y: 40, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.7 }}
                                className="absolute -bottom-8 -right-8 bg-red-500 w-16 h-16 rounded-lg shadow-lg transform rotate-12 hidden md:block"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Product Categories Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Our Product Categories</h2>
                    <p className="text-gray-600 mt-2">Discover our extensive range of quality products</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {productCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`border ${category.color} rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300`}
                        >
                            <div className="flex justify-center mb-4">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                            <p className="text-gray-600 mt-2">Quality products from leading brands</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 text-blue-600 font-medium flex items-center gap-1 mx-auto"
                            >
                               <a href="/products">Learn more</a>  <ArrowRight size={16} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold">100+</div>
                            <div className="text-blue-200 mt-1">Retail Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">50+</div>
                            <div className="text-blue-200 mt-1">Brand Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">11+</div>
                            <div className="text-blue-200 mt-1">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">24/7</div>
                            <div className="text-blue-200 mt-1">Support</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}