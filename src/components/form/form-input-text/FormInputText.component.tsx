import './form-input-text.styles.scss';

type Props = {
    id: string;
    type?: any;
    className?: string;
    isRequired?: boolean;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInputText = ({ id, type = 'text', className = 'form-input', isRequired = false, handleInput }: Props) => {
    return <input id={id} className={className} type={type} required={isRequired} onInput={handleInput} />;
};

export default FormInputText;
