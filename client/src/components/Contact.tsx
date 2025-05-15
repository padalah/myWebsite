import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-primary/5 dark:bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            I love connecting and collaborating—let's chat about opportunities, projects, or talks!
          </p>
          <div className="w-20 h-1 bg-primary dark:bg-primary/80 mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 text-center shadow-md dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Connect With Me
              </h3>
              
              <div className="flex flex-col items-center space-y-8">
                <div className="space-y-2">
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    The best way to reach me is through LinkedIn. I check my messages regularly and will respond promptly.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <a 
                    href="https://www.linkedin.com/in/susmitap/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-[#0077b5] hover:bg-[#0077b5]/90 text-white">
                      <i className="fab fa-linkedin mr-2"></i>
                      Connect on LinkedIn
                    </Button>
                  </a>
                  
                  <a 
                    href="https://github.com/padalah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="dark:text-white dark:border-slate-600">
                      <i className="fab fa-github mr-2"></i>
                      View GitHub
                    </Button>
                  </a>
                </div>
                
                <div className="pt-8 border-t border-slate-200 dark:border-slate-700 w-full mt-8">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    I appreciate your interest and look forward to connecting with you!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
