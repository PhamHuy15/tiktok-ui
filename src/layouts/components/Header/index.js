import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItems from '~/component/AccountItems';
import Button from '~/component/Button';
import {
    MessageIcon,
    SearchIcon,
    MoreIcon,
    CreatorHouseIcon,
    LanguageIcon,
    QuestionIcon,
    DarkModeIcon,
} from '~/component/Icons';
import Menu from '~/component/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreatorHouseIcon />,
        title: 'Creator Tool',
    },
    {
        icon: <LanguageIcon />,
        title: 'Language',
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and helps',
        to: '/feedback',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Appearance',
    },
];

function Header() {
    const [searchResults, setSearchResuls] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResuls([1, , 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />

                <Tippy
                    visible={searchResults.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loadding')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button textBorder leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>

                    <button className={cx('message-btn')}>
                        <MessageIcon />
                    </button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <MoreIcon />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
