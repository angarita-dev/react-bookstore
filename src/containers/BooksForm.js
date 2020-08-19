import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  static getBookCategories() {
    return [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
  }

  constructor(props) {
    super(props);

    const defaultBookTitle = 'Book title';
    const defaultBookCategory = BooksForm.getBookCategories()[0];

    this.state = {
      title: defaultBookTitle,
      category: defaultBookCategory,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { createBook } = this.props;
    createBook(this.state);
  }

  handleTitleChange(e) {
    const { value } = e.target;
    const newState = { title: value };

    this.setState(newState);
  }

  handleCategoryChange(e) {
    const { value } = e.target;
    const newState = { category: value };

    this.setState(newState);
  }

  render() {
    const { title, category } = this.state;

    const bookCategories = BooksForm.getBookCategories();

    const bookOptions = bookCategories.map(category => (
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
          value={title}
          onChange={this.handleTitleChange}
        />
        <select
          name="categories"
          id="book-category-input"
          value={category}
          onChange={this.handleCategoryChange}
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
};

export default connect(null, { createBook })(BooksForm);
