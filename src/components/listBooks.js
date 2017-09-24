import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// React Router
import { Link } from 'react-router-dom';

// Custom Components
import BookShelf from './bookShelf';

class ListBooks extends Component {

  static proptypes = {
    myBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render () {
    console.log (this.props.myBooks)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf updateShelf={this.props.updateShelf} shelf="currentlyReading" title="Currently Reading" books={this.props.myBooks}/>
            <BookShelf updateShelf={this.props.updateShelf} shelf="wantToRead" title="Want To Read" books={this.props.myBooks}/>
            <BookShelf updateShelf={this.props.updateShelf} shelf="read" title="Read" books={this.props.myBooks}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
