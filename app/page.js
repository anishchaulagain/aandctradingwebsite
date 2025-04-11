import Image from "next/image";
import HeroSection from "./_components/Hero";
import Navbar from "./_components/Navbar";
import TrustedCompanies from "./_components/TrustedBy";
import MapLocation from "./_components/Location";
import BecomeRetailer from "./_components/BecomeRetailer";
import Copyright from "./_components/Copyright";

export default function Home() {
  return (
    <div className="md:bg-gray-50 bg-white">
    
      <HeroSection />
      <TrustedCompanies/>
      <MapLocation/>
      <BecomeRetailer/>
      <Copyright/>
    </div>
  );
}
