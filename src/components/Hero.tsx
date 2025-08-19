// components/Hero.tsx
import { motion } from "framer-motion";

const Hero = () => {
  const downloadCV = () => {
    // في الواقع، سيتم استبدال هذا برابط تحميل حقيقي
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1mvROL4FXMSHWfIVth8azm5fuFgAS0d44/view?usp=drive_link";
    link.download = "Ahmed-Mohsen-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-[#FF6B00] to-orange-300 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-[#0A0F2C] flex items-center justify-center">
              <span className="text-4xl text-[#FF6B00] font-bold">AM</span>
            </div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ahmed Mohsen
          </motion.h1>

          <motion.h2
            className="text-xl md:text-3xl text-[#FF6B00] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Hire Me
          </a>
          <button
            onClick={downloadCV}
            className="border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
