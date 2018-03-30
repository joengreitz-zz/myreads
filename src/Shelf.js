import React, { Component } from 'react';
import MasterLibrary from './MasterLibrary'

class Shelf extends Component {
  /*TODO: Add propTypes to require string for title and array for books*/
  render () {
    const {title,books}=this.props

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <MasterLibrary books={books} />
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
