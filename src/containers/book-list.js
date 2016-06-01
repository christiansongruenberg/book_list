/**
 * Created by Christianson on 5/30/2016.
 */
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
           return (
              <li
                  key={book.title}
                  onClick={()=> this.props.selectBook(book)}
                  className="list-group-item">
                  {book.title}
              </li>
           ) ;
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside BookList

    return {
        books: state.books
    };
}

//anything returned from this function will end up
// as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed
    //to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a componentet to a contianer - it needs to know
// about this new dispatchmethod, selectBook. Make it available
//as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList);