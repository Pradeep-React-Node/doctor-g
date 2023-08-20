import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const NotificationPage = Loadable(lazy(() => import('./NotificationPage')));


const notificationRoutes = [
    { path: 'notification', element: <NotificationPage /> },

];

export default notificationRoutes;