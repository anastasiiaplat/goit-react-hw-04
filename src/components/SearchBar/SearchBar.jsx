import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";


const SearchBar = ({ onSearch }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, actions) => {
    if (!values.query) {
      toast("Please enter your search!", {
        position: "top-right",
      });
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <header>
        <Form>
          <button  type="submit">
            <BiSearchAlt  />
          </button>
          <Field
            
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
          />
        </Form>
        <Toaster />
      </header>
    </Formik>
  );
};

export default SearchBar;