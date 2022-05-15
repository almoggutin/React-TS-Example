import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import Sidebar from '../sidebar/Sidebar.component';

type Props = {};

const Header = () => {
    const [sidebarClass, setSidebarClass] = useState<string>('');

    const showSidebar = (): void => setSidebarClass('show');

    const hideSidebar = (): void => setSidebarClass('');

    return (
        <header className="main-header">
            <h1>
                <Link to="/">Todo List</Link>
            </h1>

            <button className="hamburger-btn" onClick={showSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>

            <Sidebar className={sidebarClass} hideSidebar={hideSidebar} />
        </header>
    );
};

export default Header;
