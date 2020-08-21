import { v4 as uuidv4 } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../index';

export const generateId = () => uuidv4();

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
