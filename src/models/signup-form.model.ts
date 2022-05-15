import SignupFormActionTypes from '../actions/signup-form.actions';

export interface ISignupFormState {
    values: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        repeatedPassword: string;
    };
    validities: {
        firstName: boolean;
        lastName: boolean;
        email: boolean;
        password: boolean;
        repeatedPassword: boolean;
    };
    errorMessages: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        repeatedPassword: string;
    };
    isFormValid: boolean;
}

export interface IUpdateSignupFormFieldAction {
    type: SignupFormActionTypes;
    payload: {
        value: string;
        isValid: boolean;
        errorMessage: string;
    };
}

export type SignupFormState = ISignupFormState;

export type SignupFormActions = IUpdateSignupFormFieldAction;
