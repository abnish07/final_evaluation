import React from 'react'
import Dashboard from './Dashboard';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterOption: 'all',
            totalBookData: []
         }
    }
    onChange=(e)=>{

        this.setState({
            filterOption: e.target.value
        })
        
    }

    componentWillReceiveProps(nextProps, nextState){
        this.setState({
            totalBookData: nextProps
        })
        // console.log("nextprops", nextProps, "next state", nextState)
    }

    render() { 
        // console.log("total Book Data", this.state.totalBookData)
        return ( 
            <>
                 <select className="form-control ml-5 mt-1" onChange={this.onChange}> 
              <option value="all">All</option>
              <option value="price">Price</option>
              <option value="quantity">Total Quantity</option>
              <option value="author">Author</option>           
            </select>
            </>
         );
    }
}
 
// export default  Filter;