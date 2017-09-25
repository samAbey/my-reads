import React from 'react';
import { PropTypes } from 'prop-types'

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${props.book.imageLinks?props.book.imageLinks.smallThumbnail:null}')` }}></div>
        <div className="book-shelf-changer">
          <select value={props.book.shelf?props.book.shelf:props.shelf} onChange={(event) => {props.updateShelf (props.book, event.target.value)}}>
            <option value="moveto" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.author}</div>
    </div>
  )
}

Book.propTypes = {
   book: PropTypes.object.isRequired,
   updateShelf: PropTypes.func.isRequired,
   shelf: PropTypes.string
}

export default Book;
