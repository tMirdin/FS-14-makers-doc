import React, { createContext } from "react";

export const topicsContext = createContext();
console.log(topicsContext);

const TopicContextProvider = ({ children }) => {
  const addTopic = () => {
    console.log("Отправляем функцию для добавления");
  };

  return (
    <topicsContext.Provider value={{ addTopic }}>
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;
