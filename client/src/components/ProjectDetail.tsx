import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  content: React.ReactNode;
}

export default function ProjectDetail({
  project,
  content,
}: ProjectDetailProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-slate-700 dark:text-slate-300 bg-gray-50 dark:bg-slate-900 min-h-screen flex flex-col transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-16 pb-12 bg-gradient-to-br from-blue-100 via-blue-50 to-emerald-50 dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/#projects">
                  <Button variant="ghost" size="sm" className="mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Projects
                  </Button>
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
                  {project.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded ${getTagColor(project.tagColor)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-12 dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image section removed */}

              {/* Project Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="prose prose-lg max-w-none dark:prose-invert"
              >
                {content}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects - Can be implemented later */}
      </main>

      <Footer />
    </div>
  );
}

function getTagColor(color?: string) {
  switch (color) {
    case "blue":
      return "bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-300";
    case "purple":
      return "bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-300";
    case "green":
      return "bg-green-100 dark:bg-green-900/70 text-green-800 dark:text-green-300";
    case "yellow":
      return "bg-yellow-100 dark:bg-yellow-900/70 text-yellow-800 dark:text-yellow-300";
    case "indigo":
      return "bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-300";
    case "red":
      return "bg-red-100 dark:bg-red-900/70 text-red-800 dark:text-red-300";
    default:
      return "bg-primary/10 dark:bg-primary/30 text-primary-800 dark:text-primary-300";
  }
}
