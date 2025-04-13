import { useId } from "react";

const Form = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    // console.log(form);

    const { login, password } = form.elements;
    // console.log(login, password);
    // console.log(login.value, password.value);
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} />
        <label htmlFor={passwordId}>Password</label>
        <input type="text" name="password" id={passwordId} />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Form;
