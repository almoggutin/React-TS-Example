export const areValuesValid = (values: any): boolean => {
    for (let key of Object.keys(values)) if (values[key] === '') return false;

    return true;
};

export const areValueValiditiesValid = (values: any): boolean => {
    for (let key of Object.keys(values)) if (values[key] === false) return false;

    return true;
};
