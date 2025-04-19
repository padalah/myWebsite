import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import nlpPaperSummaryImage from "../../assets/projects/nlpPaperSummary.png";
import bioasqSciqRegImage from "../../assets/projects/bioasqSciqReg.png";
import nlpUnifiedQAModelImage from "../../assets/projects/nlpUnifiedQAModel.png";

export default function CatastrophicForgettingProject() {
  // Find the project by ID
  const project = projects.find((p) => p.id === 2);

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
            This project investigates catastrophic forgetting in text-to-text
            transformer models during domain adaptation for question answering
            (QA) tasks. Specifically, it examines how fine-tuning a pre-trained
            model like UnifiedQA on domain-specific datasets (BioASQ and SciQ)
            affects its performance on the original source domain. The study
            also explores the effectiveness of regularization techniques, such
            as L2 regularization and Elastic Weight Consolidation (EWC), in
            mitigating performance degradation.
          </p>

          {/* Overview Diagram */}
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
                    src={nlpPaperSummaryImage}
                    alt="Catastrophic Forgetting in QA Models"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 1: Illustration of methodology to evaluate catastrophic
                  forgetfulness.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Methodology</h3>

          <h4 className="text-lg font-medium mt-6 mb-3">Model and Baseline</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>UnifiedQA:</strong> A pre-trained QA model developed by
              AllenAI, trained on eight diverse QA datasets encompassing various
              question types.
            </li>
            <li>
              <strong>Baseline Evaluation:</strong> Assessed UnifiedQA's
              performance on its source validation dataset to establish a
              reference point before fine-tuning.
            </li>
          </ul>

          {/* UnifiedQA Model */}
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
                    src={nlpUnifiedQAModelImage}
                    alt="UnifiedQA Model"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 2: Breakdown of the datasets in UnifiedQA.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <h4 className="text-lg font-medium mt-6 mb-3">Fine-Tuning Process</h4>
          <p className="mb-3">
            <strong>Datasets:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              <strong>BioASQ:</strong> Comprises 3,743 biomedical questions
              categorized into four types: abstractive (~25%), extractive
              (~20%), list (~25%), and yes/no (~30%).
            </li>
            <li>
              <strong>SciQ:</strong> Contains 13,679 multiple-choice science
              questions, each accompanied by a supporting paragraph to aid in
              answer selection.
            </li>
          </ul>

          <p className="mb-3">
            <strong>Training Configuration:</strong>
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Split each dataset into 80% training and 20% validation sets.
            </li>
            <li>Fine-tuned the model for 5 epochs using TensorFlow.</li>
            <li>
              Set input length to 512 tokens and target length to 128 tokens.
            </li>
          </ul>

          <h4 className="text-lg font-medium mt-6 mb-3">
            Regularization Techniques
          </h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>L2 Regularization:</strong> Applies a penalty proportional
              to the square of the magnitude of model weights to prevent
              overfitting.
            </li>
            <li>
              <strong>Elastic Weight Consolidation (EWC):</strong> Introduces a
              penalty based on the importance of each weight, aiming to preserve
              knowledge from the source domain during fine-tuning.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Results</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Baseline Performance:</strong> UnifiedQA achieved a String
              Similarity score of 58.24 on the RACE dataset without any
              fine-tuning.
            </li>
          </ul>

          <p className="mb-3">
            <strong>Post Fine-Tuning:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              Fine-tuning with BioASQ reduced the RACE score to 53.71,
              indicating catastrophic forgetting.
            </li>
            <li>
              Applying EWC during BioASQ fine-tuning improved the RACE score to
              58.59, surpassing the original baseline.
            </li>
          </ul>

          <p className="mb-3">
            <strong>SciQ Observations:</strong>
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Fine-tuning with SciQ led to significant forgetting, but the model
              performed exceptionally well on SciQ's validation set.
            </li>
            <li>
              Regularization techniques had limited impact on mitigating
              forgetting in this case.
            </li>
          </ul>

          {/* Regularization Methods Comparison */}
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
                    src={bioasqSciqRegImage}
                    alt="Regularization Methods Comparison"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 3: Comparison of regularization techniques applied to
                  mitigate catastrophic forgetting.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Discussions</h3>
          <p className="mb-4">
            The study confirms that fine-tuning on domain-specific datasets can
            lead to catastrophic forgetting in QA models. EWC proved effective
            in preserving source domain performance when fine-tuning with
            BioASQ. However, its efficacy diminished with SciQ, possibly due to
            the dataset's size and structure, which may have caused the model to
            overfit. The combination of EWC and L2 regularization did not yield
            additional benefits over individual methods.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Challenges</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Dataset Variability:</strong> Differences in question
              types and formats between source and target datasets complicated
              the fine-tuning process.
            </li>
            <li>
              <strong>Overfitting Risks:</strong> The model's strong performance
              on SciQ suggests potential overfitting, reducing its
              generalizability.
            </li>
            <li>
              <strong>Regularization Limitations:</strong> While EWC was
              beneficial for BioASQ, its limited impact on SciQ highlights the
              need for more robust forgetting mitigation strategies.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Future Work</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Enhanced Regularization:</strong> Explore advanced
              techniques beyond EWC and L2 to better address catastrophic
              forgetting.
            </li>
            <li>
              <strong>Dataset Expansion:</strong> Incorporate a broader range of
              domain-specific datasets to assess the model's adaptability and
              resilience.
            </li>
            <li>
              <strong>Model Architecture Analysis:</strong> Investigate how
              different transformer architectures respond to domain adaptation
              and forgetting.
            </li>
            <li>
              <strong>Longitudinal Studies:</strong> Conduct extended
              evaluations to understand the long-term effects of fine-tuning and
              regularization on model performance.
            </li>
          </ul>
        </>
      }
    />
  );
}
