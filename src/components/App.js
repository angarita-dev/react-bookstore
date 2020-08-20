import React from 'react';

// Components
import NavBar from '../components/NavBar';
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
    <div className="app-container">
      <NavBar />
      <div className="body-container">
        <BooksList categoryList={categoryList} />
        <div className="book-form-container">
          <h2 className="book-form-label">ADD NEW BOOK</h2>
          <BooksForm categoryList={categoryList} />
        </div>
      </div>
    </div>
  );
}
