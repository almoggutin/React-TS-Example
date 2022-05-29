import { IUpdateSignupFormFieldAction, signupFormInputTypes } from '../models/signup-form.model';

enum SignupFormActionTypes {
    UPDATE_FORM_FIELD = 'UPDATE_REPEATED_PASSWORD',
}

export const updateFormFieldAction = (
    inputType: signupFormInputTypes,
    value: string,
    isValid: boolean = true,
    errorMessage: string = ''
): IUpdateSignupFormFieldAction => ({
    type: SignupFormActionTypes.UPDATE_FORM_FIELD,
    payload: {
        inputType,
        value,
        isValid,
        errorMessage,
    },
});

export default SignupFormActionTypes;
