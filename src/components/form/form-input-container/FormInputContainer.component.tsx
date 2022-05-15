import './form-input-container.styles.scss';

import FormLabel from '../form-label/FormLabel.component';
import FormInputText from '../form-input-text/FormInputText.component';

type Props = {
    id: string;
    labelTitle: string;
    inputType?: any;
    isRequired: boolean;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
};

const FormInputContainer = ({ id, labelTitle, inputType, isRequired, handleInput, errorMessage }: Props) => {
    return (
        <div className="form-input-container">
            <FormLabel htmlFor={id} title={labelTitle} />

            <FormInputText id={id} type={inputType} isRequired={isRequired} handleInput={handleInput} />

            <div className="error-message">{errorMessage}</div>
        </div>
    );
};

export default FormInputContainer;
