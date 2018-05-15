import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component{

static propTypes={
    onChangeShelf:PropTypes.func.isRequired,
    book:PropTypes.object.isRequired

}
changeShelf(newShelf){
    this.props.onChangeShelf(this.props.book,newShelf)
    
}
    
render(){
 const {book}=this.props;
return(
<li>
   <div className="book">
    <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}></div>
     <div className="book-shelf-changer">
     <select value={book.shelf} onChange={(e) => this.changeShelf(e.target.value)}>
      <option value="" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
       <option value="read">Read</option>
      <option value="none">None</option>
      </select>
      </div>
       </div>
       {book.title && (<div className="book-title">{book.title}</div>)}
       {Array.isArray(book.authors) && 
       ( book.authors.map((a) =>
        (<div className="book-authors" key={a}>{a}</div>
       )      
       )
       )}
       
       </div>
        </li>    

)
}



}
export default Book