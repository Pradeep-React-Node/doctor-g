import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from 'app/auth/authRoles';

const AppTable = Loadable(lazy(() => import('./TaskList')));
const WorkResponse = Loadable(lazy(() => import('./WorkResponse')));
const SurveyList = Loadable(lazy(() => import('./SurveyList')));
const DrawingList = Loadable(lazy(() => import('./EpmDrawingList')));
const AluminiumList = Loadable(lazy(() => import('./EmpAluminiumList')));
const HandoverList = Loadable(lazy(() => import('./EmpHandoverList')));
const GlassacpList = Loadable(lazy(() => import('./EmpGlassAcpList')));
const NotificationpList = Loadable(lazy(() => import('./EmpNotification')));
const PopUP = Loadable(lazy(() => import('./DeadlineUpdatePopUp')));


const empRoutes = [
    {
        path: '/emp/work',
        element: <AppTable />,
        auth: authRoles.admin,
    },
    {
        path: '/emp/work-response',
        element: <WorkResponse />,
        auth: authRoles.admin,
    },
    {
        path: '/emp/survey',
        element: <SurveyList />,
        auth: authRoles.admin,
    },

    {
        path: '/emp/drawinglist',
        element: <DrawingList />,
        auth: authRoles.admin,
    },

    {
        path: '/emp/aluminumlist',
        element: <AluminiumList />,
        auth: authRoles.admin,
    },
    {
        path: '/emp/handoverlist',
        element: <HandoverList />,
        auth: authRoles.admin,
    },
    {
        path: '/emp/glassacplist',
        element: <GlassacpList />,
        auth: authRoles.admin,
    },
    {
        path: '/emp/notification',
        element: <NotificationpList />,
        auth: authRoles.admin,
    },

    {
        path: '/emp/sitepop',
        element: <PopUP />,
        auth: authRoles.admin,
    },

];

export default empRoutes;
