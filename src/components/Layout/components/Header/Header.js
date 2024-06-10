//icons
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faKeyboard,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import {
    CoinIcon,
    HousePlayIcon,
    InboxIcon,
    SettingIcon,
    UserIcon,
    SignOutIcon,
    LanguageIcon,
    QuestionIcon,
    VideoIcon,
    LightBuldIcon,
} from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback  ',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboad shortcut',
    },
];

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                //handle change
                break;
            default:
        }
    };

    const userMenus = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@hpam ',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/Coins  ',
        },
        {
            icon: <HousePlayIcon />,
            title: 'Creator tools',
            children: {
                title: 'Creator tools',
                data: [
                    {
                        type: 'Creator tools',
                        icon: <VideoIcon />,
                        title: 'LIVE studio',
                    },
                    {
                        type: 'Creator tools',
                        icon: <LightBuldIcon />,
                        title: 'LIVE Creator hub',
                    },
                ],
            },
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings  ',
        },

        ...MENU_ITEMS.slice(0, 2),

        {
            icon: <SignOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                outLine
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className={cx('upload-icon')}
                                    />
                                }
                                className={cx('upload-btn')}
                            >
                                Upload
                            </Button>

                            <Tippy
                                delay={[0, 200]}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('notifications')}>
                                        12
                                    </span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenus : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d26f9433e7d89fd6ff58117c86eebe35.jpeg?lk3s=a5d48078&nonce=3191&refresh_token=c66f926e7073cd8e4d3c1f44371fe97c&x-expires=1720796400&x-signature=T15rmzBYpfgvtxX8Q6u1fV8k2YQ%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Huypam"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
