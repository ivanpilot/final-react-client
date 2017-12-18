const NYT_API_KEY = process.env.REACT_APP_API_KEY

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
                 + `api-key=${NYT_API_KEY}&q=`;


  export function searchQuery(query) {
    return fetch(BASE_URL.concat(query))
      // .then(resp => {debugger})
    .then(res => res.json())
  }


  // export function searchQuery(query) {
  //   // debugger;
  //   return (dispatch) => {
  //
  //   return fetch(BASE_URL.concat(query))
  //     // .then(resp => {debugger})
  //     .then(res => res.json())
  //     .then(jsonObject => {
  //       debugger;
  //       dispatch({
  //         type: 'FETCH_ARTICLES_FULFILLED',
  //         payload: jsonObject
  //       })
  //     })
  //   }
  // }
