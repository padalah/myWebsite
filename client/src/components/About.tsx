import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-slate-800 dark:text-white mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Hey there! I’m a Product Manager at Microsoft who’s passionate about building inclusive, user-first experiences. I earned my master’s in Information and Data Science from UC Berkeley, where I dove deep into data, AI, and human-centered design.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              With a background in product management, machine learning, and HCI research, I love creating tech that works beautifully for everyone. Let’s build something great—and have fun doing it.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden shadow-md dark:bg-slate-800 dark:border-slate-700">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 border-b border-primary/20 dark:border-primary/30">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-white flex items-center">
                      <i className="fas fa-graduation-cap mr-2 text-primary"></i>
                      Education
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-primary-700 dark:text-primary-300">UC Berkeley</h4>
                        <span className="text-sm text-slate-500 dark:text-slate-400">2020 - 2022</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">Master's in Information & Data Science</p>
                    </div>
                    
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-primary-700 dark:text-primary-300">Oregon State University</h4>
                        <span className="text-sm text-slate-500 dark:text-slate-400">2015 - 2019</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">Honors Bachelor's in Computer Science</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="overflow-hidden shadow-md h-full dark:bg-slate-800 dark:border-slate-700">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 border-b border-primary/20 dark:border-primary/30">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-white flex items-center">
                      <i className="fas fa-briefcase mr-2 text-primary"></i>
                      Professional Experience
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-primary-700 dark:text-primary-300">Microsoft</h4>
                        <span className="text-sm text-slate-500 dark:text-slate-400">2019 - Present</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">Product Manager II</p>
                    </div>
                    
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-primary-700 dark:text-primary-300">Adobe</h4>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Summer 2020</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">Emerging Graphics Research Intern</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 shadow-md dark:bg-slate-800 dark:border-slate-700">
              <h3 className="font-semibold text-xl mb-4 dark:text-white">Skills & Expertise</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "JavaScript", "C++", "R", "Machine Learning", "Statistical Analysis", "NLP", "Data Analysis"].map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="bg-primary/10 text-primary-800 dark:bg-primary/20 dark:text-primary-200 text-sm px-3 py-1 rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Product & Design
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Product Management", "Product Strategy", "UX Research", "Inclusive Design", "Prototyping", "A/B Testing", "Agile/Scrum"].map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="bg-primary/10 text-primary-800 dark:bg-primary/20 dark:text-primary-200 text-sm px-3 py-1 rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Leadership & Communication
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cross-Functional Leadership", "Public Speaking", "Project Management", "Team Collaboration"].map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="bg-primary/10 text-primary-800 dark:bg-primary/20 dark:text-primary-200 text-sm px-3 py-1 rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Research Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Human-Computer Interaction", "Inclusive UX", "Data Science", "AI/ML Applications"].map((interest, index) => (
                      <motion.span 
                        key={interest}
                        className="bg-primary/10 text-primary-800 dark:bg-primary/20 dark:text-primary-200 text-sm px-3 py-1 rounded-full"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
