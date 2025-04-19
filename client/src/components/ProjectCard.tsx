import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/data";
import { getProjectImage } from "@/lib/images";
import { Link } from "wouter";

// Check if we're in production mode for GitHub Pages
const isProduction = import.meta.env.MODE === 'production';
// Use base path for GitHub Pages in production
const basePath = isProduction ? '/myWebsite' : '';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Check if this is an internal project page (URL starts with "/projects/")
  const hasInternalPage = project.url.startsWith('/projects/');
  const projectLink = project.url;
  
  // Wrap with Link for internal routes, or regular anchor for external URLs
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (hasInternalPage) {
      // For internal links, prepend the base path for GitHub Pages
      return <Link href={`${basePath}${projectLink}`}>{children}</Link>;
    }
    return <a href={projectLink} target="_blank" rel="noopener noreferrer">{children}</a>;
  };
  
  return (
    <Card className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardWrapper>
        <div className="h-48 w-full overflow-hidden bg-gray-100 dark:bg-slate-700">
          {project.image ? (
            <img 
              src={getProjectImage(project.id, project.image)} 
              alt={project.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load image for project ${project.id}: ${project.image}`);
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite error loop
                // Keep the broken image as is - we'll see the browser's broken image icon
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10 dark:bg-primary/20">
              <i className={`fas fa-${project.icon || 'laptop-code'} text-4xl text-primary dark:text-primary/90`}></i>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`text-xs px-2 py-1 rounded ${getTagColor(project.tagColor)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-primary dark:text-primary/90 font-medium hover:text-primary/80 dark:hover:text-primary/70">
              {hasInternalPage ? 'View Project Details' : 'View Details'}
            </span>
            <i className="fas fa-arrow-right text-primary dark:text-primary/90"></i>
          </div>
        </CardContent>
      </CardWrapper>
    </Card>
  );
}

function getTagColor(color?: string) {
  switch(color) {
    case 'blue':
      return 'bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200';
    case 'purple':
      return 'bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200';
    case 'green':
      return 'bg-green-100 dark:bg-green-900/70 text-green-800 dark:text-green-200';
    case 'yellow':
      return 'bg-yellow-100 dark:bg-yellow-900/70 text-yellow-800 dark:text-yellow-200';
    case 'indigo':
      return 'bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200';
    case 'red':
      return 'bg-red-100 dark:bg-red-900/70 text-red-800 dark:text-red-200';
    default:
      return 'bg-primary/10 dark:bg-primary/30 text-primary-800 dark:text-white';
  }
}
