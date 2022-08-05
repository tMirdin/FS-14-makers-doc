import React, { useContext, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { topicsContext } from "../../context/TopicContextProvider";
import "./AddTopic.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const AddTopic = () => {
  const { addTopic } = useContext(topicsContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [lib, setLib] = useState("");

  const alertToastify = () => {
    toast.warn("Заполните все поля!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const successToastify = () => {
    toast.success("Успешно добавлено!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  let navigate = useNavigate();

  function handleClick() {
    if (!title.trim() || !description.trim() || !image.trim() || !lib.trim()) {
      alertToastify();
      return;
    }
    let newTopic = {
      title,
      description,
      image,
      lib,
    };
    addTopic(newTopic);
    successToastify();
    setTitle("");
    setDescription("");
    setImage("");
    setLib("");
    setTimeout(() => {
      navigate("/topicsList");
    }, 3000);
  }

  return (
    <>
      <div className="containerAddTopic">
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
          <FormControl
            value={title}
            placeholder="Добавьте название"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
          <FormControl
            value={description}
            placeholder="Добавьте описание"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
          <FormControl
            value={image}
            placeholder="Вставьте ссылку на картинку"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setImage(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
          <FormControl
            value={lib}
            placeholder="Вставьте ссылку на информацию"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setLib(e.target.value)}
          />
        </InputGroup>

        <Button onClick={handleClick} className="addTopic-btn">
          Добавить
        </Button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default AddTopic;
