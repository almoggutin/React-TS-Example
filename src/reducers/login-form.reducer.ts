import { cloneDeep } from 'lodash';

import LoginFormActionTypes from '../actions/login-form.actions';
import { LoginFormState, LoginFormActions } from '../models/login-form.model';
import { areFormValuesValid } from '../utils/form.utils';

export const LOGIN_FORM_INITIAL_STATE: LoginFormState = {
    values: {
        email: '',
        password: '',
    },
    validities: {
        email: true,
        password: true,
    },
    errorMessages: {
        email: '',
        password: '',
    },
    isFormValid: false,
};

const loginFormReducer = (state: LoginFormState, action: LoginFormActions): LoginFormState => {
    switch (action.type) {
        case LoginFormActionTypes.UPDATE_FORM_FIELD: {
            const { inputType, value, isValid, errorMessage } = action.payload;

            const updatedState: LoginFormState = cloneDeep(state);
            updatedState.values[inputType] = value;
            updatedState.validities[inputType] = isValid;
            updatedState.errorMessages[inputType] = errorMessage;
            updatedState.isFormValid =
                areFormValuesValid(updatedState.values) && areFormValuesValid(updatedState.validities);

            return updatedState;
        }
        default:
            return { ...state };
    }
};

export default loginFormReducer;
