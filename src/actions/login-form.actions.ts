import { IUpdateLoginFormFieldAction } from '../models/login-form.model';

enum LoginFormActionTypes {
    UPDATE_EMAIL = 'UPDATE_EMAIL',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
}

export const updateFormFieldAction = (
    type: LoginFormActionTypes,
    value: string,
    isValid: boolean = true,
    errorMessage: string = ''
): IUpdateLoginFormFieldAction => ({
    type,
    payload: {
        value,
        isValid,
        errorMessage,
    },
});

export default LoginFormActionTypes;
