import { CHANGE_FILTER } from '../index';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category.filter;
    default:
      return state;
  }
};

export default filter;
