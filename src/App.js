import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

// Components
import ListBooks from './components/listBooks';
import SearchPage from './components/searchPage';
import Preloader from './components/preloader';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Books api
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    searchResults: [],
    myBooks: [],
    isfetching: true
  }

  componentDidMount () {
    this.getAll ();
  }

  searchBooks = (query, maxResults) => {

    this.setState({
      isfetching: true
    });

    BooksAPI.search (query, maxResults).then (results => {
      if (Array.isArray(results) && results.length !== 0) {

        this.setState({
          searchResults: results,
        });

      }  else {

        this.setState({
          searchResults: [],
        });

      }

      this.setState({
        isfetching: false
      });

    });
  }

  getAll = () => {

    this.setState ({
      isfetching: true
    });

    BooksAPI.getAll ().then (results => {
      this.setState ({
        myBooks: results,
        isfetching: false
      });
    });
  }

  updateShelf = (book, shelf) => {

    this.setState({
      isfetching: true
    });

    BooksAPI.update (book, shelf).then (() => {
      this.getAll ();

      this.setState({
        isfetching: false
      });
    });

  }

  render() {
    return (
      <Router>
        <div className="app">
          {this.state.isfetching?<Preloader />:null}
          <Route exact path="/" render={() => <ListBooks updateShelf={this.updateShelf} myBooks={this.state.myBooks} /> } />
          <Route path="/search" render={() => <SearchPage updateShelf={this.updateShelf} myBooks={this.state.myBooks} searchBooks={this.searchBooks} searchResults={this.state.searchResults}/> } />
        </div>
      </Router>
    )
  }
}

export default BooksApp
