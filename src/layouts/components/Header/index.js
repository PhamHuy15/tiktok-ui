import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/component/Button';
import {
    MessageIcon,
    MoreIcon,
    CreatorHouseIcon,
    LanguageIcon,
    QuestionIcon,
    DarkModeIcon,
    CoinIcon,
    ProfileIcon,
    LogoutIcon,
} from '~/component/Icons';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreatorHouseIcon />,
        title: 'Creator Tool',
    },
    {
        icon: <LanguageIcon />,
        title: 'Language',
        children: {
            title: 'Languages',
            data: [
                { type: 'Language', code: 'en', title: 'Tiếng Anh' },
                { type: 'Language', code: 'vie', title: 'Tiếng Việt' },
            ],
        },
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
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                //handle change type
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <CoinIcon />,
            title: 'GetCoin',
            to: '/coin',
        },

        ...MENU_ITEMS,

        {
            icon: <LogoutIcon />,
            title: 'GetCoin',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('action-btn')}
                                textBorder
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>

                            <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline>sign In</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="nguyen van a"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d26f9433e7d89fd6ff58117c86eebe35.jpeg?lk3s=a5d48078&nonce=45793&refresh_token=3411ee49f9089a9559965ba4252487c4&x-expires=1726923600&x-signature=4duMggBM0RfkAhQk6RFN9mb0%2Fi4%3D&shp=a5d48078&shcp=81f88b70"
                                // fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b3b79cc75b44259afe38076048bc71c5.jpeg?lk3s=a5d48078&nonce=40217&refresh_token=518e61f46447870e40a8b31002189dcd&x-expires=1727168400&x-signature=3nHzbmigAG2NbAxGAwV4lGf6eLw%3D&shp=a5d48078&shcp=81f88b70"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
