import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchQuery } from '../actions/searchActions';
import SearchResults from '../components/SearchResults';
import SearchNews from '../components/SearchNews';
import { store } from '../index';

class Search extends Component {
  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  retrieveInput = (input) => {
    debugger
    // console.log('new york');
    searchQuery(input).then(res => {
      store.dispatch({
        type: 'FETCH_ARTICLES_FULFILLED',
        payload: res
      })
    })
  }

  render(){
    return(
      <div>
        <SearchNews color={this.retrieveInput}/>
        <SearchResults articles={store.getState().searchReducer.articles} />
      </div>
    )
  }

}

export default Search

// function retrieveInput(input){
//   return (dispatch) => {
//     // debugger
//     // console.log(input)
//     searchQuery(input).then(res => {
//       console.log(res)
//       dispatch({
//         type: 'FETCH_ARTICLES_FULFILLED',
//         payload: res
//       })
//     })
//   }
// }


// const mapStateToProps = (state) => {
//
//   return {
//     // retrieveInput: retrieveInput,
//     retrievedArticle: state.searchReducer.articles
//   }
// }
//
//  const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators({
//      retrieveInput
//    }, dispatch)
//  }
//
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search)
