import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_VIDEO_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedSearchResults = useSelector((state) => state.search);
  const handleToggleSideBar = () => {
    dispatch(toggleMenu());
  };
  const fetchYoutubeSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + inputRef?.current?.value);
    const json = await data.json();
    if (json) {
      dispatch(cacheResults({ [json[0]]: json[1] }));
      setSearchResults(json?.[1]);
    }
  };

  const debounceFunc = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  };
  const optimizedSearchResults = () => {
    if (cachedSearchResults[inputRef?.current?.value]) {
      setSearchResults(cachedSearchResults[inputRef?.current?.value]);
    } else {
      fetchYoutubeSuggestions();
    }
  };
  let debouncedYoutubeSearchFunc = debounceFunc(optimizedSearchResults, 200);

  const fetchVideos = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_SEARCH_API + inputRef?.current?.value
    );
    const json = await data.json();
    dispatch(
      addVideos(json.items.map((item) => ({ ...item, id: item?.id?.videoId })))
    );
  };
  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div
          className="flex col-span-1
      "
        >
          <img
            className="h-8 cursor-pointer"
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
            }
            alt="hamburger-menu"
            onClick={handleToggleSideBar}
          />
          <a href="/">
            <img
              className="h-8 mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
              alt="youtube-logo"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <div>
            <input
              type="text"
              ref={inputRef}
              className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              onChange={debouncedYoutubeSearchFunc}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 300);
              }}
            />
            <button
              className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
              onClick={() => {
                fetchVideos();
              }}
            >
              🔍
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="h-8"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user"
          />
        </div>
      </div>
      {showSuggestions && (
        <div className="absolute top-[8%] left-[30%] lg:left-[20%] bg-white py-2 px-2 w-[30%] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {searchResults.map((item) => (
              <li
                className="py-2 px-3 m-1 shadow-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  fetchVideos();
                }}
              >
                🔍{item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Head;
