import React, { Component } from 'react';
import Book from './book';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


class SearchPage extends Component {

  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  handleQueryUpdate = (event) => {
    this.setState ({
      query: event.target.value
    });

    if (event.target.value.length >= 3) {
      this.props.searchBooks(this.state.query, 10);
    }

  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleQueryUpdate}
              value={this.state.query}
            />

          </div>
        </div>
        <div className="search-books-results">
          {this.props.searchResults.length===0?<div><p>There are no books to show. Please try the search bar..</p><p style={{fontStyle: 'italic'}}>Type atleast 3 letters minimum</p></div>:null}
          <ol className="books-grid">
            {
              this.props.searchResults.map((book, index) => <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf}/>
              </li>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
