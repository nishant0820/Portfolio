"use client";

import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, User, Send } from "lucide-react";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-[80vh] py-5 md:py-10">
      <Container>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-lightSky/5 p-8 border border-lightSky/20 rounded-lg shadow-md shadow-lightSky/10"
          >
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-lightSky">Let&apos;s Get In Touch</h2>
              <p className="text-white/80">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <User size={16} />
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="bg-white/10 border-lightSky/30 text-white placeholder:text-white/50 focus:border-lightSky focus:ring-lightSky/20"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Mail size={16} />
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="bg-white/10 border-lightSky/30 text-white placeholder:text-white/50 focus:border-lightSky focus:ring-lightSky/20"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Phone size={16} />
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="bg-white/10 border-lightSky/30 text-white placeholder:text-white/50 focus:border-lightSky focus:ring-lightSky/20"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  className="w-full bg-lightSky hover:bg-lightSky/90 text-black font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-lightSky/20 text-center"
            >
              <p className="text-white/60 text-sm">
                Or reach out to me directly via email or social media
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ContactsPage;
