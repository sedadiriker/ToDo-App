import React, { useState } from "react";
import "./ToDolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";

const ToDolist = () => {
  const [writeTerm, setWriteTerm] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleTodoChange = (e) => {
    setWriteTerm(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = { text: writeTerm, isEditing: false };
    setTodoList([...todoList, newTodo]);
    setWriteTerm(""); // inputu temizle
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todoList[index].text);
    const updatedTodos = todoList.map((todo, i) =>
      i === index ? { ...todo, isEditing: true } : todo
    );
    setTodoList(updatedTodos);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = (index) => {
    const updatedTodos = todoList.map((todo, i) =>
      i === index ? { ...todo, text: editText, isEditing: false } : todo
    );
    setTodoList(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };
  const handleDouble = (index) => {
    const updatedTodos = todoList.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(updatedTodos);
  };
 
  const handleDelete = (index) => {
    const updatedTodos = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedTodos);
  }
  return (
    <div className="todolist">
      <div className="todo">
        {todoList.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo.isEditing ? (
              <div className="edit-text">
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
              </div>
            ) : (
              <p onDoubleClick={() => handleDouble(index)}                 className={`part-todo ${todo.isCompleted ? "completed" : ""}`}
              >
                {todo.text}
                <FontAwesomeIcon
                  onClick={() => handleEdit(index)}
                  className="pencil-icon"
                  icon={faPencil}
                />
                <FontAwesomeIcon
                onClick={() => handleDelete(index)}
                  className="delete-icon"
                  icon={faTrashCan}
                />
              </p>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={addTodo}>
        <input
          value={writeTerm}
          onChange={handleTodoChange}
          type="text"
          name="todo"
          id="todo"
        />
        <FontAwesomeIcon
          onClick={addTodo}
          className="add-icon"
          icon={faCirclePlus}
        />
      </form>
    </div>
  );
};

export default ToDolist;
