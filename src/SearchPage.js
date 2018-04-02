import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

  state = {
    query: '',
    books_library: []
  }

  displaySearch = () => {
    const {query , books_library} = this.state
    const {shelfChange} = this.props
    if (query === '') {
      console.log('query is empty')
    }
    else  {
      return (
        books_library.map((book, i) => (
          <li key={i}>
            <Book
              book={book}
              shelfChange={shelfChange}
            />
          </li>
        ))
      )
    }
  }

  getBooks = (query) => {
    if(query) {
    BooksAPI.search(query,20).then(books => {
      if (!books || books.hasOwnProperty('error')) {
        this.setState({books_library: []})
      }
      else {
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
      }).catch(err => console.log(err, 'error occured'))
  }}

    updateQuery = (query) => {
      this.setState({query: query})
      this.getBooks(query)
    }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              placeholder="Search by title or author"
              type="text"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {
                this.displaySearch()
              }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
