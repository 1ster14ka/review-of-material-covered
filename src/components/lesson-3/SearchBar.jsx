import { Field, Form, Formik } from "formik";
import { useId, useState } from "react";

const SearchBar = ({ value, onSelect }) => {
  const [inputValue, setInputValue] = useState();
  const selectId = useId();
  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  const initialValues = {
    username: "",
    email: "",
  };

  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }

  return (
    <div>
      <label htmlFor={selectId}>Change lang</label>
      <select
        name="lang"
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukraine</option>
        <option value="en">English</option>
      </select>
      <input type="text" onChange={handleChange} value={inputValue} />
      <p>{inputValue}</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="username" />
          <Field type="email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
