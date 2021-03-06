import React from "react";
import './Home.css'
import { connect } from "react-redux";
import Category from "./Category";
import { addUserBook } from "../redux/action";
import { v4 as uuidv4 } from 'uuid';

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bookname: '',
        author: '',
        price: '',
        quantity:'',
        categoryName: 'Fiction',
        desc: '',
        // id: uuidv4()
    };
  }

  handleChange=(e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
      const { categoryData, addUserBook } = this.props;
      const { handleChange } = this
      const { bookname, author, price, categoryName, desc, quantity } = this.state;
    return (
      <>
        {/* <form className="form"> */}
        <div className="add-book">
        <div className="row px-5 pt-5">
            <div className="form-group col-md-4">
              <label htmlFor ="book-name">Book Name</label>
              <input type="text" className="form-control" name="bookname" value={bookname} onChange={handleChange}  />
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              name="author" value={author} onChange={handleChange}
            />
          </div>
            <div className="form-group col-md-4">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control" name="price" value={price} onChange={handleChange} />
            </div>
            </div>
            <div className="row px-5">
          <div className="form-group col-md-4">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
            name="quantity" value={quantity} onChange={handleChange}
            />
          </div>
         
         
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Category</label>
              <select id="inputState" className="form-control" onChange={handleChange} value={categoryName} name="categoryName" >
                  {categoryData && categoryData.map(category=>(
                      <option value={category} key={category} >{category}</option>

                  ))}
              </select>
            </div>

          <div className="form-group col-md-4">
            <label htmlFor="author" >Description</label>
            <input
              type="text"
              className="form-control"
              name="desc" value={desc} onChange={handleChange}
            />
          </div>
          </div>
          <div className="text-center mb-1">
          <button type="submit" onClick={()=>addUserBook({...this.state , id:uuidv4()})} className="btn btn-primary">
            Add Books
          </button></div>
          </div>
        {/* </form> */}
      </>
    );
  }
}

const mapSatateToProps=(state)=>({
    categoryData: state.dataReducer.categoryData,
})

const mapDispatchToProps=(dispatch)=>({
    addUserBook: (query)=>dispatch(addUserBook(query))
})

export default connect(mapSatateToProps, mapDispatchToProps)(AddBooks);
