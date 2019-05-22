import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ImageInput from './ImageInput';
import { Link } from 'react-router-dom';
import { validateImageFiles } from './validation';

class AddImageForm extends React.Component {
  handleFormSubmit(event) {
    const photoFiles = Array.from(event.target.files);
    const errors = validateImageFiles(photoFiles);
    if (errors.length) {
      return alert(`The following errors ocurred: /n/n${errors.join('\n')}`);
    } else {
      const newState = {};
      newState[event.target.name] = photoFiles;
      this.setState(newState);
    }
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <form className="image-submit-form" onSubmit={onSubmit}>
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
