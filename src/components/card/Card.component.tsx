import { ReactNode } from 'react';
import './card.styles.scss';

type Props = {
    className: string;
    children: ReactNode;
};

const Card = ({ className, children }: Props) => {
    return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
