import React from 'react';
import './add-image-view.css';
import { connect } from 'react-redux';
import AddImageForm from './AddImageForm';
import { Link } from 'react-router-dom';
import { createImage } from '../redux/actions/image-actions';
export class AddImageView extends React.Component {
  createImage(image) {
    this.props.dispatch(createImage(image));
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
          onAdd={image => this.createImage(image)}
          onSubmit={values => console.log(values)}
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
