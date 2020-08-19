import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { removeBook } from '../actions/index';

// Components
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  const { removeBook } = props;

  const booksList = books.map(book => {
    const { id, title, category } = book;
    return (
      <Book
        key={id}
        id={id}
        title={title}
        category={category}
        removeBook={removeBook}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {booksList}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, { removeBook })(BooksList);
