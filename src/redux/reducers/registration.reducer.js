import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE  } from "../constants/user.constants";

export const registration = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { registration: true };
        case USER_REGISTER_SUCCESS:
            return {
                loading: false
            };
        case USER_REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}
