import React from "react";
import { Button, Form, InputGroup, FormControl, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const Todo = () => {
  return (
    <div>
      <figure>
          📝
          <figcaption>
            <h1>
              <Badge bg="info">ToDo List✌️</Badge>{" "}
            </h1>
          </figcaption>
        </figure>
        <input type="text" placeholder="✍ Add Items..." /><FontAwesomeIcon icon={faPlusSquare}/>
        {/* <i className="fa fa-plus-square" title="add item"></i> */}

        <div>
          {/* <h3>Apple <FontAwesomeIcon icon={faTrashSquare}/></h3> */}
          {/* <i className="fa fa-trash-square" title="add item"></i> */}
        </div>
    </div>
  )
}

export default Todo
