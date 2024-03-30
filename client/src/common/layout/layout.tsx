import { Outlet } from 'react-router-dom';

import { Header } from './header/header.tsx';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
