import React from 'react';
import './add-image-view.css';
import { connect } from 'react-redux';
import AddImageForm from './AddImageForm';
import { Link } from 'react-router-dom';

export class AddImageView extends React.Component {
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
        <AddImageForm onSubmit={values => console.log(values)} />
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
