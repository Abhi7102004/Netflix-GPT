export const API_MOVIES = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API,
  },
};

export const HomeBackgroundImage = "https://i.ibb.co/vXqDmnh/background.jpg";
export const LOGO = "https://i.ibb.co/r5krrdz/logo.png";
export const _3D_MOVIES_IMAGE = "https://assets.nflxext.com/ffe/siteui/acquisition/nmhp/games-lg.webp";
export const USER_LOGO = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const BG_SearchBar = "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdHbjrX0uL1mH7uUW7VZ-p5GJOSNNRko_9A_12Mlv5wVYQIDy4nuupxLHxkDj9V0e1OLBs_s8ZlxFkyhPlK5XkrlTK0c7yP42LLinQdYhz8lqfgUcOH68JAbEcY45jG02gCI1NyKVf1lqxsQFmcNN5szbv8.jpg?r=aee";
export const SEARCH_ICON = "https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF";
export const GROQ_API_KEY = import.meta.env.VITE_AI_API;

export const GET_STARTED_BUTTON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const UP_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export const DOWN_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>
);

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
