import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const ProfileDetail = Loadable(lazy(() => import('./ProfileDetail')));
const UpdateProfile = Loadable(lazy(() => import('./ProfileUpdate')));

const profileRoutes = [
  { path: '/profile-detail', element: <ProfileDetail /> },
  { path: '/update-profile', element: <UpdateProfile /> },
];

export default profileRoutes;