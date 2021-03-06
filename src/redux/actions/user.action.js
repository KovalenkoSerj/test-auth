import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE,
	 				USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, 
	 				USERS_GETALL_REQUEST, USERS_GETALL_SUCCESS, USERS_GETALL_FAILURE } from '../constants/user.constants';
import { user_register, user_login, get_all_users } from '../../utils/user.service';
import { history } from '../../utils/history';

export const request = user => {
	return {
		type: USER_REGISTER_REQUEST,
		user
	}
};

export const success = user => {
	return {
		type: USER_REGISTER_SUCCESS,
		user
	}
};

export const failure = error => {
	return{
		type: USER_REGISTER_FAILURE,
		error
	}
}
export const login_request = user => {
	return {
		type: USER_LOGIN_REQUEST,
		user
	}
};

export const login_success = user => {
	return {
		type: USER_LOGIN_SUCCESS,
		user
	}
};

export const login_failure = error => {
	return{
		type: USER_LOGIN_FAILURE,
		error
	}
}

export const get_users_request = () => {
	return {
		type: USERS_GETALL_REQUEST
	}
};

export const get_users_success = users => {
	return {
		type: USERS_GETALL_SUCCESS,
		users
	}
};

export const get_users_failure = error => {
	return{
		type: USERS_GETALL_FAILURE,
		error
	}
}


export const user_register_request = user => {
	return dispatch => {
		dispatch(request(user));
		user_register(user)
		.then(user => {
			dispatch(success(user));
			history.push('./login')
		}, error => {
			dispatch(failure(error))
		})
	}
}

export const user_login_request = (username, password) => {
	return dispatch => {
			dispatch(login_request({username}));
			user_login(username, password)
					.then(user => {
									dispatch(login_success(user));
									history.push('/')
							},
								error => {
									dispatch(login_failure(error));

			})
		}
	}

	export const get_all_users_request = () => {
			return dispatch => {
					dispatch(request());
					get_all_users()
							.then(
									users => dispatch(success(users)),
									error => dispatch(failure(error))
							);
			};
	}