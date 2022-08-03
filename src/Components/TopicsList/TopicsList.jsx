import React, { useContext, useEffect } from "react";
import { topicsContext } from "../../context/TopicContextProvider";
import { Button } from "react-bootstrap";
import "./TopicsList.css";

const TopicsList = () => {
  const { topicsArr, getTopics } = useContext(topicsContext);

  useEffect(() => {
    getTopics();
  }, []);
  console.log(topicsArr);
  return (
    <div className="container d-flex justify-content-evenly flex-wrap container-cards">
      {topicsArr.map((item) => (
        <div>
          <div
            className="card1 text-center m-4"
            style={{ width: "18rem", height: "350px" }}
          >
            <img
              src={item.image}
              height="200"
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>

              <Button>Просмотреть</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
