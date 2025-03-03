import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    { question: "What is DigiGoldPay?", answer: "DigiGoldPay is a digital gold investment platform that allows users to buy, sell, and store 24K pure gold securely." },
    { question: "How does DigiGoldPay work?", answer: "Users can add funds, purchase fractional gold, store it digitally, and withdraw in physical form or sell it anytime." },
    { question: "Is DigiGoldPay safe?", answer: "Yes, your gold is stored in secure vaults, and transactions are recorded transparently to ensure authenticity." },
    { question: "What is the minimum amount to invest?", answer: "You can start investing with as little as ₹1 or 0.00001 grams of gold." },
    { question: "Can I sell my gold anytime?", answer: "Yes, you can sell your gold 24/7 based on live market prices." },
    { question: "Where is my gold stored?", answer: "Your gold is stored securely in insured vaults with leading gold custodians." },
    { question: "Can I withdraw my gold physically?", answer: "Yes! You can request gold delivery in the form of coins or bars to your doorstep." },
    { question: "What payment methods are available?", answer: "You cannot add funds at the moment as the app is still under development. You can add funds in future via UPI, NetBanking, and Cards." },
    { question: "Are there any transaction fees?", answer: "The app is currently under development. Transaction fees may be applied later." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="container mt-5 text-center d-flex flex-column align-items-center">

    <div 
    style={{
      maxWidth: "1200px",width:"100%", margin: "50px auto", padding: "20px",
      backgroundColor: "#fff", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px", textAlign: "center"
    }}>
      <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#333", textDecoration: "underline" }}>
        Frequently Asked Questions
      </h2>
      
      {faqs.map((faq, index) => (
        <div key={index} style={{ 
          marginTop: "15px", textAlign: "left", borderBottom: "1px solid #ddd", paddingBottom: "10px" 
        }}>
          <button 
            onClick={() => toggleFAQ(index)} 
            style={{ 
              display: "flex", justifyContent: "space-between", alignItems: "center",
              width: "100%", background: "none", border: "none", fontWeight: "600",
              color: "#222", fontSize: "16px", cursor: "pointer", padding: "10px 0" ,textAlign: "left"
            }}>
            {faq.question}
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ marginLeft: "10px" }}
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <p style={{ color: "#555", marginTop: "5px", padding: "10px 0" }}>
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
    </div>
  );
}
