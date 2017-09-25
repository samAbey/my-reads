import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// Custom components
import Book from './book';

// 3rd
import { Debounce } from 'react-throttle';
import { Link } from 'react-router-dom';

class SearchPage extends Component {

  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired
  }


  handleQueryUpdate = (event) => {

    if (event.target.value) {
      this.props.searchBooks(event.target.value, 10);
    }

  }

  findShelf = obj => {

    for (let i = 0; i < this.props.myBooks.length; i++) {
        if (this.props.myBooks[i].id === obj.id) {
            return this.props.myBooks[i].shelf;
        }
    }

    return 'none';

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
            <Debounce time="500" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleQueryUpdate}
              />
            </Debounce>

          </div>
        </div>
        <div className="search-books-results">
          {this.props.searchResults.length===0?<div><p>There are no books to show. Please try the search bar..</p></div>:null}
          <ol className="books-grid">
            {
              this.props.searchResults.map((book, index) => <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} shelf={this.findShelf(book)}/>
              </li>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
