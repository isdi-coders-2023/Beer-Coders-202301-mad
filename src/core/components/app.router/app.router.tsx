import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MenuOption } from '../app/App';

const Home = lazy(() => import('../../../features/home/page/home'));

// COMENTARIO TEMPORAL HASTA TERMINAR HOME, MY BEERS Y ABOUT.
// const MyBeers = lazy(() => import('../../../features/mybeers/page/mybeers'));
const About = lazy(() => import('../../../features/about/page/about'));
const Details = lazy(() => import('../../../features/details/page/details'));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        {/* <Route path={menuOptions[1].path} element={<MyBeers></MyBeers>}></Route> */}
        <Route path={menuOptions[2].path} element={<About></About>}></Route>
        {/* <Route path={'*'} element={<ErrorPage></ErrorPage>}></Route> */}
        <Route path={'/details'} element={<Details></Details>}></Route>
      </Routes>
    </Suspense>
  );
}
