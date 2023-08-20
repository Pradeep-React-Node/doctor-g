import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const MatxListItem1 = Loadable(lazy(() => import('./MatxListItem1')));

const matxRoutes = [
  { path: '/matx/userlist', element: <MatxListItem1/> },
];

export default matxRoutes;