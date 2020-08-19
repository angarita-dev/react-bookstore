import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter(props) {
  const { categoryList } = props;
  console.log(categoryList);
  const filterCategories = ['All', ...categoryList];
  const filterOptions = filterCategories.map(category => (
    <option
      key={category}
    >
      {category}
    </option>
  ));

  return (
    <select
      id="category-filter"
    >
      {filterOptions}
    </select>
  );
}

CategoryFilter.propTypes = {
  categoryList: PropTypes.array.isRequired,
};
