// Action types
export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// Actions
export const createBook = bookData => {
  const { title, category } = bookData;

  return { type: CREATE_BOOK, title, category };
};

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});
