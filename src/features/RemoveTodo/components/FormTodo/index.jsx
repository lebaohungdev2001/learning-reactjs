import React from "react";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";

FormTodo.propTypes = {
  onSubmit: PropTypes.func,
};
FormTodo.defaultProps = {
  onSubmit: null,
};
function FormTodo(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleOnSubmit(e) {
    if (!onSubmit) return;
    e.preventDefault();
    const formValue = {
      title: value,
    };
    onSubmit(formValue);

    // reset input
    setValue("");
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default FormTodo;
