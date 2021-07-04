import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps {
    children: ReactNode;
    active: string;
    isDark: boolean;
    setIsDark: (param: boolean) => void;
}

const Layout = ({ children, active, isDark, setIsDark }: LayoutProps) => (
    <div className="relative h-screen">
        <NavBar active={active} isDark={isDark} setIsDark={setIsDark} />
        {children}
        {/* footer */}
    </div>
);

export default Layout;
