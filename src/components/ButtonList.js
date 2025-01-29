import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div
      className="flex overflow-x-scroll w-[95%]"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricker" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Valentines" />
    </div>
  );
};

export default ButtonList;
