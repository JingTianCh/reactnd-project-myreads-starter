import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
      books:[]
  }
  onMoveBook=(book,newShelf) => {
      if(this.state.books){
          BooksAPI.update(book,newShelf)
          .then(()=>{
              BooksAPI.getAll().then(
              (books) =>{
                  this.setState({books:books})
              }
              )
          })
      }  
    }
  componentDidMount(){
      BooksAPI.getAll().then(
      (books) => {
      this.setState({books:books})    
      
      }
      )
    }
  render() {
    return (
      <div className="app">
       <Route exact path='/search' render={() =>(
                <SearchBook/>

                )}/>
        <Route exact path='/' render={()=>(
                <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
             <BookShelf allBooks={this.state.books} onMove={this.onMoveBook}/>
            </div>
            <Link 
            to='/search' className="open-search">
              Add a book
            </Link>
          </div>                
                )}/>
      </div>
    )
  }
}

export default BooksApp
