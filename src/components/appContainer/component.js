import { Outlet } from 'react-router-dom';
import { Header } from '../header/component';
import './styles.css';
export const AppContainer = () => {
  return (
    <>
      <Header />
      <section className="app-wrapper">
        <Outlet />
      </section>
    </>
  );
};
