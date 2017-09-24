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
    searchResults: [],
    myBooks: []
  }

  componentDidMount () {
    this.getAll ();
  }

  searchBooks = (query, maxResults) => {
    BooksAPI.search (query, maxResults).then (results => {
      if (Array.isArray(results)) {
        this.setState({
          searchResults: results
        });
      }
    });
  }

  getAll = () => {
    BooksAPI.getAll ().then (results => {
      this.setState ({
        myBooks: results
      });
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update (book, shelf).then (() => {
      this.getAll ();
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => <ListBooks updateShelf={this.updateShelf} myBooks={this.state.myBooks} /> } />
          <Route path="/search" render={() => <SearchPage updateShelf={this.updateShelf} searchBooks={this.searchBooks} searchResults={this.state.searchResults}/> } />
        </div>
      </Router>
    )
  }
}

export default BooksApp
