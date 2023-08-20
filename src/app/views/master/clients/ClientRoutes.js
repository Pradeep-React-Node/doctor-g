import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ClientList = Loadable(lazy(() => import('./client-list/ClientList')));
const AddNewClient = Loadable(lazy(() => import('./add-clients/AddNewclient')));
const EditClient = Loadable(lazy(() => import('./edit-client/Editclient')));
const ViewClient = Loadable(lazy(() => import('./view-client/CientViewer')));


const clientRoutes = [
  {
    path: '/client/client-list',
    element: <ClientList />,
  },
  {
    path: '/client/add-client',
    element: <AddNewClient />,
  },
  {
    path: '/client/edit-client',
    element: <EditClient />,
  },
  {
    path: '/client/view-client',
    element: <ViewClient />,
  },

];

export default clientRoutes;
