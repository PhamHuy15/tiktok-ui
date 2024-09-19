import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import { BackIcon } from '~/component/Icons';

const cx = classNames.bind(style);

function Menu({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <BackIcon />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Menu;
