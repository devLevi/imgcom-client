import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ImageInput from './ImageInput';
import { Link } from 'react-router-dom';

class AddImageForm extends React.Component {
  onFileAdd(files) {
    debugger;
    this.setState({
      files
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="image-submit-form" onSubmit={handleSubmit}>
        <Field name="picture" component={ImageInput} />
        <button className="upload-image-button" type="submit">
          Upload
        </button>
        <Link to="/" className="cancel-link">
          Cancel
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'contact'
})(AddImageForm);
