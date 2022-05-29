import LoginFormActionTypes from '../actions/login-form.actions';

export interface ILoginFormState {
    values: {
        email: string;
        password: string;
    };
    validities: {
        email: boolean;
        password: boolean;
    };
    errorMessages: {
        email: string;
        password: string;
    };
    isFormValid: boolean;
}

export type loginFormInputTypes = 'email' | 'password';
export interface IUpdateLoginFormFieldAction {
    type: LoginFormActionTypes.UPDATE_FORM_FIELD;
    payload: {
        inputType: loginFormInputTypes;
        value: string;
        isValid: boolean;
        errorMessage: string;
    };
}
export type LoginFormState = ILoginFormState;

export type LoginFormActions = IUpdateLoginFormFieldAction;
