import React from "react";
import PropTypes from "prop-types";
ItemTodo.propTypes = {
  todo: PropTypes.array,
  OnclickItem: PropTypes.func,
};
ItemTodo.defaultProps = {
  todo: [],
  OnclickItem: null,
};
function ItemTodo(props) {
  const { todo, OnclickItem } = props;
  function handleClick(item) {
    if (!OnclickItem) return;
    OnclickItem(item);
  }
  return (
    <div>
      {todo.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid red" }}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default ItemTodo;
