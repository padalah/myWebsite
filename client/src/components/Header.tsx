import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

// Check if we're in production mode for GitHub Pages
const isProduction = import.meta.env.MODE === 'production';
// Use base path for GitHub Pages in production
const basePath = isProduction ? '/myWebsite' : '';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check scroll position
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check user's color scheme preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  
  // Separate effect to apply theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm transition-colors duration-300 ${
      isScrolled ? "shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`${basePath}/`} className="text-xl font-bold text-primary dark:text-primary/90 hover:text-primary/90 flex items-center space-x-2">
          <span>Susmita Padala</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">About</a>
          <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">Select Projects</a>
          <a href="#publications" className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">Publications</a>
          <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all">Contact</a>
          
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 ml-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </nav>
        
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          
          <button 
            className="text-slate-700 dark:text-slate-300 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white dark:bg-slate-900 transition-colors duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-3 space-y-2">
          <a 
            href="#about" 
            className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Select Projects
          </a>
          <a 
            href="#publications" 
            className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Publications
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-primary dark:text-primary/90 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
