// components/Skills.tsx
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "TailwindCSS", level: 80, category: "Frontend" },
    { name: "Next.js", level: 75, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "PostgreSQL", level: 70, category: "Backend" },
    { name: "REST APIs", level: 85, category: "APIs" },
    { name: "GraphQL", level: 70, category: "APIs" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "Docker", level: 65, category: "Tools" },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-[#FF6B00]">Skills</span>
        </motion.h2>

        <motion.p
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I've worked with a variety of technologies and continue to expand my
          skill set to stay current with industry trends.
        </motion.p>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#FF6B00]">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#0F1535] rounded-full">
                      <motion.div
                        className="h-full bg-[#FF6B00] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
