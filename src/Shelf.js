import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class Shelf extends Component {
  static propTypes = {
    shelfChange: PropTypes.func.isRequired,
  }

  render () {
    const {title, shelfChange, books_library}=this.props

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books_library.map((book, i) => (
                <li key={i}>
                  <Book
                    book={book}
                    shelfChange={shelfChange}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf
