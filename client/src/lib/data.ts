export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  url: string;
  tags: string[];
  tagColor?: 'blue' | 'purple' | 'green' | 'yellow' | 'indigo' | 'red';
  categories: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Predicting Flight Delays",
    description: "Leveraging ML algorithms to predict flight delays in the United States.",
    image: "/images/flightFinalModel.png",
    url: "/projects/flight-delays",
    tags: ["Python", "Algorithms", "Modeling"],
    tagColor: "blue",
    categories: ["ml", "datascience"]
  },
  {
    id: 2,
    title: "Exploring Catastrophic Forgetting for QA",
    description: "Alleviating forgetfulness in domain fine-tuned UnifiedQA model.",
    image: "/images/nlpPaperSummary.png",
    url: "/projects/catastrophic-forgetting-qa",
    tags: ["NLP Research", "Python"],
    tagColor: "purple",
    categories: ["ml", "research"]
  },
  {
    id: 3,
    title: "Effect of Political Ideology on Consumer Behavior",
    description: "Will people buy \"Trump 2024\" Flags made in China?",
    image: "/images/experimentControlTreatment.png",
    url: "/projects/political-ideology-consumer-behavior",
    tags: ["Experimentation", "Statistical Analysis", "R"],
    tagColor: "green",
    categories: ["research", "datascience"]
  },
  {
    id: 4,
    title: "Poverty and COVID-19",
    description: "A linear regression analysis on how COVID-19 impacts those living in poverty.",
    image: "/images/correlation.png",
    url: "/projects/poverty-covid-19",
    tags: ["Statistical Analysis", "R"],
    tagColor: "yellow",
    categories: ["datascience"]
  },
  {
    id: 5,
    title: "Pulmonary Nodule Segmentation",
    description: "A U-net model for image segmentation on CT scans to predict lung nodules.",
    image: "/images/nodules.png",
    url: "/projects/pulmonary-nodule-segmentation",
    tags: ["Neural Networks", "Image Segmentation", "Python"],
    tagColor: "blue",
    categories: ["ml", "datascience"]
  },
  {
    id: 6,
    title: "Barriers to Entry in Open Source Software",
    description: "A research study using qualitative methods to understand barriers for newcomers.",
    image: "https://padalah.github.io/portfolio/images/DifferentUseCases.png",
    url: "https://padalah.github.io/portfolio/genderMag.html",
    tags: ["HCI Research", "Qualitative Analysis", "Published Work"],
    tagColor: "indigo",
    categories: ["research"]
  },
  {
    id: 7,
    title: "Microsoft Learning Discounts",
    description: "A sample of my work at Microsoft: building digital discounts for Microsoft learners.",
    image: "https://padalah.github.io/portfolio/images/discount.png",
    url: "https://padalah.github.io/portfolio/pmWork.html",
    tags: ["Product Management", "User Advocate", "Agile/Scrum"],
    tagColor: "red",
    categories: ["pm"]
  },
  {
    id: 8,
    title: "Adobe Image Recoloring Tool",
    description: "Redesigning Adobe's image recoloring tool prototype.",
    image: "https://padalah.github.io/portfolio/images/newUI.png",
    url: "https://padalah.github.io/portfolio/capstone.html",
    tags: ["Design", "Color Theory", "User Research", "JavaScript"],
    tagColor: "purple",
    categories: ["design"]
  },
  {
    id: 9,
    title: "Coreless Promotomers Analysis",
    description: "Data analysis on coreless promotomers in Arabadopsis (plant) DNA.",
    image: "https://padalah.github.io/portfolio/images/forwardReverse.png",
    url: "https://padalah.github.io/portfolio/ursa.html",
    tags: ["Data Analysis", "Pearl"],
    tagColor: "green",
    categories: ["datascience"]
  },
  {
    id: 10,
    title: "Inclusive Health Portal",
    description: "Building inclusive personas and designing a health portal for low-literacy and literate users.",
    image: "https://padalah.github.io/portfolio/images/Alexander.png",
    url: "https://padalah.github.io/portfolio/health.html",
    tags: ["Personas", "Inclusive Design", "Prototyping"],
    tagColor: "yellow",
    categories: ["design"]
  }
];
