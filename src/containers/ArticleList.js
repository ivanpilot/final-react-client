import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleCard from '../components/ArticleCard';
import { fetchedArticles } from '../actions/articleActions';

const API_KEY = process.env.REACT_APP_API_KEY

const URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?'
            + `api-key=${API_KEY}`;


class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    console.log(URL)
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ articles: response }));
  }

  render() {
    return (
      <div className="latest-news">
        <h2>The Latest News:</h2>
        {this.props.articles ?
          <ArticleCard /> : null }
      </div>
    );
  }
}


export default ArticleList;

// class ArticleList extends Component {
//
//   componentDidMount() {
//     console.log("component did mount")
//     this.props.fetchedArticles()
//   }
//
//   render() {
//     return (
//       <div className="ArticlesContainer">
//        <h1>Latest News</h1>
//        {this.props.articles.map(article => <ArticleCard key={article.id} article={article} />)}
//      </div>
//     );
//   }
// }
//
//
// const mapStateToProps = (state) => {
//   return ({
//     articles: state.articles
//   })
// }
//
// export default connect(mapStateToProps, { fetchedArticles })(ArticleList);