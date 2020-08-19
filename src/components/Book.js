import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { id } = props;
  const { title } = props;
  const { category } = props;
  const { removeBook } = props;

  const handleBookRemove = () => {
    removeBook(id);
  };

  return (
    <div className="book-container">
      <div className="book-left-container">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">Unknown author</h3>
        <ul className="book-actions">
          <li>
            <span>Comments</span>
          </li>
          <li>
            <span
              onClick={handleBookRemove}
              onKeyPress={handleBookRemove}
              role="button"
              tabIndex="0"
            >
            Remove 
            </span>
          </li>
          <li>
            <span>Edit</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
