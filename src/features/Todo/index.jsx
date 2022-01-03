import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./components/TodoItem";
import {
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import queryString from "query-string";
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
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [featuresTodo, setFeaturesTodo] = useState(InitfeaturesTodo);
  const [filterTodo, setFilterTodo] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterTodo(params.status || "all");
  }, [location.search]);
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
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowComp = () => {
    setFilterTodo("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    setFilterTodo("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
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
