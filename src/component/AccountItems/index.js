import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fc28cf5f0c1dde3b18157ac64ae2677c~c5_300x300.webp?lk3s=a5d48078&nonce=38956&refresh_token=003f6e311c8f6005592dc05a9d36b203&x-expires=1725980400&x-signature=Bl61Pj9F0DLBZuHukRjmrLDI1QM%3D&shp=a5d48078&shcp=c1333099"
                alt="pham hy"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguiyenvanaaa</span>
            </div>
        </div>
    );
}

export default AccountItems;
