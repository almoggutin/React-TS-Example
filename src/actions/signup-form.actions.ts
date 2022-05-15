import { IUpdateSignupFormFieldAction } from '../models/signup-form.model';

enum SignupFormActionTypes {
    UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME = 'UPDATE_LAST_NAME',
    UPDATE_EMAIL = 'UPDATE_EMAIL',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
    UPDATE_REPEATED_PASSWORD = 'UPDATE_REPEATED_PASSWORD',
}

export const updateFormFieldAction = (
    type: SignupFormActionTypes,
    value: string,
    isValid: boolean = true,
    errorMessage: string = ''
): IUpdateSignupFormFieldAction => ({
    type,
    payload: {
        value,
        isValid,
        errorMessage,
    },
});

export default SignupFormActionTypes;
