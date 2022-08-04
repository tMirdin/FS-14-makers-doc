import axios from "axios";
import React, { createContext, useReducer } from "react";

export const topicsContext = createContext();

const API = "http://localhost:8000/topics";

const INIT_STATE = {
  topics: [],
  topicDetails: {},
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...prevState, topics: action.payload };
    case "GET_TOPIC_DETAILS":
      return { ...prevState, topicDetails: action.payload };
    default:
      return prevState;
  }
};

const TopicContextProvider = ({ children }) => {
  // хук useReducer - принимает 2 аргумента: функцию reducer и начальное состояние. Затем хук возвращает массив из 2 элементов: текущее состояние и функцию dispatch. Dispatch (принимает в аргументы action) - функция, которая отправляет объект "action" для изменения состояния.
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // Функция для добавления данных в db.json (POST)
  const addTopic = (topic) => {
    axios.post(API, topic);
  };

  //   Функция для запроса данных с db.json (GET)
  const getTopics = async () => {
    const { data } = await axios.get(API);
    let action = {
      type: "GET_TOPICS",
      payload: data,
    };
    dispatch(action);
  };

  // Функция, которая стягивает данные из общего массива "topics" внутри db.json. Стягивает только один объект, на который мы нажимаем.

  const getTopicDetails = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_TOPIC_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  let cloud = {
    addTopic,
    getTopics,
    getTopicDetails,
    topicsArr: state.topics,
    topicDetailsObj: state.topicDetails,
  };

  return (
    <topicsContext.Provider value={cloud}>{children}</topicsContext.Provider>
  );
};

export default TopicContextProvider;
