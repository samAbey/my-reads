import React, { Component } from 'react';
import Book from './book';


class SearchPage extends Component {

  state = {
    query: ''
  }

  handleQueryUpdate = (event) => {
    this.setState ({
      query: event.target.value
    });
    this.props.searchBooks(this.state.query, 10);
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
          <ol className="books-grid">
            {
              this.props.searchResults.map((book, index) => <li key={book.id}>
                <Book book={book}/>
              </li>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
