'use client'
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

export default function CompanyLocationMap() {
  const [showDetails, setShowDetails] = useState(false);
  
  const companyInfo = {
    name: "Your Company Name",
    address: "123 Business Street, City, State ZIP",
    phone: "(555) 123-4567",
    email: "info@yourcompany.com",
    hours: "Monday-Friday: 9AM-5PM"
  };
  
  return (
    <div id="location" className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex ">
        {/* Map Image Area - Replace with your actual Google Maps image */}
        <div className="md:w-2/3 relative bg-white">
          <div className=" h-96 w-full flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <MapPin size={48} className="mx-auto mb-2" />
              <p>Your Google Maps Image Will Go Here</p>
              <p className="text-sm mt-2">Add your map screenshot or embed code here</p>
            </div>
          </div>
          
          {/* Floating Info Button */}
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md md:hidden"
          >
            <MapPin size={20} className="text-blue-600" />
          </button>
        </div>
        
        {/* Info Panel */}
        <div className={`md:w-1/3 bg-white p-6 ${showDetails ? 'block' : 'hidden md:block'}`}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h2>
            <p className="text-gray-600 mt-2">Find us at our location</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" size={18} />
              <p className="text-gray-700">{companyInfo.address}</p>
            </div>
            
            <div className="flex items-center">
              <Phone className="mr-3 text-blue-600 flex-shrink-0" size={18} />
              <p className="text-gray-700">{companyInfo.phone}</p>
            </div>
            
            <div className="flex items-center">
              <Mail className="mr-3 text-blue-600 flex-shrink-0" size={18} />
              <p className="text-gray-700">{companyInfo.email}</p>
            </div>
            
            <div className="flex items-start">
              <Clock className="mt-1 mr-3 text-blue-600 flex-shrink-0" size={18} />
              <p className="text-gray-700">{companyInfo.hours}</p>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}