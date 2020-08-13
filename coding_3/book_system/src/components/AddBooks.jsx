import React from "react";
import './Home.css'
import { connect } from "react-redux";
import Category from "./Category";

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const { categoryData } = this.props;
    return (
      <>
        <form className="form">
            <div className="form-group col-md-4">
              <label for="book-name">Book Name</label>
              <input type="text" className="form-control" id="bookname" />
            </div>
            <div className="form-group col-md-4">
            <label for="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
            />
          </div>
            <div className="form-group col-md-4">
              <label for="price">Price</label>
              <input type="number" className="form-control" id="price" />
            </div>
          
          <div className="form-group col-md-4">
            <label for="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="Quantity"
            />
          </div>
         
         
            <div className="form-group col-md-4">
              <label for="inputState">Category</label>
              <select id="inputState" className="form-control">
                  {categoryData && categoryData.map(category=>(
                      <option value={category} key={category} selected>{category}</option>

                  ))}
              </select>
            </div>

          <div className="form-group col-md-4">
            <label for="author">Description</label>
            <input
              type="text"
              className="form-control"
              id="desc"
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapSatateToProps=(state)=>({
    categoryData: state.dataReducer.categoryData
})

export default connect(mapSatateToProps, null)(AddBooks);
