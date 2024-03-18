import { FC } from 'react';

import cl from './loader.module.scss';

export const Loader: FC = () => (
  <div className={cl.loader_container}>
    <div className={cl.loader}></div>
  </div>
);
