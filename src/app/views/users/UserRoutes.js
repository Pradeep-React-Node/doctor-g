import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const UserList = Loadable(lazy(() => import('./UserList')));
const AddUser = Loadable(lazy(() => import('./AddUser')));
const UserDetail = Loadable(lazy(() => import('./UserDetail')));
const EditUser = Loadable(lazy(() => import('./EditUser')));

const userRoutes = [
  { path: '/users/userlist', element: <UserList /> },
  { path: '/users/add-user', element: <AddUser /> },
  { path: '/users/user-details', element: <UserDetail /> },
  { path: '/users/edit-user', element: <EditUser /> },
];

export default userRoutes;