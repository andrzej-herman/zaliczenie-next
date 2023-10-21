import { Star } from "lucide-react";

interface TravelStarProps {
  category: number;
}

const TravelStar = ({ category }: TravelStarProps) => {
  const getArr = (len: number) => {
    const arr = new Array(category);
    for (let index = 0; index < len; index++) {
      arr.push(index + 1);
    }
    return arr;
  };

  const data = getArr(category);

  return (
    <div className="flex items-center gap-0.5">
      {data.map((element) => (
        <Star key={element} className="w-4 h-4" />
      ))}
    </div>
  );
};

export default TravelStar;
