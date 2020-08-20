import { CREATE_BOOK, REMOVE_BOOK } from '../index';

export const generateId = () => Math.floor(Math.random() * (99999 - 10000) + 10000);

export const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: generateId(),
          title: action.title,
          category: action.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
