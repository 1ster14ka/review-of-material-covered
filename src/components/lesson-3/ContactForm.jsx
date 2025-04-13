import { Field, Form, Formik } from "formik";

const ContactForm = ({ onAdd }) => {
  function handleSubmit(values, actions) {
    const result = {
      ...values,
      id: Date.now(),
    };
    onAdd(result);
    console.log(result);

    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <p>Name</p>
          <Field type="text" name="name" />
          <p>Number</p>
          <Field type="text" name="number" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
