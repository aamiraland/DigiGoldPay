import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import imageSrc from "../Bird.png";
import FAQ from "./FAQu";
import Representation from "./Representation";
import { useInView } from "react-intersection-observer";
import Working from "./WorkingBenefits";
import ContactUs from "./ContactUs";
import "../App.css"
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imageSrcc from "../Capture5.png";
import { style } from "framer-motion/client";


export default function TopNav({ title = "Welcome to DigiGoldPay" }) {
  const FAQRef = useRef(null);
  const contactusRef = useRef(null);
  const AboutRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");
  const [showHero, setShowHero] = useState(true);
  const [refHero, inViewHero] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsCollapsed(true); // Close the navbar when a link is clicked
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowHero(false);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden"; // ✅ Prevents horizontal scroll
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (FAQRef.current) {
        const rect = FAQRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveTab("FAQ");
        }
      }
      if (contactusRef.current) {
        const rect = contactusRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveTab("contactus");
        }
      } 
       if (AboutRef.current) {
        const rect = AboutRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveTab("AboutUs");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div>
      <div style={{ backgroundColor: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",fontWeight:"600" }}>
       <nav
      className="navbar navbar-expand-lg"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "#FFD709",
      }}
    >
      <div className="container-fluid " >
        <a className="navbar-brand" href="#" onClick={handleNavClick}>
          <img src={imageSrcc} style={{width:30, height:30,marginRight:5}}/>
          DigiGoldPay</a>

        {/* ✅ Button toggles collapse state */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Add collapse class dynamically */}
        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "AboutUs" ? "active" : ""}`}
                href="#AboutUs"
                onClick={handleNavClick}
                style={{paddingLeft:10}}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "FAQ" ? "active" : ""}`}
                href="#FAQ"
                style={{paddingLeft:10}}
                onClick={handleNavClick}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "contactus" ? "active" : ""}`}
                href="#contactus"
                style={{paddingLeft:10}}
                onClick={handleNavClick}
              >
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>


        {/* Hero Section */}
        <div ref={refHero} style={{ height: "100vh",maxHeight:"100vh", width: "100%", maxWidth: "100vw", textAlign: "center", padding: "24px", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflowX: "hidden" }}>
          <motion.img
            src={imageSrc}
            alt="Bird"
            style={{ marginTop: "0%", width: "90vw", height: "90vw", maxWidth: "400px", maxHeight: "400px", marginBottom: "1vw" }}
            initial={{ opacity: 0, x: "50vw", y: "-10vh" }}
            animate={inViewHero ? { opacity: 1, x: "0", y: "0" } : { opacity: 0, x: "50vw", y: "-10vh" }}
            transition={{ duration: 1 }}
          />
          <motion.h1 style={{ fontSize: "45px", fontWeight: "bold", color: "#333", maxWidth: "90%", marginTop: "-10%" }} initial={{ opacity: 0, y: -20 }} animate={inViewHero ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            {title}
          </motion.h1>
          <motion.p style={{ fontSize: "18px", color: "#555", maxWidth: "80%", margin: "0 auto"}} initial={{ opacity: 0 }} animate={inViewHero ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1 }}>
            The Future of Payments with the Stability of Gold
          </motion.p>
          <motion.div
            style={{ display: "flex", gap: "3vw", marginTop: "1vw", justifyContent: "center", flexWrap: "wrap" }}
            initial={{ opacity: 0 }}
            animate={inViewHero ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            

            <button
             onClick={() => {
              const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
              if (/android/i.test(userAgent)) {
                window.location.href = "https://drive.google.com/uc?export=download&id=12huS6q_jM30M_kkBNQuT4pYbQrT2Vk9V";
              } else {
                alert("This app is available only for Android devices. App for other devices coming soon!");
              }
            }}
            
              
              
              style={{ backgroundColor: "#FFD709", color: "black", display: "flex", alignItems: "center", gap: "5px", padding: "15px 4.5vw", borderRadius: "8px", border: "none", fontSize: "20px" }}>
              <FaDownload size={30}  />  Download the App Now
            </button>
            {/* <button
              onClick={() => {
                alert("The app is not available for iOS yet. Coming soon! 🚀");
              }}
              style={{
                backgroundColor: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "20px 4.5vw",
                borderRadius: "8px",
                border: "none",
                fontSize: "20px",
              }}
            >
              <FaApple size={30} style={{ marginRight: "10", marginLeft: "0px"  }} />
              Download for iPhone 
            </button> */}
          

          </motion.div>
        </div>
      </div>

      {/* Other Sections */}
      <div ref={AboutRef} id="AboutUs" style={{ maxWidth: "100%", padding: "24px", backgroundColor: "white", borderRadius: "8px", textAlign: "center" }}>
     
      <Representation />
      </div>
      
      <Working />

      {/* FAQ Section */}
      <div ref={FAQRef} id="FAQ" style={{ marginTop: "40px", maxWidth: "100%", padding: "24px", backgroundColor: "white", borderRadius: "8px", textAlign: "center" }}>
        <FAQ />
      </div>

      {/* Contact Us Section */}
      <div ref={contactusRef} id="contactus" style={{ maxWidth: "100%", padding: "24px", backgroundColor: "white", borderRadius: "8px", textAlign: "center" }}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );

} 
