import FeatureCard from './FeatureCard';
import { featureData } from "../Data/featureData";

const Features = () => {
  const data=featureData;
  return (
    <div className="lg:mx-36 md:mx-24 mx-4 pt-16">
      <h1 className="font-mukta text-3xl text-white mb-3">More Reasons To Join</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
        {data.map((e) => (
          <FeatureCard key={e.id} cardData={e} />
        ))}
      </div>
    </div>
  );
};

export default Features;
