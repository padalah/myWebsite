import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Project detail pages
import FlightDelaysProject from "@/pages/projects/flight-delays";
import CatastrophicForgettingProject from "@/pages/projects/catastrophic-forgetting-qa";
import PoliticalIdeologyProject from "@/pages/projects/political-ideology-consumer-behavior";
import PovertyCovidProject from "@/pages/projects/poverty-covid-19";
import PulmonaryNoduleSegmentation from "@/pages/projects/pulmonary-nodule-segmentation";

// Check if we're in production mode for GitHub Pages
const isProduction = import.meta.env.MODE === 'production';
// Use base path for GitHub Pages in production
const basePath = isProduction ? '/myWebsite' : '';

function Router() {
  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      
      {/* Project Routes */}
      <Route path={`${basePath}/projects/flight-delays`} component={FlightDelaysProject} />
      <Route path={`${basePath}/projects/catastrophic-forgetting-qa`} component={CatastrophicForgettingProject} />
      <Route path={`${basePath}/projects/political-ideology-consumer-behavior`} component={PoliticalIdeologyProject} />
      <Route path={`${basePath}/projects/poverty-covid-19`} component={PovertyCovidProject} />
      <Route path={`${basePath}/projects/pulmonary-nodule-segmentation`} component={PulmonaryNoduleSegmentation} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
