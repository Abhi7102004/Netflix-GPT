import { useState } from "react";
import { DOWN_ARROW, UP_ARROW } from "../utils/constants";

const QuestionCard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [expand, setExpand] = useState(false);
  const questionTitle = question.question;
  const answer = question.answer;

  return (
    <div className=" bg-gray-700 ">
      <div
        onClick={() => {
          setShowAnswer(!showAnswer);
          setExpand(!expand);
        }}
        className="w-full flex py-6 px-10 justify-between items-center hover:bg-gray-600"
      >
        <h1 className="text-white font-medium text-2xl">{questionTitle}</h1>
        <div className="sm:mr-20 cursor-pointer">
        {!expand ? UP_ARROW : DOWN_ARROW}
        </div>
      </div>
      {showAnswer && (
        <div className="px-10 py-4 border-t-[2px] border-black">
          {answer.map((e, index) => (
            <p key={index} className="mb-8 text-white text-xl">
              {e}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
