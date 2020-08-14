import React from "react";
import { connect } from "react-redux";
import AddBooks from './AddBooks';
import { v4 as uuidv4 } from 'uuid';
import { handleDelete } from '../redux/action';
import { Link, Redirect } from 'react-router-dom';
// import Filter from './Filter';
import EditData from './EditData';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOption: 'all',
      isEdit: false
    };
  }

  onChange=(e)=>{
    this.setState({
        filterOption: e.target.value
    })
    
}

  // handleEdit=()=>{
  //   this.setState({
  //     isEdit: !this.state.isEdit
  //   })
  // }

  render() {
      const { userBookData, handleDelete, isUpdate, selectFilterValue } = this.props
      const { filterOption } = this.state
      console.log("is Update", isUpdate)
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
                <select className="form-control ml-5 mt-1" onChange={this.onChange}> 
              <option value="all">All</option>
              <option value="price_low_to_high">Price(Low to High)</option>
              <option value="price_high_to_low">Price(High to Low)</option>
              <option value="quantity">Total Quantity</option>
              <option value="author">Author</option>           
            </select>
              <th scope="col"></th></tr>
            </tr>
          </thead>

          <tbody>

              {

                userBookData && userBookData
                .sort((a,b)=>{
                  if(filterOption === "price_low_to_high"){
                    return a.price - b.price                   
                  }
                  else if(filterOption === "price_high_to_low"){
                    return b.price - a.price
                  }
                })
                .sort((a,b)=>{
                  if(filterOption === "quantity"){
                    return a.quantity - b.quantity
                  }
                }).map(book=>(
                  <tr key={book.id}>
                    <th scope="row">{book.categoryName}</th>
                    <td>{book.bookname}</td>
                    <td>{book.price}</td>
                    <td>{book.quantity}</td>
                    <td>{book.author}</td>
                    <td> <Link to={`/edit${book.id}`} ><button className="btn btn-success">Edit</button>
                    </Link></td>
                    <td><button className="btn btn-danger" onClick={()=>handleDelete(book.id)} >Delete</button>
                    </td>
                  </tr>
                ))              
                }
             
              
            
          
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
    userBookData: state.dataReducer.userBookData,
    isUpdate: state.dataReducer.isUpdate
})
const mapDispatchToProps=(dispatch)=>({
    handleDelete: (id)=>dispatch(handleDelete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
