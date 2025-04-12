'use client'
import React from 'react'
import { motion } from 'framer-motion';

const BecomeRetailer = () => {
  return (
    <div id='retailer' className='mt-10 md:mt-36'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900">Want to partner with us?</h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Join our network of premium brands and expand your reach across the market
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-blue-200 transition-all duration-300"
        >
          <a href="/contact">Become a Retailer</a>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default BecomeRetailer
