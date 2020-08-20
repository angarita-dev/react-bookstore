import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    const { categoryList } = this.props;

    const defaultBookTitle = 'Book title';
    const defaultBookCategory = categoryList[0];

    this.state = {
      title: defaultBookTitle,
      category: defaultBookCategory,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { createBook } = this.props;
    const { title } = this.state;

    if (title.length === 0 || !title.trim()) return; // Empty validation

    createBook(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const newState = {};

    newState[name] = value;
    this.setState(newState);
  }

  render() {
    const { categoryList } = this.props;
    const { title, category } = this.state;

    const bookOptions = categoryList.map(category => (
      <option
        key={category}
        value={category}
      >
        {category}
      </option>
    ));

    return (
      <div className="book-form">
        <input
          type="text"
          id="book-title-input"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <select
          name="category"
          id="book-category-input"
          value={category}
          onChange={this.handleChange}
        >
          {bookOptions}
        </select>
        <span
          onClick={this.handleSubmit}
          onKeyPress={this.handleSubmit}
          role="button"
          tabIndex="0"
        >
          Save book
        </span>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
  categoryList: PropTypes.array.isRequired,
};

export default connect(null, { createBook })(BooksForm);
