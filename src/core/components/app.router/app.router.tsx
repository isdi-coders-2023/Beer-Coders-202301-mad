import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../app/App';

const Home = lazy(() => import('../../../features/home/page/home'));
const MyBeers = lazy(() => import('../../../features/todo/page/todo'));
const About = lazy(() => import('../../../features/about/page/about'));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        <Route path={menuOptions[1].path} element={<MyBeers></MyBeers>}></Route>
        <Route path={menuOptions[2].path} element={<About></About>}></Route>
        <Route path={'*'} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
