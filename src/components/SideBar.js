import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isSideBarOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isSideBarOpen) return;
  return (
    <div className="shadow-lg p-5 w-48">
      <h1 className="font-bold">Home Shorts</h1>
      <ul>
        <Link to="/">
          <li> Home</li>
        </Link>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
