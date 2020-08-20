import React from 'react';

export default function NavBar() {
  return(
    <div className="nav-bar">
      <div className="left-container">
        <h1 className="title">Bookstore CMS</h1>
        <h3 className="nav-link active">BOOKS</h3>
        <h3 className="nav-link">CATEGORIES</h3>
      </div>
    </div>
  );
}
