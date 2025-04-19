import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import correlationImage from "../../assets/projects/correlation.png";
import distributionsImage from "../../assets/projects/distributions.png";
import transformedDistributionsImage from "../../assets/projects/transformedDistributions.png";

export default function PovertyCovidProject() {
  // Find the project by ID
  const project = projects.find(p => p.id === 4);
  
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
            This project explores the relationship between poverty-related variables and COVID-19 case rates across U.S. states. 
            The analysis aims to understand how socioeconomic factors—such as poverty, homelessness, unemployment—and policy decisions 
            like mask mandates and Medicaid spending correlate with the spread of COVID-19. By developing regression models based on 
            publicly available state-level data, the project provides insights into the systemic disparities influencing pandemic outcomes.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Methodology</h3>
          <h4 className="text-lg font-medium mt-6 mb-3">Data Collection</h4>
          <p className="mb-3">
            Data were aggregated from multiple public sources and included the following state-level indicators:
          </p>
          
          <p className="mb-2 font-medium">Socioeconomic Variables:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Poverty rate (% below the poverty line)</li>
            <li>Unemployment rate (2018)</li>
            <li>Median household income</li>
            <li>Total number of homeless individuals (2019)</li>
          </ul>
          
          <p className="mb-2 font-medium">Health and Risk Variables:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Percentage of individuals at risk for severe COVID-19</li>
            <li>Log of non-elderly adults with pre-existing conditions</li>
            <li>Medicaid spending as a % of total state expenditure</li>
            <li>Life expectancy at birth</li>
          </ul>
          
          <p className="mb-2 font-medium">Policy and Demographic Variables:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Population density (people per square mile)</li>
            <li>Presence of a mask mandate</li>
            <li>Start date of public mask mandates</li>
          </ul>
          
          <h4 className="text-lg font-medium mt-6 mb-3">Preprocessing and Transformation</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              A correlation matrix was constructed to identify multicollinearity. Life expectancy was found to be highly 
              correlated with other predictors (e.g., poverty and pre-existing conditions) and was excluded from modeling 
              to reduce redundancy.
            </li>
            <li>
              Log transformations were applied to skewed variables such as population density, number of homeless individuals, 
              and pre-existing conditions to normalize their distributions.
            </li>
            <li>
              Three linear regression models were built to incrementally add predictors and measure changes in explanatory power.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Results</h3>
          <p className="mb-4">
            Three linear regression models were created to examine the relationship between poverty and COVID-19 case rates, 
            progressively increasing in complexity and number of predictors:
          </p>
          
          <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-medium mb-2">Model 1: Simple Linear Regression</h4>
            <p className="mb-2"><em>Formula: lm(formula = caseRate ~ povertyLine)</em></p>
            <p className="mb-3">Description: Explores the direct relationship between the poverty rate and COVID-19 case rate across states.</p>
            <p className="font-medium">Results:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Adjusted R²: 0.07</li>
              <li>Poverty rate was statistically significant (p-value: 0.037), showing a modest but meaningful positive correlation with case rates.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-medium mb-2">Model 2: Multiple Regression with Key Socioeconomic Factors</h4>
            <p className="mb-2"><em>Formula: lm(formula = caseRate ~ povertyLine + logPopDensity + percentUnemployed + logNumHomeless)</em></p>
            <p className="mb-3">Description: Adds population density, unemployment, and homelessness as predictors.</p>
            <p className="font-medium">Results:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Adjusted R²: 0.09</li>
              <li>Poverty remained significant (p-value: 0.007).</li>
              <li>Interestingly, unemployment rate showed a negative correlation with case rate, suggesting potential reduced exposure among unemployed individuals.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-medium mb-2">Model 3: Comprehensive Socioeconomic and Policy Model</h4>
            <p className="mb-2">
              <em>Formula: lm(formula = caseRate ~ povertyLine + maskMandate + logPopDensity + logPreExistingCondtions + percentAtRisk + logNumHomeless + medicaidSpending + percentUnemployed + medianIncome, data = covid_19TData)</em>
            </p>
            <p className="mb-3">Description: Incorporates all previously considered variables, plus mask mandates, healthcare risk factors, Medicaid spending, and income.</p>
            <p className="font-medium">Results:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Adjusted R²: 0.40</li>
              <li>Poverty remained a strong predictor (p-value: 0.001).</li>
              <li>Mask mandates and higher Medicaid spending were associated with lower case rates.</li>
              <li>The model revealed that a broad range of factors jointly contribute to COVID-19 case rate disparities across states.</li>
            </ul>
          </div>
          
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
                    src={correlationImage} 
                    alt="Regression Models Comparison" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 dark:text-slate-400 italic text-center">
                  Figure: Correlation analysis of key variables in the study
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Discussions</h3>
          <p className="mb-4">
            The regression results support the hypothesis that poverty plays a significant role in determining COVID-19 case rates. 
            The strength of this relationship persisted across all models, even after adjusting for confounding variables.
          </p>
          
          <p className="mb-4">
            The final model highlights that:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>States with stronger public health infrastructure (e.g., mask mandates, Medicaid spending) tended to have lower case rates.</li>
            <li>Higher unemployment rates, surprisingly, were negatively correlated with case rates—possibly reflecting reduced social interaction among the unemployed.</li>
            <li>The substantial improvement in model fit (from 0.07 to 0.40 in adjusted R²) suggests that pandemic outcomes are influenced by a complex interplay of economic, social, and policy factors.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Challenges</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Data Inconsistency:</strong> Variables were collected from different years (e.g., 2018 unemployment vs. 2020 COVID data), which may introduce temporal mismatches.
            </li>
            <li>
              <strong>Multicollinearity:</strong> Strong correlations between variables such as life expectancy, poverty, and health risks limited the number of predictors that could be included simultaneously.
            </li>
            <li>
              <strong>Causal Inference:</strong> As a correlational study, it cannot definitively establish causality between predictors and case rates.
            </li>
            <li>
              <strong>Sample Size:</strong> With only 50 U.S. states as data points, statistical power and model generalizability are limited.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Future Work</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Time-Series Analysis:</strong> Extend the study to include longitudinal data to observe how these relationships evolve throughout the pandemic.
            </li>
            <li>
              <strong>Granular Analysis:</strong> Drill down to the county or city level to capture local dynamics that state-level analysis may overlook.
            </li>
            <li>
              <strong>Policy Effectiveness Studies:</strong> Assess which specific interventions (e.g., mask mandates, Medicaid expansion) had the most impact on mitigating spread.
            </li>
            <li>
              <strong>Machine Learning Approaches:</strong> Use ensemble or nonlinear models to detect interactions and complex dependencies between variables.
            </li>
          </ul>
        </>
      }
    />
  );
}