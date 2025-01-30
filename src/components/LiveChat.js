import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chartSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chart.messages);
  const inputRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black h-[300px] w-full bg-slate-100 rounded-lg text-wrap overflow-y-scroll flex flex-col-reverse">
        {messages?.map((item) => (
          <ChatMessage name={item?.name} message={item?.message} />
        ))}
      </div>
      <div className="w-full p-2 ml-2 border border-black bg-gray-200 flex justify-between">
        <input
          type="text"
          className="w-3/4 px-2 py-1 bg-gray-100 rounded-lg"
          ref={inputRef}
        />
        <button
          className="px-2  py-1 mx-2  bg-green-400 cursor-pointer rounded-lg hover:bg-green-300"
          onClick={() => {
            dispatch(
              addMessage({ name: "Pavan", message: inputRef?.current?.value })
            );
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
