import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { bookData } = this.props
        console.log("bookdata", bookData)
        return ( 
            <div>
                This is home page
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    bookData: state.dataReducer.bookData
})

export default connect (mapStateToProps, null)(Home);