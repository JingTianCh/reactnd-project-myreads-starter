import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBook extends React.Component{
    state={
        query:'',
        findBooks:[]
    }
    static propTypes = {
        allBooks : PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired
    
    }

    getQuery=(query)=>{
        if(!query){
            this.setState({
                query:'',
                findBooks:[]
            });
        }
        else{
           this.setState({query:query.trim()});
            BooksAPI.search(query).then((books) =>{
                if(books.erro){
                    books=[]
                }
                else{
                books.map((book) => (
                this.props.allBooks.filter((b) => b.id===book.id).map((b) => book.shelf=b.shelf)
                ));
                
                }
                this.setState({findBooks:books});
            })
            
        }
    
    
    }
    
    render(){
        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event)=> this.getQuery(event.target.value)}/>
                
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.findBooks.sort(sortBy('title'))
                 .map((b) => (
                  <Book 
                    onChangeShelf={this.props.onMove}
                    key={b.id}
                    book={b}
                  /> 
                  ))              
                  }
            
            </ol>
            </div>
          </div>
        
        
        )
    
    }


}
export default SearchBook