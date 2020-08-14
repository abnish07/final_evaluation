import React from "react";
import './Home.css'
import { connect } from "react-redux";
import Category from "./Category";
import { addUserBook, handleUpdate } from "../redux/action";
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";

class EditData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bookname: '',
        author: '',
        price: '',
        quantity:'',
        categoryName: 'Fiction',
        desc: '',
        id: '',
    };
  }

  componentDidMount(){
      let {id} = this.props.match.params
      let { userBookData } = this.props
      let item =  userBookData && userBookData.find(item=>item.id === id)
      this.setState({
        bookname: item && item.bookname,
        author: item && item.author,
        price: item && item.price,
        quantity: item && item.quantity,
        categoryName: item && item.categoryName,
        desc: item && item.desc,
        id: item && item.id,
      })

      console.log("item", this.props.userBookData)
  }

  handleChange=(e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleCancel=()=>{
     this.props.history.push('/')
  }

  render() {
      const { userBookData,categoryData,isUpdate, addUserBook, handleUpdate } = this.props;
      let {id} = this.props.match.params
      const { handleChange, handleCancel } = this
      const { bookname, author, price, categoryName, desc, quantity } = this.state;
    //   userBookData.find(item.id ===id)
      console.log("isupdate", isUpdate)
      if(isUpdate){
       return  <Redirect to="/" />
      }
    return (
      <>
        {/* <form className="form"> */}
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
          <div className="text-center mb-3">
           <button className="btn btn-success mr-3" onClick={()=> handleUpdate(this.state)} >Update data</button>
           
              <button className="btn btn-danger" onClick={handleCancel} >Cancel</button>
              </div>
        {/* </form> */}
      </>
    );
  }
}

const mapSatateToProps=(state)=>({
    categoryData: state.dataReducer.categoryData,
    userBookData: state.dataReducer.userBookData,
    isUpdate: state.dataReducer.isUpdate
})

const mapDispatchToProps=(dispatch)=>({
    handleUpdate: (query)=>dispatch(handleUpdate(query))
})

export default connect(mapSatateToProps, mapDispatchToProps)(EditData);
