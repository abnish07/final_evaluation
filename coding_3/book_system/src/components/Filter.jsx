import React from 'react'

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                 <select className="custom-select"> 
              <option value="all">All</option>
              <option value="price">Price</option>
              <option value="quantity">Total Quantity</option>
              <option value="author">Author</option>
            
            </select>
         );
    }
}
 
export default Filter;