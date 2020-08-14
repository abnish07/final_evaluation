import React from "react";
import { connect } from "react-redux";
import AddBooks from './AddBooks';
import { v4 as uuidv4 } from 'uuid';
import { handleDelete } from '../redux/action';
import { Link, Redirect } from 'react-router-dom';
// import Filter from './Filter';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
      const { userBookData, handleDelete } = this.props
    return (
      <div>
          <AddBooks />
         
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">price</th>
              <th scope="col">Total Quantity</th>
              <th scope="col">Author</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <tr>
                {/* <Filter /> */}
              <th scope="col"></th></tr>
            </tr>
          </thead>

          <tbody>
              {userBookData && userBookData.map(book=>(
                <tr key={book.id}> 
              <th scope="row">{book.categoryName}</th>
              <td>{book.bookname}</td>
              <td>{book.price}</td>
              <td>{book.quantity}</td>
              <td>{book.author}</td>
              <td> <Link to={`/edit${book.id}`} ><button className="btn btn-success">Edit</button></Link></td>
              <td><button className="btn btn-danger" onClick={()=>handleDelete(book.id)} >Delete</button></td>
            </tr>
              ))}
            
          
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
    userBookData: state.dataReducer.userBookData
})
const mapDispatchToProps=(dispatch)=>({
    handleDelete: (id)=>dispatch(handleDelete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
