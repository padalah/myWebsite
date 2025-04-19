import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import experimentControlTreatmentImage from "../../assets/projects/experimentControlTreatment.png";
import experimentDesignImage from "../../assets/projects/experimentDesign.png";
import experimentChartBiddersImage from "../../assets/projects/experimentChartBidders.png";
import experimentChartSoldItemsImage from "../../assets/projects/experimentChartSoldItems.png";
import experimentChartSalesPriceImage from "../../assets/projects/experimentChartSalesPrice.png";
import experimentRegressionTableSoldImage from "../../assets/projects/experimentRegressionTableSold.png";

export default function PoliticalIdeologyProject() {
  // Find the project by ID
  const project = projects.find(p => p.id === 3);
  
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
            This project investigates the influence of political ideology on consumer purchasing decisions. 
            Specifically, it examines whether highlighting a product's country of origin, in this case, 
            labeling a "Trump 2024" flag as "Made in China," affects its sales performance. The study aims 
            to determine if such labeling impacts the likelihood of sale and the final selling price.
          </p>
          
          {/* Experiment Overview Image */}
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
                    src={experimentControlTreatmentImage} 
                    alt="Political Ideology Experiment Design" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 1: Experimental design showing treatment and control conditions for Trump 2024 flag listings
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Methodology</h3>
          <p className="mb-4">
            A 2x2 factorial experimental design was employed over a two-month period on eBay. The factors considered were:
          </p>
          
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Treatment Variable:</strong> Presence or absence of the "Made in China" label in the product title.
            </li>
            <li>
              <strong>Auction Duration:</strong> Listings were set for either 1-day or 3-day auctions.
            </li>
          </ul>
          
          <p className="mb-4">
            Each listing started at a price of $2.99. At any given time, two identical flags were listed 
            simultaneously—one with the treatment condition and one as a control—to ensure comparability. 
            Data collected included whether the flag sold, the final selling price, and the number of 
            views each listing received.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Results</h3>
          
          {/* Results Visualization */}
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
                      src={experimentChartSoldItemsImage} 
                      alt="Sales Likelihood Comparison" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 2: Comparison of sales probability between treatment and control groups
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-1">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={experimentChartSalesPriceImage} 
                      alt="Price Distribution Analysis" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-sm text-slate-600 italic text-center">
                    Figure 3: Distribution of final selling prices across experimental conditions
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Sales Likelihood:</strong> The treatment group (flags labeled "Made in China") experienced 
              a 24.6% decrease in sales probability compared to the control group. This effect was statistically 
              significant, with a 95% confidence interval of [-0.444, -0.048].
            </li>
            <li>
              <strong>Selling Price:</strong> The final selling prices were generally lower for the treatment group. 
              Due to non-normal distribution of prices, a Wilcoxon Rank Sum test was conducted, yielding a p-value 
              of 0.0306, indicating statistical significance.
            </li>
            <li>
              <strong>Buyer Analysis:</strong> Most purchases were made by unique buyers, suggesting minimal 
              influence from repeat customers on the results.
            </li>
          </ul>
          
          {/* Additional Statistics Visualization */}
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
                    src={experimentRegressionTableSoldImage} 
                    alt="Regression Analysis Results" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 text-sm text-slate-600 italic text-center">
                  Figure 4: Regression analysis of experimental variables on sales probability
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Discussions</h3>
          <p className="mb-4">
            The findings suggest that political ideology can significantly influence consumer behavior, 
            particularly when product attributes conflict with ideological beliefs. Labeling a politically 
            charged product as "Made in China" negatively impacted both its likelihood of sale and its 
            selling price. The robustness of the results is supported by the experimental design, which 
            controlled for variables such as auction duration and ensured simultaneous listing of treatment 
            and control items.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Challenges</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Platform Algorithm Transparency:</strong> The eBay algorithm's lack of transparency 
              may have introduced unobserved confounding variables affecting listing visibility and sales.
            </li>
            <li>
              <strong>Sample Size:</strong> The relatively small sample size limits the generalizability 
              of the findings and may affect the statistical power of the analysis.
            </li>
            <li>
              <strong>Data Distribution:</strong> Non-normal distribution of selling prices necessitated 
              non-parametric testing methods, which may have limitations in interpretability.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Future Work</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Expanded Sample Size:</strong> Conducting the experiment with a larger number of 
              listings to enhance the reliability and generalizability of the findings.
            </li>
            <li>
              <strong>Diverse Product Categories:</strong> Exploring the effect across various products 
              with different political associations to assess the consistency of the observed behavior.
            </li>
            <li>
              <strong>Longitudinal Studies:</strong> Implementing longer-term studies to observe if the 
              effects persist over time and under varying market conditions.
            </li>
            <li>
              <strong>Platform Collaboration:</strong> Working with e-commerce platforms to gain insights 
              into algorithmic influences on listing visibility and sales outcomes.
            </li>
          </ul>
        </>
      }
    />
  );
}