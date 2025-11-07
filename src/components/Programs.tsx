import ProgramCard from "./ProgramCard";
import cseBanner from "@/assets/cse-banner.png";
import aiBanner from "@/assets/ai-banner.png";
import aimlBanner from "@/assets/aiml-banner.png";
import itBanner from "@/assets/it-banner.png";

const Programs = () => {
  const programs = [
    {
      title: "B.E. in Computer Science & Engineering",
      description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
      image: cseBanner,
      gradientClass: "gradient-lime",
    },
    {
      title: "B.Tech. in Artificial Intelligence & Data Science",
      description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
      image: aiBanner,
      gradientClass: "gradient-coral",
    },
    {
      title: "B.E. in Computer Science & Engineering (AI & ML)",
      description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
      image: aimlBanner,
      gradientClass: "gradient-purple",
    },
    {
      title: "B.Tech. in Information Technology (IT)",
      description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
      image: itBanner,
      gradientClass: "gradient-blue",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
