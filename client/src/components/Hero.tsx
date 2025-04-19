import { motion } from "framer-motion";
import ProfilePicImage from "../assets/profilepic.jpg";
import { useLocation } from "wouter";

export default function Hero() {
  const [location] = useLocation();
  // Get current base path, handling both local dev and GitHub Pages
  const basePath = location.startsWith('/myWebsite') ? '/myWebsite' : '';
  
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl transition-transform duration-300 hover:scale-105 max-w-full aspect-square">
              <img 
                src={ProfilePicImage}
                alt="Susmita Padala" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Hello! I am
              <span className="text-primary dark:text-primary/90 block md:inline"> Susmita Padala</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              Product leader with 5+ years of experience in APIs, UX, experimentation, and data analysis.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <motion.a 
                href={`${basePath}/#projects`}
                className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href={`${basePath}/#contact`}
                className="bg-white dark:bg-slate-800 text-primary dark:text-primary/90 border border-primary dark:border-primary/50 py-3 px-6 rounded-lg hover:bg-primary/5 dark:hover:bg-slate-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
