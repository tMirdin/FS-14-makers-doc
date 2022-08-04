import React, { useContext, useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { topicsContext } from "../../context/TopicContextProvider";
import { useParams, Link } from "react-router-dom";

const EditTopic = () => {
  const { editTopicPatch, getTopicDetails, topicDetailsObj } =
    useContext(topicsContext);

  console.log(topicDetailsObj);

  const [editTitle, setEditTitle] = useState(topicDetailsObj.title);
  const [editDescription, setEditDescription] = useState(
    topicDetailsObj.description
  );
  const [editImage, setEditImage] = useState(topicDetailsObj.image);
  const [editLib, setEditLib] = useState(topicDetailsObj.lib);

  let { id } = useParams();

  useEffect(() => {
    getTopicDetails(id);
  }, [id]);

  function handleClick() {
    let editedTopic = {
      title: editTitle,
      description: editDescription,
      image: editImage,
      lib: editLib,
    };
    editTopicPatch(id, editedTopic);
  }

  return (
    <>
      <div className="containerAddTopic">
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
          <FormControl
            value={editTitle}
            placeholder="Добавьте название"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
          <FormControl
            value={editDescription}
            placeholder="Добавьте описание"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
          <FormControl
            value={editImage}
            placeholder="Вставьте ссылку на картинку"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setEditImage(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
          <FormControl
            value={editLib}
            placeholder="Вставьте ссылку на информацию"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setEditLib(e.target.value)}
          />
        </InputGroup>
        <Link to="/topicsList">
          <Button onClick={handleClick} className="addTopic-btn">
            Сохранить
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EditTopic;
