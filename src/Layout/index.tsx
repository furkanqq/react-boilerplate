import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="main">
            <div className="navbar"></div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}
