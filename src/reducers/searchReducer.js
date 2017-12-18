const initialState = {
  fetching: false,
  fetched: false,
  articles: [],
  error: null
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_PENDING':
      return {
        ...state,
        fetching: true
      }
    case 'FETCH_ARTICLES_FULFILLED':
    // debugger; 
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.payload.response.docs

      }
    case 'FETCH_ARTICLES_REJECTED':
      return {...state, fetching: false, error: action.payload}
    default:
      return state
  }
}

// export function allArticles(state) {
//   return state.articles;
// }
