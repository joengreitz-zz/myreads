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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks />
        )}/>
        <Route path='/search' render={(/**TODO: add history tracking*/) => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
