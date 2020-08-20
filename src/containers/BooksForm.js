import React from 'react';

export default function BooksForm() {
  const bookCategories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

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
      <input type="text" id="book-title-input" placeholder="Title" />
      <select name="categories" id="book-category-input" defaultValue={bookCategories[0]}>
        {bookOptions}
      </select>
    </div>
  );
}
