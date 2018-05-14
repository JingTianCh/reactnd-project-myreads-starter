import React, {Component} from 'react'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component{
    static propTypes = {
        allBooks : PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired
    
    }
    render(){
    const shelfType=["currentlyReading", "wantToRead", "read"];
    const shelfName=["Currently Reading", "Want To Read", "Read"];
    
    return(
        <div>
        {
            shelfType.map((shelf,index) => {
                return(
            <div key={index} className="bookshelf">
            <h2 className="bookshelf-title">{shelfName[index]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {                        this.props.allBooks.sort(sortBy('title'))
                            .filter((book) => (book.shelf === shelf))
                            .map((book) => (
                            <Book
                            onChangeShelf={this.props.onMove}
                            key={book.id}
                            book={book}
                            />
                        
                        ))

                        
                        }
                    </ol>
                  </div>
            
            
            </div>
            )
            })
        
        }
        </div>
        
    )
    }




}
export default BookShelf