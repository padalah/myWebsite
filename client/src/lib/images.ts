// Import images for direct use
import nlpPaperSummaryImage from "../assets/projects/nlpPaperSummary.png";
import flightFinalModelImage from "../assets/projects/flightFinalModel.png";
import experimentControlTreatmentImage from "../assets/projects/experimentControlTreatment.png";
import correlationImage from "../assets/projects/correlation.png";
import nodulesImage from "../assets/projects/nodules.png";

// Map project IDs to their imported images
const projectImages: Record<number, string> = {
  1: flightFinalModelImage, // Flight Delays Project
  2: nlpPaperSummaryImage, // Catastrophic Forgetting Project
  3: experimentControlTreatmentImage, // Political Ideology Project
  4: correlationImage, // Poverty and COVID-19 Project
  5: nodulesImage, // Pulmonary Nodule Segmentation Project
};

/**
 * Get an image source either from the imported image map or fallback to the provided path
 * @param projectId The project ID to look up in the imported images
 * @param imagePath The original image path as a fallback
 * @returns Image source (either imported or path-based)
 */
export function getProjectImage(projectId: number, imagePath?: string): string {
  // If we have a direct import for this project ID, use it
  if (projectId in projectImages) {
    return projectImages[projectId];
  }
  
  // Otherwise fall back to the original image path
  return imagePath || '';
}