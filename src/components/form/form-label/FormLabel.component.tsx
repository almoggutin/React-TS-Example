import './form-label.styles.scss';

type Props = {
    title: string;
    htmlFor: string;
    className?: string;
};

const FormLabel = ({ title, htmlFor, className = 'form-label' }: Props) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {title}
        </label>
    );
};

export default FormLabel;
