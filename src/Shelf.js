import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MasterLibrary from './MasterLibrary'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => ({
        books:books.filter(b =>
          b.id === book.id ? b.shelf = shelf : b
        )}))
    })}

  render () {
    const {title, books, onShelfChange}=this.props

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <MasterLibrary
              onShelfChange={onShelfChange}
              books={books}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
