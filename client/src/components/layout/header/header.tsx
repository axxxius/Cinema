import { Link } from 'react-router-dom';

import exit from '@assets/images/icons/exit.svg';

import cl from './header.module.scss';

export const Header = () => (
  <>
    <div className={cl.header_container}>
      <div className={cl.navigate_container}>
        <Link to='/' className={cl.link}>
          Главная
        </Link>
        <Link to='#' className={cl.link}>
          Профиль
        </Link>
        <Link to='#' className={cl.link}>
          Билеты
        </Link>
      </div>
      <div className={cl.logout_container}>
        <img src={exit} alt='exit' />
        <Link to='#' className={cl.logout}>
          Выйти
        </Link>
      </div>
    </div>
  </>
);
