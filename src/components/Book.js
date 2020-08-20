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
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <span
          onClick={handleBookRemove}
          onKeyPress={handleBookRemove}
          role="button"
          tabIndex="0"
        >
          X
        </span>
      </td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
