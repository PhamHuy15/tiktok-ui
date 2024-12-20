import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
