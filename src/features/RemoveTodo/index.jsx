import React from "react";
import { useState } from "react/cjs/react.development";
import FormTodo from "./components/FormTodo";
import ItemTodo from "./components/itemTodo";

RemoveTodo.propTypes = {};

function RemoveTodo() {
  const InitlistTodo = [
    {
      id: 1,
      title: "Bạn của nhà nông",
    },
    {
      id: 2,
      title: "Bạn của nhà nông 1 ",
    },
    {
      id: 3,
      title: "Bạn của nhà nông 2",
    },
    {
      id: 4,
      title: "Bạn của nhà nông 3",
    },
  ];
  const [listTodo, setListTodo] = useState(InitlistTodo);
  function handleRemoveItem(item) {
    let listafterFilter = listTodo.filter((x) => x.id !== item.id);
    setListTodo(listafterFilter);
  }
  function onSubmit(formValue) {
    const newList = {
      id: listTodo.id + 1,
      ...formValue,
    };
    const newTodoList = [...listTodo];
    newTodoList.push(newList);
    setListTodo(newTodoList);
  }
  return (
    <div>
      <FormTodo onSubmit={onSubmit} />
      <ItemTodo todo={listTodo} OnclickItem={handleRemoveItem} />
    </div>
  );
}

export default RemoveTodo;
