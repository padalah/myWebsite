import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import nodulesImage from "../../assets/projects/nodules.png";
import nodulesHistogramImage from "../../assets/projects/nodulesHistogram.png";
import nodulesSizeImage from "../../assets/projects/nodulesSize.png";
import uNetImage from "../../assets/projects/u-net.png";
import semanticSegmentationImage from "../../assets/projects/semanticSegmenatation.png";
import lungMaskImage from "../../assets/projects/lungMask.png";
import nodulesHistogram2Image from "../../assets/projects/nodulesHistogram2.png";

export default function PulmonaryNoduleSegmentation() {
  // Find the project by ID
  const project = projects.find(p => p.id === 5);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetail 
      project={project}
      content={
        <>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-4">
            This project aimed to develop a deep learning model that automatically segments pulmonary nodules from lung 
            CT scans. Pulmonary nodules are early indicators of lung cancer, and accurate detection is critical for 
            timely diagnosis. The goal was to create a reliable tool that assists radiologists by highlighting regions
            of interest in complex medical imagery.
          </p>
          
          {/* Overview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="my-8"
          >
            <Card>
              <CardContent className="p-1">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={nodulesImage} 
                    alt="Pulmonary Nodule Segmentation Overview" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 1: Visualization of pulmonary nodules in a CT scan slice
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Methodology</h3>
          
          <h4 className="text-lg font-medium mt-6 mb-3">Dataset</h4>
          <p className="mb-4">
            Utilized the LUNA16 dataset, containing 888 CT scans and 1,186 nodule annotations.
          </p>
          
          <h4 className="text-lg font-medium mt-6 mb-3">Preprocessing</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Lung segmentation was performed to extract the region of interest from the full CT scans.
            </li>
            <li>
              Nodule masks were created by mapping annotated coordinates to corresponding voxel spaces.
            </li>
          </ul>
          
          <h4 className="text-lg font-medium mt-6 mb-3">Model</h4>
          <p className="mb-4">
            A U-Net convolutional neural network was chosen for pixel-level semantic segmentation.
          </p>
          
          <h4 className="text-lg font-medium mt-6 mb-3">Training</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Model was trained using TensorFlow Cloud on Google AI Platform.
            </li>
            <li>
              Training and validation datasets were split from the processed CT scans.
            </li>
          </ul>
          
          {/* Methodology Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-1">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={lungMaskImage} 
                      alt="Lung Segmentation Preprocessing" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 2: CT scan with segmented lung region highlighted
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-1">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={nodulesSizeImage} 
                      alt="Nodule Size Distribution" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 3: Distribution of nodule sizes in the dataset
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Results</h3>
          <p className="mb-3"><strong>Performance:</strong></p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Dice coefficient of 0.799 on the training set.
            </li>
            <li>
              Dice coefficient of 0.690 on the validation set.
            </li>
            <li>
              The model produced visual segmentations that closely aligned with expert-annotated nodules.
            </li>
          </ul>
          
          {/* Results Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="my-8"
          >
            <Card>
              <CardContent className="p-1">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={semanticSegmentationImage} 
                    alt="Model Prediction Results" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 4: Side-by-side comparison of input CT scan, predicted segmentation, and ground truth
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Discussion</h3>
          <p className="mb-4">
            The use of a U-Net architecture enabled the model to effectively capture and segment small nodules, 
            even in large and noisy CT scans. The model showed strong learning capacity but experienced some 
            performance drop on unseen data, pointing to mild overfitting. The output visualizations suggest 
            it can serve as a supportive tool in radiology pipelines.
          </p>
          
          {/* Additional visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="my-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-1">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={nodulesHistogramImage} 
                      alt="Nodule Distribution Histogram" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 5: Histogram showing distribution of nodule characteristics in the dataset
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-1">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={nodulesHistogram2Image} 
                      alt="Model Performance Analysis" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 6: Analysis of model performance across different nodule types
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Challenges</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Large Dataset Size:</strong> CT data (~115 GB) required cloud-based training and 
              efficient memory management.
            </li>
            <li>
              <strong>Annotation Mapping:</strong> Translating 3D coordinates into 2D segmentation masks 
              required precise interpolation.
            </li>
            <li>
              <strong>Overfitting:</strong> The performance gap between training and validation metrics 
              highlighted the need for better generalization.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Future Work</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Integrate advanced augmentation techniques and dropout layers to enhance generalization.
            </li>
            <li>
              Expand the dataset to include a wider variety of lung pathologies for improved robustness.
            </li>
            <li>
              Explore real-time inference and clinical deployment options with interpretability features.
            </li>
          </ul>
        </>
      }
    />
  );
}