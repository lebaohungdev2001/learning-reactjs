import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./components/TodoItem";

Todo.propTypes = {};

function Todo(props) {
  const InitfeaturesTodo = [
    {
      id: 1,
      name: "test-1",
      status: "new",
    },
    {
      id: 2,
      name: "test-2",
      status: "completed",
    },
    {
      id: 3,
      name: "test-3",
      status: "new",
    },
  ];
  const [featuresTodo, setFeaturesTodo] = useState(InitfeaturesTodo);
  const [filterTodo, setFilterTodo] = useState("all");
  const handleOnActive = (item, index) => {
    // console.log(item, index);
    const newFeauturesList = [...featuresTodo];
    newFeauturesList[index] = {
      ...newFeauturesList[index],
      status: newFeauturesList[index].status === "new" ? "completed" : "new",
    };
    setFeaturesTodo(newFeauturesList);
  };

  const handleShowall = () => {
    setFilterTodo("all");
  };
  const handleShowComp = () => {
    setFilterTodo("completed");
  };
  const handleShowNew = () => {
    setFilterTodo("new");
  };
  const renderTodo = featuresTodo.filter(
    (todo) => filterTodo === "all" || filterTodo === todo.status
  );

  return (
    <div>
      <TodoItem TodoItem={renderTodo} onClickActives={handleOnActive} />
      <button onClick={handleShowall}>Show all</button>
      <button onClick={handleShowComp}>Show completed</button>
      <button onClick={handleShowNew}>Show new</button>
    </div>
  );
}

export default Todo;
