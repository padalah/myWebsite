import { motion } from "framer-motion";

export default function Publications() {
  return (
    <section id="publications" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Publications & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publications Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-700 dark:text-slate-100 border-b border-gray-200 dark:border-gray-700 pb-2">
              <i className="fas fa-book-open mr-2 dark:text-primary-300"></i> Research & Publications
            </h3>
            
            <ul className="space-y-6">
              <li className="flex">
                <div className="mr-4 text-primary dark:text-primary/90">
                  <i className="fas fa-file-alt text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">US Patent for Guided Generation of Color Gradients</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Patent # 10,930,021</p>
                  <a 
                    href="https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10,930,021.PN.&OS=PN/10,930,021&RS=PN/10,930,021" 
                    className="text-primary dark:text-primary/90 text-sm hover:underline dark:hover:text-primary/70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Patent <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-primary dark:text-primary/90">
                  <i className="fas fa-file-alt text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Publications in Human-Computer Interaction Research</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Multiple publications in HCI field</p>
                  <a 
                    href="https://dblp.org/pid/222/5904.html" 
                    className="text-primary dark:text-primary/90 text-sm hover:underline dark:hover:text-primary/70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Publications <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-primary dark:text-primary/90">
                  <i className="fas fa-file-alt text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Featured Poetry</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Poetry featured in Prism, OSU literary magazine.</p>
                  <a 
                    href="https://issuu.com/prismmag/docs/return_digitalversion_" 
                    className="text-primary dark:text-primary/90 text-sm hover:underline dark:hover:text-primary/70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read Poetry <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-700 dark:text-slate-100 border-b border-gray-200 dark:border-gray-700 pb-2">
              <i className="fas fa-award mr-2 dark:text-primary-300"></i> Achievements & Initiatives
            </h3>
            
            <ul className="space-y-6">
              <li className="flex">
                <div className="mr-4 text-amber-500 dark:text-amber-400">
                  <i className="fas fa-trophy text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Microsoft Worldwide Learning Business Impact Award</h4>
                  <p className="text-slate-600 dark:text-slate-400">Recognition for exceptional business impact achievements (2020)</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-amber-500 dark:text-amber-400">
                  <i className="fas fa-trophy text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Adobe Research Women-in-Technology Scholarship</h4>
                  <p className="text-slate-600 dark:text-slate-400">Prestigious scholarship for outstanding women in technology fields (2018)</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-red-500 dark:text-red-400">
                  <i className="fas fa-users text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Founded Adaptive Technology Engineering Network</h4>
                  <p className="text-slate-600 dark:text-slate-400">A club focused on increasing inclusivity and diversity in STEM</p>
                  <a 
                    href="https://www.gazettetimes.com/news/local/adaptive-learning-workshop-at-osu/article_026c9ba3-8969-54fb-a789-b83380d8b233.html" 
                    className="text-primary dark:text-primary/90 text-sm hover:underline dark:hover:text-primary/70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read Article <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-red-500 dark:text-red-400">
                  <i className="fas fa-rocket text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Adventures in Supporting Startups</h4>
                  <p className="text-slate-600 dark:text-slate-400">Work with the Advantage Accelerator program</p>
                  <a 
                    href="https://advantage.oregonstate.edu/feature-story/advantage-accelerator-interns-driven-succeed" 
                    className="text-primary dark:text-primary/90 text-sm hover:underline dark:hover:text-primary/70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Learn More <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
