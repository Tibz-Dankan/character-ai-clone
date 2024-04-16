import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import chats from "../data/chats.json";
import { extractFirstLetter } from "../utils/extractFirstLetter";

export const Chat = () => {
  const { chatId } = useParams();
  const chatMates = chats.chatMates;

  const [messages, setMessages] = useState([]);

  const currentChatMate = chatMates.find(
    (chatMate) => chatMate.userId === parseInt(chatId)
  );

  useEffect(() => {
    const updateMessages = () => {
      if (!currentChatMate.messages[0]) return;

      setMessages(() => currentChatMate.messages);
    };
    updateMessages();
  }, [messages, setMessages, chatId]);

  // Current user is Assumed to "tibdan" and userId is 1
  const getChatMateName = (userId) => {
    if (userId == 1) return "tibdan";
    return currentChatMate.name;
  };

  const isCurrentUser = (userId) => {
    return userId === 1;
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center text-gray-100">
        <header className="w-full p-3 py-0">
          <div className="flex items-center gap-3 rounded-2xl">
            <div className="w-12 h-12">
              <span
                className="cursor-pointer grid place-items-center
                w-12 h-12 rounded-[50%] text-gray-50 first-letter:uppercase 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
              >
                {extractFirstLetter(currentChatMate.name)}
              </span>
            </div>
            <div>
              <p className="text-lg">{currentChatMate.name}</p>
              <p className="text-gray-500 text-sm">By {currentChatMate.tag}</p>
            </div>
          </div>
        </header>
        <div className="w-full flex items-center justify-center mt-20">
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl">
            <div className="w-12 h-12">
              <span
                className="cursor-pointer grid place-items-center
                w-12 h-12 rounded-[50%] text-gray-50 first-letter:uppercase 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
              >
                {extractFirstLetter(currentChatMate.name)}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg">{currentChatMate.name}</p>
              <p className="text-gray-500 text-sm">
                {currentChatMate.description}
              </p>
              <p className="text-gray-500 text-sm">By {currentChatMate.tag}</p>
            </div>
          </div>
        </div>

        <div
          className="w-full md:max-w-[700px] mt-8 flex flex-col 
          items-center justify-center gap-8"
        >
          {messages.map((message, index) => (
            <div
              className={`w-full flex flex-cols gap-2 items-center ${
                isCurrentUser(message.userId) ? "justify-end" : "justify-start"
              }`}
              key={index}
            >
              <div className="space-y-2">
                {isCurrentUser(message.userId) && (
                  <p className="flex items-center justify-end gap-2">
                    <span>{getChatMateName(message.userId)}</span>
                    <span
                      className="cursor-pointer grid place-items-center text-sm
                      w-6 h-6 rounded-[50%] text-gray-50 first-letter:uppercase 
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
                    >
                      {extractFirstLetter(getChatMateName(message.userId))}
                    </span>
                  </p>
                )}
                {!isCurrentUser(message.userId) && (
                  <p className="flex items-center gap-2">
                    <span
                      className="cursor-pointer grid place-items-center text-sm
                      w-6 h-6 rounded-[50%] text-gray-50 first-letter:uppercase 
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
                    >
                      {extractFirstLetter(getChatMateName(message.userId))}
                    </span>
                    <span>{getChatMateName(message.userId)}</span>
                  </p>
                )}
                <p
                  className="p-4 rounded-2xl bg-gray-800 text-gray-200 
                  inline-block w-auto max-w-full sm:max-w-[500px]"
                >
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
