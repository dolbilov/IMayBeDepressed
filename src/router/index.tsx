import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '../components';
import { RouterList } from './routerList';

import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';
//const AboutPage = lazy(() => import(/* webpackChunkName: "about" */ '../pages/About'));

export function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RouterList.HOME}>
          <Route index element={<HomePage />} />
          {/* <Route path={RouterList.ABOUT} element={<AboutPage />} />*/}
          <Route path={RouterList.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
