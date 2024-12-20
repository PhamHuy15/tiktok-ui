import { useState } from 'react';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderIttems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        isParent ? setHistory((prev) => [...prev, item.children]) : onChange(item);
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}

                {renderIttems()}
            </PopperWrapper>
        </div>
    );

    const handleReset = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            delay={[0, 600]}
            offset={[12, 5]}
            hideOnClick={hideOnClick}
            interactive
            placement="bottom-end"
            render={renderResult}
            onHidden={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.popTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
