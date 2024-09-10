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

const cx = classNames.bind(styles);

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
                        <PopperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loadding')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button
                        textBorder
                        leftIcon={<FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />}
                        className={cx('custom-login')}
                    >
                        Upload
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
