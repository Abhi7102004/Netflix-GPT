import { FrequentlyAskedQuestionsData } from "../Data/FrequentlyAskedQuestionsData";
import QuestionCard from "./QuestionCard";
const FaqList = () => {
  const questions = FrequentlyAskedQuestionsData;
  return (
    <div className="lg:mx-36 md:mx-24 mx-4 pt-16">
      <h1 className="font-mukta text-3xl text-white mb-3">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-3">
        {questions.map((e) => (
          <QuestionCard key={e.question} question={e} />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
