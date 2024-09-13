import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import Button from '~/component/Button';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <div className={cx('menu-item')}>
            <Button leftIcon={data.icon}>{data.title}</Button>
        </div>
    );
}

export default MenuItem;
