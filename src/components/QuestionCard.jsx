import { useState } from "react";

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
        {!expand ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white sm:mr-20 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="size-6 text-white sm:mr-20 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
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
