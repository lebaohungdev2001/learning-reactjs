import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";
TodoItem.propTypes = {
  TodoItem: PropTypes.array,
  onClickActives: PropTypes.func,
};
TodoItem.defaultProps = {
  TodoItem: [],
  onClickActives: null,
};

function TodoItem({ TodoItem, onClickActives }) {
  const handleActives = (item, index) => {
    if (!onClickActives) return;
    onClickActives(item, index);
  };
  return (
    <div>
      <ul className="todo">
        {TodoItem.map((item, index) => (
          <li
            key={item.id}
            className={classnames({ completed: item.status === "completed" })}
            onClick={() => handleActives(item, index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoItem;
