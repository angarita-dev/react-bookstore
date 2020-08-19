import React from 'react';

// Components
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div>
      <BooksForm />
      <BooksList />
    </div>
  );
}
