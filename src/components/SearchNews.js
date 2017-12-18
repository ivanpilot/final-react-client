import React, { Component } from 'react';
import { searchQuery } from '../actions/searchActions';
// import SearchResults from '../components/SearchResults';

class SearchNews extends Component {
    state = {
      input: ''
    }

    handleSubmit = event => {
      //debugger
      event.preventDefault();
      this.props.color(this.state.input)
      // this.props.searchQuery(this.state.input)
      this.setState({
        input: ''
      })
    }

    handleSearchInputChange = event => {

      this.setState({
        input: event.target.value
      });
    }

  render() {
    //debugger;
    return (
      <div className="searchable-articles">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search News</label>
          <input
            id='search-input'
            type="text"
            style={{width: 250}}
            value={this.state.input}
            onChange={this.handleSearchInputChange}
            />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}



export default SearchNews;
