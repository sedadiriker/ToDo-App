import { useState } from "react";

const ToDolist = () => {
  const [writeTerm, setWriteTerm] = useState("");
  // console.log(writeTerm)

  const handleTodo = (e) => {
    setWriteTerm(e.target.value)
  }
  const addTodo = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={addTodo} action="#">
        <input value={writeTerm} onChange={handleTodo} type="text" name="todo" id="todo" />
        <button>Add Todo</button>
      </form>
      <div className="todo-list">
        
      </div>
    </div>
  );
};

export default ToDolist;
