import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'

class BooksApp extends Component {
  state = {
    books_library: []
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books_library: books})
    })}

  shelfChange = (newBook, newShelf) => {
    if (this.state.books_library.includes(newBook)){
      let temp_list = this.state.books_library
      temp_list[temp_list.indexOf(newBook)].shelf = newShelf
      BooksAPI.update(newBook, newShelf).then(response => {
        console.log(response)
      })
      this.setState({books_library:temp_list})
    } else {
      BooksAPI.update(newBook, newShelf).then(response => {
        console.log(newBook)
          BooksAPI.getAll().then((books) => {
            this.setState({books_library: books})
          })
        })
      }
    }

  render() {

  let wantToRead = []
  let read = []
  let currentlyReading = []
  this.state.books_library.map((book) => {
    if(book.shelf === 'wantToRead') {
      wantToRead.push(book)
    } else if (book.shelf === 'read') {
      read.push(book)
    } else if (book.shelf === 'currentlyReading'){
      currentlyReading.push(book)
    }
    return true
  })

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  title='Currently Reading'
                  shelfChange={this.shelfChange}
                  books_library={currentlyReading}
                />
                <Shelf
                  title='Want To Read'
                  shelfChange={this.shelfChange}
                  books_library={wantToRead}
                />
                <Shelf
                  title='Read'
                  shelfChange={this.shelfChange}
                  books_library={read}
                />
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search" to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path='/search' render={(/*TODO: add history tracking*/) => (
          <SearchPage
            temp_list={this.state.books_library}
            onShelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
