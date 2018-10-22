import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Icon,  Form,  Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import { user_register_request } from '../../redux/actions/user.action';

const mapStateToProps = state => {
	return {
			register: state.registration
	}
}

class RegistrationPage extends Component {
		state = {
			user: {
				firstName: '',
				lastName: '',
				username: '',
				password: ''
			},
			submitted: false
		}

	handleChange = event => {
		const { name, value } = event.target;
		const { user } = this.state;
		this.setState({ user: { ...user, [name]: value }})
	}

	handleSubmit = event => {
		event.preventDefault();
		const { dispatch } = this.props, { user } = this.state;
		this.setState({ submitted: true })
		if (user.firstName && user.lastName && user.username && user.password) {
				dispatch(user_register_request(user))
		}
	}

	render() {
		const { user, submitted } = this.state;
		return (
			<div>
				<h2>Registration Form</h2>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<div>
					<label htmlFor="firstName">First Name</label>
					<Input type="user"
									className=''
									value={user.firstName}
									onChange={this.handleChange}
									name='firstName'
									autoComplete="firstName"
									/>
					{ submitted && !user.firstName && <div>First Name is required</div> }
					</div>
					<div>
					<label htmlFor="lastName">Last Name</label>
					<Input type="user"
									className=''
									value={user.lastName}
									onChange={this.handleChange}
									name='lastName'
									autoComplete="lastName"
									/>
					{ submitted && !user.username && <div>Last Name is required</div> }
					</div>
					<div>
					<label htmlFor="username">User Name</label>
					<Input type="user"
									className=''
									value={user.username}
									onChange={this.handleChange}
									name='username'
									autoComplete="user-name"
									/>
					{ submitted && !user.username && <div>Username is required</div> }
					</div>
					<div>
					<label htmlFor="password">Password</label>
					<Input prefix={<Icon type="lock" 
									style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password" 
									placeholder="Password" 
									value={user.password}
									onChange={this.handleChange}
									name='password'
									autoComplete="new-password"
									/>
					{ submitted && !user.password && <div>Password is required</div> }
					</div>
					<div>
					<Button htmlType='submit'>Registration</Button>
					{this.props.loading && <Button shape="circle" loading />}
					<Link  to='/login'><Button>Sign in</Button></Link>
					</div>
				</Form>
			</div>
		)
	}
}

export default connect(mapStateToProps)(RegistrationPage)