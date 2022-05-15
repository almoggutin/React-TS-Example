import LoginFormActionTypes from '../actions/login-form.actions';
import { LoginFormState, LoginFormActions } from '../models/login-form.model';
import * as formUtils from '../utils/form.utils';

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
        case LoginFormActionTypes.UPDATE_EMAIL: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, email: value };
            const updatedValidities = { ...state.validities, email: isValid };
            const updatedErrorMessages = { ...state.errorMessages, email: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        case LoginFormActionTypes.UPDATE_PASSWORD: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, password: value };
            const updatedValidities = { ...state.validities, password: isValid };
            const updatedErrorMessages = { ...state.errorMessages, password: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        default:
            return state;
    }
};

export default loginFormReducer;
