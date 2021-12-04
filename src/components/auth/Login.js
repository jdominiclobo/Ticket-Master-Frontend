import React from 'react'
import { connect } from 'react-redux'
import {startLogin} from '../../actions/userAction'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "email" : '',
            "password" : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "email" : this.state.email,
            "password" : this.state.password
        }
        const redirect = () => {
            this.props.history.push('/')
        }
        this.props.dispatch(startLogin(formData, redirect))
    }

    render(){
        return(
            <div className="container">
                <div className="justify-content-md-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>
                    <input className="form-control mb-3" type="text" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} /><br/><br/>
                    <input className="form-control mb-3" type="password" name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} /><br/><br/>
                    <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Login)