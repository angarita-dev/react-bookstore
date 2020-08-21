import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter(props) {
  const { categoryList } = props;
  const { changeFilter } = props;

  const filterCategories = ['All', ...categoryList];
  const filterOptions = filterCategories.map(category => (
    <option
      key={category}
    >
      {category}
    </option>
  ));

  const handleFilterChange = event => {
    const { name, value } = event.target;
    const newState = {};

    newState[name] = value;
    changeFilter(newState);
  };

  return (
    <select
      name="filter"
      className="category-filter-select"
      onChange={handleFilterChange}
    >
      {filterOptions}
    </select>
  );
}

CategoryFilter.propTypes = {
  categoryList: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
