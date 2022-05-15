import { ReactNode } from 'react';
import './button.styles.scss';

type Props = {
    type: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    disabled?: boolean;
    handleClick?: () => void | Promise<void>;
    children: ReactNode;
};

const Button = ({ type = 'button', className, disabled = false, handleClick, children }: Props) => {
    return (
        <button type={type} className={className} onClick={handleClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
