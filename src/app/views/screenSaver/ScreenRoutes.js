import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const UserList = Loadable(lazy(() => import('./UserList')));
const AddUser = Loadable(lazy(() => import('./AddUser')));
const UserDetail = Loadable(lazy(() => import('./UserDetail')));
const EditUser = Loadable(lazy(() => import('./EditUser')));

const userRoutes = [
  { path: '/screen/list', element: <UserList /> },
  { path: '/screen/add-screen', element: <AddUser /> },
  { path: '/screen/screen-details', element: <UserDetail /> },
  { path: '/screen/edit-screen', element: <EditUser /> },
];

export default userRoutes;
