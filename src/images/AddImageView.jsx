import React from 'react';
import './add-image-view.css';
import { connect } from 'react-redux';
import AddImageForm from './AddImageForm';
import { Link } from 'react-router-dom';
import { createImage } from './image-actions';
export class AddImageView extends React.Component {
  createImage(values) {
    // this.props.dispatch(createImage(image));
    let formData = new FormData();
    formData.append('userimage', values.picture[0]);
    debugger;
  }
  render() {
    return (
      <section className="add-image-screen">
        <Link to="/">
          <img
            className="imgcom-logo"
            src="https://i.imgur.com/2DJKXL8.png)"
            alt="imagecom logo"
          />
        </Link>
        <AddImageForm
          type="image"
          onSubmit={values => this.createImage(values)}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddImageView);
