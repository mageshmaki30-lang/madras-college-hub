import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Madras Engineering College - Leading Tech Education in India</title>
        <meta name="description" content="India's 1st Engineering College specialising in IT, Computer Science, Data Science, AI, Machine Learning, Cybersecurity & Business Systems. Start your tech journey today." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Programs />
        </main>
      </div>
    </>
  );
};

export default Index;
