import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MasterLibrary from './MasterLibrary'


class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

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
