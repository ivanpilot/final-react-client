import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchQuery } from '../actions/searchActions';
import SearchResults from '../components/SearchResults';
import SearchNews from '../components/SearchNews';


class Search extends Component {

  // retrieveInput = (input) => {
  //   // console.log('new york');
  //   searchQuery(input)
  // }

  render(){
    return(
      <div>
        <SearchNews color={this.props.retrieveInput}/>
        <SearchResults articles={this.props.retrievedArticle} />
      </div>
    )
  }

}

function retrieveInput(input){
  return (dispatch) => {
    // debugger
    // console.log(input)
    searchQuery(input).then(res => {
      console.log(res)
      dispatch({
        type: 'FETCH_ARTICLES_FULFILLED',
        payload: res
      })
    })
  }
}



const mapStateToProps = (state) => {

  return {
    // retrieveInput: retrieveInput,
    retrievedArticle: state.searchReducer.articles
  }
}

 const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     retrieveInput
   }, dispatch)
 }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
