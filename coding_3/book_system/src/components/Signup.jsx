import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userRegistration } from '../redux/auth/action';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            name: '',
            email: '',
            password: '',
            mobile: '',
            desc: ''
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        const { handleChange } = this
        const  { username, name, email, password, mobile, desc } = this.state;
        const { userRegistration } = this.props
        return ( 
            <div>
                  <div class="form-row form">
                    <div class="form-group col-md-4">
                     <label for="name">Name</label>
                        <input type="text" class="form-control"  onChange={handleChange} value={name} name="name"/>
                    </div>
                    <div class="form-group col-md-4">
                     <label for="username">User Name</label>
                        <input type="text" class="form-control"  onChange={handleChange} value={username} name="username"/>
                    </div>
                    <div class="form-group col-md-4">
                     <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" onChange={handleChange} value={email} name="email"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" onChange={handleChange} value={password} name="password"/>
                </div>
                    <div class="form-group col-md-4">
                        <label for="mobile">Mobile</label>
                    <input type="text" class="form-control" onChange={handleChange} value={mobile} name="mobile"/>
                </div>
                    <div class="form-group col-md-4">
                        <label for="desc">Description</label>
                    <input type="text" class="form-control" onChange={handleChange} value={desc} name="desc"/>
                </div>
                 </div>
                 <div className="text-center">
                 <Link to="/login"><button className="btn btn-primary ml-3" >Login</button></Link>
                 <Link to="/signup"><button className="btn btn-primary ml-3" onClick={()=>userRegistration(this.state)} >Signup</button></Link></div>
                </div>
         );
    }
}
 

const mapDispatchToProps=(dispatch)=>({
    userRegistration: (query)=>dispatch(userRegistration(query))
})

export default connect( null, mapDispatchToProps)(Signup);