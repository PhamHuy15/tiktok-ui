import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outLine = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    onClick,
    children,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';

    const prop = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(prop).forEach((key) => {
            if (key.startsWith('on') && typeof prop[key] === 'function') {
                delete prop[key];
            }
        });
    }

    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outLine,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...prop}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
