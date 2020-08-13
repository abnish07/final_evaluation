import React from 'react'
import './Home.css';
import { connect } from 'react-redux';
import { addCategory } from '../redux/action';

class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            categoryName:''
         }
    }
    onChange=(e)=>{
        this.setState({
            categoryName: e.target.value
        })
    }

    render() {
        const { addCategory } = this.props
        // console.log("cat", this.state.categoryName) 
        return ( 
            <>
                <div className="form-group col-md-4 form">
              <label for="category">Category Name</label>
              <input type="text" className="form-control mb-4" id="category" onChange={this.onChange} />
            <button className="btn btn-primary" onClick={ ()=>addCategory(this.state.categoryName)}>Add Category</button>
            </div>
            </>
         );
    }
}

const mapDispatchToProps=(dispatch)=>({
    addCategory:(catData)=>dispatch(addCategory(catData))
})

export default connect(null, mapDispatchToProps)(AddCategory);