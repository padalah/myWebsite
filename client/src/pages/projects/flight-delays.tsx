import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import flightFinalModelImage from "../../assets/projects/flightFinalModel.png";
import flightAlgoExplorationImage from "../../assets/projects/flightAlgoExploration.png";
import flightDecisionTreeImage from "../../assets/projects/flightDecisionTree.png";
import flightDelayGraphImage from "../../assets/projects/flightDelayGraph.png";
import flightDelayStatesImage from "../../assets/projects/flightDelayStates.png";
import flightJoinTablesImage from "../../assets/projects/flightJoinTables.png";

export default function FlightDelaysProject() {
  // Find the project by ID
  const project = projects.find((p) => p.id === 1);

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
            The project aims to predict whether a flight will be delayed by more
            than 15 minutes, utilizing data available two hours prior to
            departure. By integrating historical flight and weather data, the
            goal is to develop a predictive model that can assist stakeholders
            in anticipating and managing flight delays.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Methodology</h3>

          <h4 className="text-lg font-medium mt-6 mb-3">
            Data Collection and Preprocessing
          </h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Flight Data:</strong> Sourced from the U.S. Department of
              Transportation, encompassing data from 2015 to 2019, including 371
              origin airports, 369 destination airports, 19 airlines, and 7,894
              unique tail numbers.
            </li>
            <li>
              <strong>Weather Data:</strong> Obtained from the National Oceanic
              and Atmospheric Administration (NOAA), focusing on conditions such
              as thunderstorms, ice, snow, and fog.
            </li>
            <li>
              <strong>Data Cleaning:</strong> Involved removing duplicates,
              handling missing values, converting times to UTC, and filtering
              for flights within the continental U.S.
            </li>
          </ul>

          <h4 className="text-lg font-medium mt-6 mb-3">Feature Engineering</h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              <strong>Weather Features:</strong> One-hot encoding of adverse
              weather conditions at 2 and 4 hours before departure, retaining
              the most severe condition in each time window.
            </li>
          </ul>

          <p className="mb-3">
            <strong>Flight Features:</strong>
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Origin-Destination (O-D) Pairs:</strong> Identification of
              unique route combinations.
            </li>
            <li>
              <strong>PageRank:</strong> Assessment of airport importance within
              the network.
            </li>
            <li>
              <strong>Delay Graph:</strong> Construction of a graph with
              airports as nodes and median delays as edge weights, capturing
              outbound and inbound delays.
            </li>
            {/* Delay Graph  */}
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
                      src={flightDelayGraphImage}
                      alt="Flight Delay Graph Image"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 1: Example of flight delay graph that we created to
                    capture the delay patterns.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <li>
              <strong>Delay States:</strong> Clustering of network-wide delay
              patterns using K-means to define delay states at 2 and 4 hours
              before departure.
            </li>
            {/* Delay States*/}
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
                      src={flightDelayStatesImage}
                      alt="Flight Delay States Image"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 2: Example of flight states
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <li>
              <strong>Flight Chain Features:</strong> Analysis of an aircraft's
              previous five flights to assess cumulative delay impact.
            </li>
          </ul>

          <h4 className="text-lg font-medium mt-6 mb-3">Data Integration</h4>
          <p className="mb-6">
            The cleaned and engineered flight and weather datasets were merged
            to form a comprehensive dataset for modeling.
          </p>
          {/* Final Dataset*/}
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
                    src={flightJoinTablesImage}
                    alt="Flight Dataset Image"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 3: Final dataset created from combining multiple
                  datasets with various features.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Results</h3>

          <h4 className="text-lg font-medium mt-6 mb-3">Model Development</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Model Architecture:</strong> A stacked model comprising a
              weighted Random Forest Classifier and a Logistic Regression model.
            </li>
          </ul>
          {/* Final Model*/}
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
                    src={flightFinalModelImage}
                    alt="Flight Final Model Image"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 4: Architecture of the final model: a stacked weighted
                  Random Forest Classifier and Regressor with Logistic Regressor
                  Model.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <p className="mb-3">
            <strong>Feature Selection:</strong>
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Categorical Variables:</strong> Selected using decision
              trees.
            </li>
            <li>
              <strong>Continuous Variables:</strong> Reduced dimensionality
              using Principal Component Analysis (PCA), retaining 13 components
              explaining over 95% of variance.
            </li>
          </ul>

          <p className="mb-6">
            <strong>Model Optimization:</strong> Implemented a custom
            time-series aware cross-validation to preserve temporal dependencies
            during hyperparameter tuning.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Discussions</h3>
          <p className="mb-4">
            The integration of network-based features, such as delay graphs and
            flight chains, significantly enhanced the model's predictive
            capabilities. The use of PCA facilitated the identification of key
            continuous variables, while the custom cross-validation approach
            ensured the model's robustness over time.
          </p>
          {/* Final Results*/}
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
                    src={flightAlgoExplorationImage}
                    alt="Flight Algorithm Exploration Image"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 5: Assessing the performance of various models to pick
                  the best one.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Challenges</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Data Quality:</strong> Ensuring the accuracy and
              consistency of flight and weather data, particularly in handling
              missing or inconsistent entries.
            </li>
            <li>
              <strong>Temporal Dependencies:</strong> Standard cross-validation
              techniques were inadequate for time-series data, necessitating the
              development of a custom validation approach.
            </li>
            <li>
              <strong>Feature Complexity:</strong> Engineering features that
              accurately capture the dynamic nature of flight delays without
              introducing multicollinearity.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Future Work</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Real-Time Implementation:</strong> Transitioning the model
              to operate in real-time environments for proactive delay
              management.
            </li>
            <li>
              <strong>Expanded Feature Set:</strong> Incorporating additional
              variables such as air traffic control data, maintenance schedules,
              and passenger load factors.
            </li>
            <li>
              <strong>Model Generalization:</strong> Testing the model's
              applicability across different regions and time frames to assess
              its generalizability.
            </li>
          </ul>
        </>
      }
    />
  );
}
