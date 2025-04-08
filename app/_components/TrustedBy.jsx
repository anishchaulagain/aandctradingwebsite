'use client'
import { motion } from 'framer-motion';
import { CheckCircle, Award, Star } from 'lucide-react';

export default function TrustedCompanies() {
    // Animation variants
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

    // Mock company logos with different colors representing various brands
    const companies = [
        {
          name: "Century Group",
          logo: "https://res.cloudinary.com/dv9s1kiz2/image/upload/v1744124027/aandctrading/c406b5b5-9a63-4abb-8224-580e2b72f7d5.png", // Replace with the actual logo URL
          color: "bg-blue-500",
        },
        {
          name: "Bakeland Pokhara",
          logo: "https://res.cloudinary.com/dv9s1kiz2/image/upload/v1744124510/aandctrading/e3ed41cf-8e0c-4293-914e-65f1f91f54b9.png", // Replace with the actual logo URL
          color: "bg-green-500",
        },
        {
          name: "Company C",
          logo: "https://via.placeholder.com/150", // Replace with the actual logo URL
          color: "bg-red-500",
        },
        // Add more companies as needed
      ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900">Trusted by Leading Brands</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        We proudly represent and distribute premium products from these respected food and beverage companies
                    </p>
                </motion.div>

                {/* Company Logos */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
                >
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300"
                        >
                            <div className="w-24 h-24 mb-4 flex items-center justify-center">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{company.category}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}


                {/* Testimonials */}


                {/* Partnership CTA */}

            </div>
        </div>
    );
}