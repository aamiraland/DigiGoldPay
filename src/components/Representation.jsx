import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageSrc from "../Diagram.png";

export default function Representation() {
  const options = { triggerOnce: false, threshold: 0.2 };
  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [ref4, inView4] = useInView(options);
  const [ref5, inView5] = useInView(options);

  return (
    <motion.div 
    ref={ref2} 
    
    style={{ 
        backgroundColor: "white", 
        justifyContent:"center",
        alignItems:"center",
        padding: "40px", 
        textAlign: "center",  
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 20,
        padding: 20,
        opacity: "1",
        width:"100%",
      
    
    }}
    initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}>
    
                <div style={{}}>
      <motion.h1 
        ref={ref1} 
        style={{ fontSize: "36px", fontWeight: "bold", color: "#333", marginTop:50 }}
        initial={{ opacity: 0, y: -20 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
       What is DigiGoldPay?
      </motion.h1>
      <motion.p 
        ref={ref2} 
        style={{ fontSize: "20px", color: "#555", maxWidth: "800px", margin: "0 auto" }}
        initial={{ opacity: 0 }}
        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        DigiGoldPay is a future-ready payment system that combines the stability of gold with digital convenience. Users can buy, store, and transact in 24K gold, ensuring value protection against inflation. With seamless transactions, it offers a reliable, inflation-resistant alternative to traditional currencies and volatile assets.
      </motion.p>
      
      <section style={{ marginTop: "40px" }}>
        <motion.h2 
          ref={ref3}
          style={{ fontSize: "28px", fontWeight: "bold", color: "#444" }}
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          What is Digital Gold?
        </motion.h2>
        <motion.p 
          style={{ fontSize: "18px", color: "#666", maxWidth: "800px", margin: "0 auto" }}
          initial={{ opacity: 0 }}
          animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Digital gold is a digital representation of real, physical gold stored securely in vaults. Users can buy, sell, and transfer digital gold just like traditional currencies.
        </motion.p>
      </section>
     
        
      </div>


      <section style={{ marginTop: "40px" }}>
        <motion.h2 
          ref={ref4}
          style={{ fontSize: "28px", fontWeight: "bold", color: "#444" }}
          initial={{ opacity: 0, y: -20 }}
          animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Process Flow Diagram
        </motion.h2>
     
        <motion.img 
          ref={ref5}
          src={imageSrc} 
          alt="Digital Gold Payment Flow" 
          style={{ width: "80%", maxWidth: "400px", marginTop: "20px", borderRadius:25 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        />
      </section>
    </motion.div>
  );
}


