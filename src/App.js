import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

// Components
import ListBooks from './components/listBooks';
import SearchPage from './components/searchPage';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Books api
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    searchResults: []
  }

  searchBooks = (query, maxResults) => {
    BooksAPI.search (query, maxResults).then (results => {
      this.setState({
        searchResults: results
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={ListBooks} />
          <Route path="/search" render={() => <SearchPage searchBooks={this.searchBooks}/> } />
        </div>
      </Router>
    )
  }
}

export default BooksApp
