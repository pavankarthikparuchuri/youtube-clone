import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        className="h-8"
        alt="user"
      />
      <div className="flex flex-col px-3">
        <span className="font-bold">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
