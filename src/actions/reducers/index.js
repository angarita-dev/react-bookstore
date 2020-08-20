import { combineReducers } from 'redux';
import { generateId, books } from './book';

export const DEFAULT_STATE = {
  books: [
    {
      id: generateId(),
      title: 'The rise and fall of Rome',
      category: 'History',
    },
    {
      id: generateId(),
      title: 'Space adventures',
      category: 'Sci-Fi',
    },
    {
      id: generateId(),
      title: 'Ghost in the kitchen',
      category: 'Horror',
    },
  ],
};

export default combineReducers({ books });
