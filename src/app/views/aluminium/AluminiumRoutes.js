import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./aluminium-list/AppTable')));
const AluminiumForm = Loadable(lazy(() => import('./new-aluminium/NewAluminium')));
const AluminiumDetails = Loadable(lazy(() => import('./aluminium-details/AluminiumViewPage')));
const EditAluminium = Loadable(lazy(() => import('./edit-aluminium/EditAluminium')));


const aluminiumRoutes = [
  {
    path: '/aluminium/aluminium-list',
    element: <AppTable />,
  },
  {
    path: '/aluminium/new-aluminium',
    element: <AluminiumForm />,
  },
  {
    path: '/aluminium/aluminium-details',
    element: <AluminiumDetails />,
  },
  {
    path: '/aluminium/edit-aluminium',
    element: <EditAluminium />,
  },
];

export default aluminiumRoutes;
