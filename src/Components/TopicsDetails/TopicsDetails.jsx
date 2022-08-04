import React, { useContext, useEffect } from "react";
import { topicsContext } from "../../context/TopicContextProvider";
import { useParams, Link } from "react-router-dom";
import "./TopicsDetails.css";

const TopicsDetails = () => {
  const { getTopicDetails, topicDetailsObj, deleteTopic } =
    useContext(topicsContext);

  let { id } = useParams();

  useEffect(() => {
    getTopicDetails(id);
  }, [id]);

  return (
    <>
      <div className="containerTopicDetails">
        <div className="containerTopicDetailsLeft">
          <img id="imgCards" src={topicDetailsObj.image} alt="img" />
        </div>
        <div className="containerTopicDetailsRight">
          <div className="contImg"></div>
          <h3 className="topicDetailsH3">{topicDetailsObj.title}</h3>
          <p className="topicDetailsPT1">{topicDetailsObj.description}</p>
          <p className="topicDetailsPT">
            Подробная информация по ссылке ниже ↓
          </p>
          <a id="topicBtn" target="_blank" href={topicDetailsObj.lib}>
            Ссылка
          </a>
        </div>
      </div>
      <div className="topicDetailsButtons">
        <Link to={`/edit/${id}`}>
          <button className="btnCrud" id="edit">
            ✎
          </button>
        </Link>
        <Link to="/topicsList">
          <button className="btnCrud" id="del" onClick={() => deleteTopic(id)}>
            🗑
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopicsDetails;
