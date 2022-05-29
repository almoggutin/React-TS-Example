export const areFormValuesValid = (values: any): boolean => {
    const areValuesValid = Object.values(values).every((value) => value);

    return areValuesValid;
};
