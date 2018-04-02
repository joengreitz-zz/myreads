import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

  state = {
    query: '',
    books_library: [],
  }

  displaySearch = () => {
    const {query, books_library} = this.state
    return (
      books_library.map((book, i) => (
        <li key={i}>
          <Book
            book={book}
            moveBook={this.props.moveBook}
          />
        </li>
      ))
    )
  }

  getBooks = (query) => {
    if(query) {
      BooksAPI.search(query,20).then(books => {
        let temp_books = books.map((book) => {
          book.shelf = "none"
          for(let i=0; i < this.props.temp_list.length; i++) {
            if(book.id === this.props.temp_list[i].id) {
              book.shelf = this.props.temp_list[i].shelf
              console.log(book.shelf)
              break;
            }
          }
          return book
          })
          console.log(temp_books)
          this.setState({books_list: temp_books})
          }
        )
    }
  }

    updateQuery = (query) => {
      this.setState({query: query})
      this.getBooks(query)
    }

  render() {
    const {book} = this.props
    console.log('render', this.state.query)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
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
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {this.displaySearch()}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
