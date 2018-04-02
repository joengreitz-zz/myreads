import React from 'react';
import PropTypes from 'prop-types';

class Book extends Component {


const Book = ({ book, onShelfChange, onBookClick }) => {
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  }

/*TODO: Handle books with no author*/


/*TODO: Fix error when no image thumbnail*/

  render () {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={this.props.book.shelf} onChange={(event) => this.props.shelfChange(this.props.book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
  )
  }


  }
}

export default Book;
