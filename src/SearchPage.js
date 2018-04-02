import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MasterLibrary from './MasterLibrary'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  
  state = {
    query: '',
    results: [],
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if (query.trim().length > 0) {
      BooksAPI.search(query).then(books => {
        this.setState({results: books})
      })
    }
  }

  render() {
    const {books, onShelfChange} = this.props
    const {query, results} = this.state

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
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              <MasterLibrary
                onShelfChange={onShelfChange}
                books={results}
              />
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
