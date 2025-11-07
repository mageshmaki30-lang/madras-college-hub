import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  gradientClass: string;
}

const ProgramCard = ({ title, description, image, gradientClass }: ProgramCardProps) => {
  return (
    <Card className={`${gradientClass} border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
      <div className="p-8 space-y-6">
        {/* Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt={title}
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-2">
          <Button 
            variant="outline" 
            className="bg-gray-900 text-white border-0 hover:bg-gray-800 hover:scale-105 transition-all duration-300 group/btn"
          >
            Let's Chat
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProgramCard;
