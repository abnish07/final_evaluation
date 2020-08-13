import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Signup from './Signup';
import  { userLogin } from '../redux/auth/action';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }
    }

    handleChange=(e)=>{
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    render() { 
        const { handleChange } = this;
        const { email, password } = this.state;
        const { userLogin, isLogin } = this.props;
        console.log( "isLogin", isLogin)
        if(isLogin){
            return <Redirect to="/dashboard" />
        }
        return ( 
            <div>
                  <div class="form-row form">
                    <div class="form-group col-md-4">
                     <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" onChange={handleChange} name="email" value={email} />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" onChange={handleChange}  name="password" value={password} />
                </div>
                 </div>
                 <div className="text-center">
                 <button className="btn btn-primary"  onClick={()=>userLogin(this.state)} >Login</button>
                 <Link to="/signup"><button className="btn btn-primary ml-3" >Signup</button></Link></div>
                </div>
         );
    }
}

const mapStateToProps=(state)=>({
    isLogin: state.authReducer.isLogin
})

const mapDispatchToProps=(dispatch)=>({
    userLogin:(query)=>dispatch(userLogin(query))
})

export default connect( mapStateToProps, mapDispatchToProps)(Login);