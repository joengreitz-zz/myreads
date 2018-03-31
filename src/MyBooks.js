import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MyBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const {books, onChangeShelf}=this.props
    /*TODO: Organize book by shelf*/
    /*TODO: Pass book as prop to correct Shelf*/
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
                onChangeShelf={onChangeShelf}
                books={books}
              />
              <Shelf
                title='Want To Read'
                onChangeShelf={onChangeShelf}
                books={books}
              />
              <Shelf
                title='Read'
                onShelfChange={onChangeShelf}
                books={books}
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
