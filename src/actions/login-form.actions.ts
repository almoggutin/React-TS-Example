import { IUpdateLoginFormFieldAction, loginFormInputTypes } from '../models/login-form.model';

enum LoginFormActionTypes {
    UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD',
}

export const updateFormFieldAction = (
    inputType: loginFormInputTypes,
    value: string,
    isValid: boolean = true,
    errorMessage: string = ''
): IUpdateLoginFormFieldAction => ({
    type: LoginFormActionTypes.UPDATE_FORM_FIELD,
    payload: {
        inputType,
        value,
        isValid,
        errorMessage,
    },
});

export default LoginFormActionTypes;
