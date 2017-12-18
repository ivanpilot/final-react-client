import React, {Component} from 'react';
// import SearchNews from '../containers/SearchNews';
// import { allArticles } from '../reducers/searchReducer';

class SearchResults extends Component {

  render() {
    // debugger
    var result = this.props.articles.map((article) => (
      <h3>{article.web_url}</h3>
    ))
debugger
    return (
      <div className='results-list'>
        {result}
      </div>
    );
  }
}


export default SearchResults;
