// components/Contact.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا سيتم إضافة منطق إرسال النموذج
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0F1535]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-[#FF6B00]">Touch</span>
        </motion.h2>

        <motion.p
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex space-x-4 mb-9">
              <a
                href="https://www.facebook.com/share/1BxTmP1uSj/"
                className="bg-[#0A0F2C] p-3 rounded-full hover:bg-[#FF6B00] transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-mohsen-5a3716220 "
                className="bg-[#0A0F2C] p-3 rounded-full hover:bg-[#FF6B00] transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://wa.me/201279734467"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A0F2C] p-3 rounded-full hover:bg-[#FF6B00] transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/ahmed_mohsen_74?igsh=Z3plNzBnanM1NXA="
                className="bg-[#0A0F2C] p-3 rounded-full hover:bg-[#FF6B00] transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-4">
                Contact Information
              </h3>
              <p className="mb-4">
                I'm available for freelance work and full-time opportunities.
                Feel free to reach out and I'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-[#FF6B00] p-3 rounded-full mr-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>ahmed10mohsen74@gmail.com</span>
              </div>

              <div className="flex items-center">
                <div className="bg-[#FF6B00] p-3 rounded-full mr-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span>+20 127 973 4467</span>
              </div>

              <div className="flex items-center">
                <div className="bg-[#FF6B00] p-3 rounded-full mr-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>Cairo, Egypt</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-4">
                Follow Me
              </h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0F2C] border border-[#FF6B00]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0F2C] border border-[#FF6B00]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A0F2C] border border-[#FF6B00]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
