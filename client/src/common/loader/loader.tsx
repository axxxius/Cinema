import cl from './loader.module.scss';

export const Loader = () => (
  <div className={cl.loader_container}>
    <div className={cl.loader}></div>
  </div>
);
