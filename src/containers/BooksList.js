import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  const booksList = books.map(book => {
    const { id, title, category } = book;
    return (
      <Book
        key={id}
        id={id}
        title={title}
        category={category}
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
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
