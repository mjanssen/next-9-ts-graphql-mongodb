// import { createStore, applyMiddleware } from 'redux';
// import dlv from 'dlv';
// import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  searchQuery: '',
};

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const actionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    default:
      return state;
  }
};

export function initializeStore(state = initialState, currentUrl) {
  if (initialState.searchQuery === '') {
    const queryRegexp = new RegExp('git/search/(.*)/?|git/repositories/(.*)/?');
    const isRepository = currentUrl.indexOf('repositories') > -1;
    // const query = dlv(currentUrl.match(queryRegexp), isRepository ? '2' : '1', false);

    // if (query) initialState.searchQuery = query;
  }

  // return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
}
