import React from 'react';
import { PropTypes } from 'prop-types';

import Book from './book';

class BookShelf extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.filter((book) => book.shelf === this.props.shelf).map ((book, index) => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                    />
                  </li>
                )
              })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;