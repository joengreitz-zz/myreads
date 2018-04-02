import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import MyBooks from './MyBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books_library: []
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })}

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => {
        const bookShelved = books.find(b => (b.id === book.id))

        /*If book previously assigned to a shelf find book in MasterLibrary and change shelf*/
        if (bookShelved) {
          return {
            books: books.filter(b => b.id === book.id? b.shelf = shelf : b)
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks
            books={this.state.books}
            onShelfChange={this.shelfChange}
          />
        )}/>
        <Route path='/search' render={(/*TODO: add history tracking*/) => (
          <SearchPage
            books={this.state.books}
            onShelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
