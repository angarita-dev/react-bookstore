import React from 'react';

// Components
import BooksList from './BooksList';
import BooksForm from './BooksForm';

export default function App() {
  return (
    <div>
      <BooksForm />
      <BooksList />
    </div>
  );
}
