import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_MOVIES, SEARCH_ICON } from "../utils/constants";
import lang from "../utils/languageconstants";
import groqapi from "../utils/groqapi";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.language.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchListTMDB = async (item) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${item}&include_adult=false&language=en-US&page=1`,
      API_MOVIES
    );
    const json = await response.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery = `Act as a movie and TV show recommendation system. Based on the query "${searchText.current.value}", suggest 7 relevant movies or TV shows. Provide only the names of the movies/TV shows, separated by commas, without additional text or explanations.`;

    try {
      const gptResults = await groqapi.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "llama3-8b-8192",
      });

      if (!gptResults.choices) {
        return;
      }

      const gptList = gptResults.choices?.[0].message?.content.split(", ");
      const data = gptList.map((item) => searchListTMDB(item));
      const tmdbResults = await Promise.all(data);

      dispatch(
        addGptMovieResults({ gptNames: gptList, gptItems: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="relative mt-12 flex items-center sm:scale-100 scale-90 w-full max-w-md mx-auto bg-gray-900 bg-opacity-50 rounded-lg"
    >
      <input
        ref={searchText}
        className="w-full pl-4 pr-10 py-2 rounded-lg border-[1px] border-gray-300 text-white outline-none bg-transparent focus:ring-1 placeholder-gray-500 transition duration-200 ease-in-out"
        type="text"
        placeholder={lang[language].GptSearchPlaceholder}
      />
      <button
        onClick={handleGptSearchClick}
        type="submit"
        className="absolute right-0 flex items-center bg-gray-800 h-full border-[1px] border-gray-300 rounded-r-lg"
      >
        <img className="w-5 h-5 mx-3" src={SEARCH_ICON} alt="Search Icon" />
      </button>
    </form>
  );
};

export default GptSearchBar;
