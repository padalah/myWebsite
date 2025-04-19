import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { useLocation } from "wouter";

interface FilterButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ label, count, isActive, onClick }: FilterButtonProps) {
  return (
    <motion.button
      className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
        isActive
          ? "bg-primary text-white shadow-md"
          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary/20 border border-transparent dark:border-slate-700"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span>{label}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
        isActive 
          ? "bg-white/20 text-white" 
          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white"
      }`}>
        {count}
      </span>
    </motion.button>
  );
}

export default function Projects() {
  const [location] = useLocation();
  const basePath = location.startsWith('/myWebsite') ? '/myWebsite' : '';
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  // First filter to only include projects with local URLs (project pages)
  const projectsWithPages = projects.filter(project => project.url.startsWith('/projects/'));
  
  // Then apply category filter
  const filteredProjects = activeFilter === "all" 
    ? projectsWithPages 
    : projectsWithPages.filter(project => project.categories.includes(activeFilter));

  // Define more descriptive filter labels with their category keys
  const filterCategories = [
    { key: "all", label: "All Projects" },
    { key: "ml", label: "Machine Learning & AI" },
    { key: "datascience", label: "Data Science & Analytics" },
    { key: "research", label: "Academic Research" },
    { key: "design", label: "UX & Design" },
    { key: "pm", label: "Product Management" }
  ];

  // Calculate counts for each category
  const categoryCounts = filterCategories.map(category => ({
    ...category,
    count: category.key === "all" 
      ? projectsWithPages.length 
      : projectsWithPages.filter(p => p.categories.includes(category.key)).length
  }));

  // Filter out categories with zero projects
  const availableFilters = categoryCounts.filter(category => 
    category.key === "all" || category.count > 0
  );

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Select Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">A select collection of my work in data science, machine learning, and artificial intelligence.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        {/* Project Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {availableFilters.map(filter => (
              <FilterButton 
                key={filter.key}
                label={filter.label} 
                count={filter.count}
                isActive={activeFilter === filter.key}
                onClick={() => handleFilterClick(filter.key)}
              />
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {/* Show More Button (if needed) */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <motion.button 
              className="bg-white dark:bg-slate-800 border border-primary dark:border-primary/70 text-primary dark:text-primary/90 px-6 py-3 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/20 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <i className="fas fa-chevron-down ml-2"></i>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
