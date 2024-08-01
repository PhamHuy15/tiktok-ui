import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header/Header';
import Sidebar from './Sidebar/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
