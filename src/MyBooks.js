import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MyBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  }

  render() {
    const {books, onShelfChange}=this.props
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                title='Currently Reading'
                onShelfChange={onShelfChange}
                books={books.filter(b => b.shelf === 'currentlyReading')}
              />
              <Shelf
                title='Want To Read'
                onShelfChange={onShelfChange}
                books={books.filter(b => b.shelf === 'wantToRead')}
              />
              <Shelf
                title='Read'
                onShelfChange={onShelfChange}
                books={books.filter(b => b.shelf === 'read')}
              />
            </div>
          </div>
          <div className="open-search">
            <Link className="open-search" to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }

}

export default MyBooks
