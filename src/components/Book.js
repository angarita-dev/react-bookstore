import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const {
    id, title, category, removeBook,
  } = props;

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
      <div className="book-right-container">
        <div className="percentage-container">
          <div className="percentage-circle-container">
            <svg className="progress-ring">
              <circle
                className="ring-circle"
                strokeWidth="5"
                fill="transparent"
                r="24"
                cx="34"
                cy="34"
              />

              <circle
                className="progress-ring-circle"
                strokeWidth="5"
                fill="transparent"
                stroke="#307bbe"
                r="24"
                cx="34"
                cy="34"
              />
            </svg>
          </div>
          <div className="percentage-info-container">
            <h1 className="percentage">70%</h1>
            <h2 className="percentage-label">Completed</h2>
          </div>
        </div>
        <span className="divider" />
        <div className="info-container">
          <h3 className="chapter-label">CURRENT CHAPTER</h3>
          <h2 className="chapter">Chapter 1: &quot;Introduction&quot;</h2>
          <div className="update-progress-button">
            UPDATE PROGRESS
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
