import React from 'react';
import { Star } from '../Star';
import { StarsProps } from '../../types/types';
import styles from './Stars.module.css';

export const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }

    const starsArray = Array.from({ length: count }, (_, index) => <Star key={index} />);

    return (
        <ul className={`${styles['card-body-stars']} ${styles['u-clearfix']}`}>
            {starsArray}
        </ul>
    );
};
