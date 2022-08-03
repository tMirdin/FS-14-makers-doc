import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTopic from "./Components/AddTopic/AddTopic";
import EditTopic from "./Components/EditTopic/EditTopic";
import Home from "./Components/Home/Home";
import TopicsDetails from "./Components/TopicsDetails/TopicsDetails";
import TopicsList from "./Components/TopicsList/TopicsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTopic />} />
      <Route path="/topicsList" element={<TopicsList />} />
      <Route path="/topicsDetails/:id" element={<TopicsDetails />} />
      <Route path="/edit/:id" element={<EditTopic />} />
    </Routes>
  );
};

export default MainRoutes;
