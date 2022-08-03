import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const AddTopic = () => {
  return (
    <>
      <div className="containerAddTopic">
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
          <FormControl
            placeholder="Добавьте название"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
          <FormControl
            placeholder="Добавьте описание"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
          <FormControl
            placeholder="Вставьте ссылку на картинку"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
          <FormControl
            placeholder="Вставьте ссылку на информацию"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button className="addTopic-btn">Добавить</Button>
      </div>
    </>
  );
};

export default AddTopic;
