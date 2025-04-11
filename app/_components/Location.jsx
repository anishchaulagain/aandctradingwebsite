'use client'
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanyLocationMap() {
  const [showDetails, setShowDetails] = useState(false);

  const companyInfo = {
    name: "A. & C. Trading Company",
    address: "Baneshwor, Kathmandu, 44600",
    phone: "+977-9851009385",
    email: "contact@aandctrading.com",
    hours: "Sunday-Friday: 9AM-5PM"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const infoButtonVariants = {
    rest: { scale: 1, backgroundColor: "#ffffff" },
    hover: { scale: 1.1, backgroundColor: "#e6f0ff" },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      id="location" 
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="md:flex">
        {/* Map Image Area - Replace with your actual Google Maps image */}
        <motion.div 
          className="md:w-2/3 relative bg-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="h-96 w-full flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-gray-500 text-center p-4">
              <motion.img 
                src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1744381483/aandctrading/WhatsApp_Image_2025-04-11_at_20.08.49_2b29e591_vyj2lm.jpg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              />
              <motion.p 
                className="text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our Store
              </motion.p>
            </div>
          </motion.div>

          {/* Floating Info Button */}
          <motion.button
            onClick={() => setShowDetails(!showDetails)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md md:hidden"
            variants={infoButtonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate={{ 
              rotate: showDetails ? 180 : 0,
              backgroundColor: showDetails ? "#3b82f6" : "#ffffff",
              color: showDetails ? "#ffffff" : "#3b82f6"
            }}
            transition={{ duration: 0.3 }}
          >
            <MapPin size={20} />
          </motion.button>
        </motion.div>

        {/* Info Panel */}
        <AnimatePresence>
          <motion.div 
            className={`md:w-1/3 bg-white p-6 ${showDetails ? 'block' : 'hidden md:block'}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-800"
                variants={itemVariants}
              >
                {companyInfo.name}
              </motion.h2>
              <motion.p 
                className="text-gray-600 mt-2"
                variants={itemVariants}
              >
                Find us at our location
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" size={18} />
                <p className="text-gray-700">{companyInfo.address}</p>
              </motion.div>

              <motion.div 
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="mr-3 text-blue-600 flex-shrink-0" size={18} />
                <p className="text-gray-700">{companyInfo.phone}</p>
              </motion.div>

              <motion.div 
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="mr-3 text-blue-600 flex-shrink-0" size={18} />
                <p className="text-gray-700">{companyInfo.email}</p>
              </motion.div>

              <motion.div 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Clock className="mt-1 mr-3 text-blue-600 flex-shrink-0" size={18} />
                <p className="text-gray-700">{companyInfo.hours}</p>
              </motion.div>

              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get Directions
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}