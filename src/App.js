import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import MyBooks from './MyBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  changeShelf= (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => ({
        books:books.filter(b =>
          b.id === book.id ? b.shelf = shelf : b
        )
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks
            books={this.state.books}
            onchangeShelf={this.changeShelf}
          />
        )}/>
        <Route path='/search' render={(/*TODO: add history tracking*/) => (
          <SearchPage books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
