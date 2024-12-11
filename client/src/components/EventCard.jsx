import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import { StarRating } from "./StarRating";

const EventCard = ({ skillName, rating, participants, description }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 flex flex-col h-[300px]">
      <h2 className="text-2xl font-bold mb-2">{skillName}</h2>
      <div className="flex items-center mb-2">
          <StarRating rating={rating}/>        
        <span className="ml-2 text-sm">({rating.toFixed(1)})</span>
      </div>
      <div className="flex items-center mb-4">
        <Users className="w-5 h-5 mr-2" />
        <span>{participants} participants</span>
      </div>
      <p className="text-muted-foreground flex-grow overflow-y-auto mb-4">
        {description}
      </p>
      {/* <Button size="sm" className="mt-auto">Enroll</Button> */}
      <div className="flex justify-center">
        <Button>Enroll</Button>
      </div>
    </div>
  );
};

export default EventCard;