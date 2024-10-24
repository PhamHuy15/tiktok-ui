import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import Button from '~/component/Button';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <div className={classes} onClick={onClick}>
            <Button leftIcon={data.icon}>{data.title}</Button>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
