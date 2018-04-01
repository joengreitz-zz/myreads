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

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })}

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => ({
        books:books.filter(b =>
          b.id === book.id ? b.shelf = shelf : b
        )}))
    })}

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
            books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
