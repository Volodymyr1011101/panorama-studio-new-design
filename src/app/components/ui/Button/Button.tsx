import type { NextComponentType, NextPageContext } from 'next';
import styles from './Button.module.scss';
interface Props {
    text: string;
    event: () => void;
}

const Button: NextComponentType<NextPageContext, {}, Props> = ({ text, event }: Props) => {
    return (
        <button onClick={() => event()} className={styles.button}>
            {text}
        </button>
    );
};

export default Button;
