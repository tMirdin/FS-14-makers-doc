import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import TopicContextProvider from "./context/TopicContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <TopicContextProvider>
        <NavBar />
        <MainRoutes />
      </TopicContextProvider>
    </>
  );
};

export default App;
