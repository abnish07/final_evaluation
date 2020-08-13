import React from "react";
import './Home.css'
import { connect } from "react-redux";
import Category from "./Category";
import { addUserBook, handleUpdate } from "../redux/action";
import { v4 as uuidv4 } from 'uuid';

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
    };
  }

//   componentDidMount(){
//     //   let {id} = this.props.match.params
//     //   let item = this.props.userBookData.find(item=>item.id === id)
//       console.log("item", this.props.userBookData)
//   }

  handleChange=(e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleCancel=()=>{
     this.props.history.push('/dashboard/add-books')
  }

  render() {
      const { userBookData, addUserBook, handleUpdate } = this.props;
      let {id} = this.props.match.params
      const { handleChange, handleCancel } = this
      const { bookname, author, price, categoryName, desc, quantity } = this.state;
    //   userBookData.find(item.id ===id)
      console.log("props edit page", userBookData)
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
                  {userBookData && userBookData.map(category=>(
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
    userBookData: state.dataReducer.userBookData,
})

const mapDispatchToProps=(dispatch)=>({
    handleUpdate: (query)=>dispatch(handleUpdate(query))
})

export default connect(mapSatateToProps, mapDispatchToProps)(EditData);
