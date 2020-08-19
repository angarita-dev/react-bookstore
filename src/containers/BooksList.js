import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { removeBook, changeFilter } from '../actions/index';

// Components
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  const { removeBook } = props;
  const { changeFilter } = props;
  const { categoryList } = props;
  const { currentFilter } = props;

  const filteredBooks = currentFilter === 'All'
    ? books
    : books.filter(book => currentFilter === book.category);

  const booksList = filteredBooks.map(book => {
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
    <div>
      <span>
        Filter by category:
        <CategoryFilter
          categoryList={categoryList}
          changeFilter={changeFilter}
        />
      </span>
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
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  categoryList: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  currentFilter: state.filter,
});

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
