import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../App.css'; // Assuming the CSS is placed in styles.css

export default function Working() {
  const options = { triggerOnce: false, threshold: 0.2 };

  // Define references for different sections
  const [sectionRef, inViewSection] = useInView(options);
  const [processRef, inViewProcess] = useInView(options);
  const [benefitsRef, inViewBenefits] = useInView(options);
  const [futureRef, inViewFuture] = useInView(options);

  // Step-by-step process data
  const steps = [
    "1️⃣ Users purchase digital gold from a secure platform.",
    "2️⃣ The gold is stored in insured vaults and linked to a digital wallet.",
    "3️⃣ Users can send digital gold as payments or convert it to fiat.",
    "4️⃣ Transactions are securely recorded on the server.",
  ];

  // Benefits of digital gold
  const benefits = [
    "✔ Gold-Backed Payments – Every transaction is backed by real, physical gold",
    "✔ Inflation Hedge – Maintains value better than fiat currency.",
    "✔ Secure & Transparent – Every transaction is recorded to ensure authenticity.",
    "✔ Global Acceptance – Can be used anywhere in the world.",
    "✔ Low Transaction Fees – Compared to traditional banking methods.",
  ];

  // Future scope of digital gold
  const futureScope = [
    "✔ Banking with Gold Investments – Banks offering accounts linked to digital gold holdings.",
    "✔ International Payments & Remittances – Gold-backed transfers with minimal fees.",
    "✔ Integration with FinTech & Digital Wallets – Contactless payments via mobile apps.",
    "✔ Loans Against Digital Gold – Users can take loans using their digital gold as collateral.",
  ];

  return (
    <div className="working-container" style={{backgroundColor:"white"}}>
      {/* How Digital Gold Works Section */}
      <motion.div ref={sectionRef} className="content-container">
        <div className="left-content">
          <motion.h1 
            className="header-text"
            initial={{ opacity: 0.2, y: -20 }}
            animate={inViewSection ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            How Digital Gold Works
          </motion.h1>
          <motion.p
            className="description-text"
            initial={{ opacity: 0.2 }}
            animate={inViewSection ? { opacity: 1 } : { opacity: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            A simple and secure way to buy, store, and use digital gold for payments.
          </motion.p>

          {/* Step-by-Step Process */}
          <motion.h2 
            ref={processRef} 
            className="sub-header-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inViewProcess ? { opacity: 1, x: 0 } : { opacity: 0.2, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            Step-by-Step Process
          </motion.h2>
          <motion.ul 
            className="step-list"
            initial={{ opacity: 0 }}
            animate={inViewProcess ? { opacity: 1 } : { opacity: 0.2 }}
            transition={{ duration: 1 }}
          >
            {steps.map((step, index) => (
              <motion.li 
                key={index} 
                className="step-item"
                initial={{ opacity: 0, x: -20 }}
                animate={inViewProcess ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 * index, duration: 0.2 }}
              >
                {step}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Image */}
        <motion.img
          src="https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg"

          alt="Stacked Gold Bars"
          className="image-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inViewSection ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Benefits Section */}
      <motion.div ref={benefitsRef} className="content-container">

      <div className="left-content">
        <motion.h2 
          className="sub-header-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inViewBenefits ? { opacity: 1, y: 0 } : { opacity: 0.2, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Benefits of Using Digital Gold for Payments
        </motion.h2>
        <motion.ul 
          className="benefit-list"
          initial={{ opacity: 0 }}
          animate={inViewBenefits ? { opacity: 1 } : { opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.li 
              key={index} 
              className="benefit-item"
              initial={{ opacity: 0, x: 20 }}
              animate={inViewBenefits ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {benefit}
            </motion.li>
          ))}
        </motion.ul>
     </div>
             {/* Image */}
        <motion.img
          src="https://assets.upstox.com/content/assets/images/cms/202467/goldrate.jpg"
          alt="Stacked Gold Bars"
          className="image-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inViewBenefits ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Future Scope Section */}
      <motion.div ref={futureRef} className="content-container">
      <div className="left-content">

        <motion.h2 
          className="sub-header-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inViewFuture ? { opacity: 1, y: 0 } : { opacity: 0.2, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          Future Scope of Digital Gold Payments
        </motion.h2>
        <motion.ul 
          className="scope-list"
          initial={{ opacity: 0 }}
          animate={inViewFuture ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {futureScope.map((scope, index) => (
            <motion.li 
              key={index} 
              className="scope-item"
              initial={{ opacity: 0, x: 20 }}
              animate={inViewFuture ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.2 * index, duration: 0.4 }}
            >
              {scope}
            </motion.li>
          ))}
        </motion.ul>
     </div>
     <motion.img
          src="https://media.istockphoto.com/id/490693469/photo/gold-ingots.jpg?s=612x612&w=0&k=20&c=W0EpTVoZ0dyefcfORcRUDS_StzW1TjDMLX0PQ3zmzS4="
          alt="Stacked Gold Bars"
          className="image-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inViewFuture ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
}
