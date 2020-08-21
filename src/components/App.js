import React from 'react';

// Components
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  const categoryList = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <BooksForm categoryList={categoryList} />
      <BooksList categoryList={categoryList} />
    </div>
  );
}
