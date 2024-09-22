import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
