// components/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-[#FF6B00]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create efficient, scalable, and
              user-friendly solutions.
            </p>
            <p className="text-lg mb-6">
              My journey in web development started several years ago, and since
              then I've worked on various projects ranging from small business
              websites to complex enterprise applications.
            </p>
            <p className="text-lg">
              I'm constantly learning new technologies and improving my skills
              to stay up-to-date with the latest trends in the ever-evolving
              world of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#0F1535] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-2">
                Frontend
              </h3>
              <p>Html, css, javaScript, React, TypeScript, TailwindCSS </p>
            </div>
            <div className="bg-[#0F1535] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-2">Backend</h3>
              <p>Node.js, Express, MongoDB</p>
            </div>
            <div className="bg-[#0F1535] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-2">APIs</h3>
              <p>REST, Authentication</p>
            </div>
            <div className="bg-[#0F1535] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FF6B00] mb-2">Tools</h3>
              <p>Git, Vercel, Netlify</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
