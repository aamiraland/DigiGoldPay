import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const recipientEmails = ["aamiraland@gmail.com, aamir49251@gmail.com"];
    
    recipientEmails.forEach((email) => {
      const mailtoLink = `mailto:${email}?subject=New Contact Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
      window.open(mailtoLink, "_blank"); // Opens in a new tab to prevent overriding
    });
  
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  

  return (
    <div style={{marginTop:"-12vh", marginBottom:"3vh"}}>
    <div className="container mt-5 text-center d-flex flex-column align-items-center">
    <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#333", textDecoration: "underline" }}>
       Contact Us
      </h2>
      <p>Have questions? Get in touch with us.</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light text-center" style={{ maxWidth: "1200px", width: "100%", height:"auto" }}>

        <div className="mb-3">
          <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <textarea name="message" className="form-control" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={{height:"20vh"}} />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
        {submitted && <p className="mt-3 text-success">Message Sent Successfully!</p>}
      </form>

      
      </div>

     
    </div>
  );
}

