'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/products',
    },

    { name: 'Location', href: '#location' }
  ];

  return (
    <>
      <motion.nav
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className={`text-2xl font-bold ${isScrolled ? 'text-red-600' : 'text-red-600'}`}>
                A & C<span className="text-orange-500"> Trading</span>
              </span>

            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  {link.dropdown ? (
                    <div>
                      <motion.button
                        className={`px-4 py-2 rounded-md  flex items-center ${isScrolled ? 'text-gray-800   hover:text-red-600' : 'text-gray-800 hover:text-gray-500'
                          } font-medium`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      >
                        <h1 className='font-bold '>{link.name}</h1>
                        <ChevronDown
                          className="ml-1 h-4 w-4"
                          style={{
                            transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-10"
                          >
                            {link.dropdown.map((dropdownItem, idx) => (
                              <motion.a
                                key={idx}
                                href={dropdownItem.href}
                                className="block px-4 py-2 font-bold text-gray-800 hover:bg-orange-50 hover:text-red-600"
                                whileHover={{ x: 5 }}
                              >
                                {dropdownItem.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={link.href}
                      className={`px-4 py-2 rounded-md font-bold ${isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-gray-800 hover:text-orange-300'
                        } font-medium`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">


              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black hover:bg-gray-900 text-white px-4 py-2  rounded-lg flex items-center gap-2 transition-colors duration-300"
              >
                <a href="mailto:anishchaulagain2058@gmail.com">Become a Retailer</a>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-16 inset-x-0 z-40 bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <div key={index} className="py-2">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        className="flex items-center justify-between w-full text-gray-800 font-medium"
                      >
                        {link.name}
                        <ChevronDown
                          className="h-5 w-5"
                          style={{
                            transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 pl-4 border-l-2 border-orange-200"
                          >
                            {link.dropdown.map((dropdownItem, idx) => (
                              <a
                                key={idx}
                                href={dropdownItem.href}
                                className="block py-2 text-gray-600 hover:text-red-600"
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a href={link.href} className="block text-gray-800 font-medium">
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                  <ShoppingBag size={18} />
                  View Our Catalog
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black z-30 pt-16"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}