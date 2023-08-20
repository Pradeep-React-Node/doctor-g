import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const AddNewHandover = Loadable(lazy(() => import('./add-handover/AddNewHandover')));
const HandoverList = Loadable(lazy(() => import('./handover-list/HandoverList')));
const EditHandover = Loadable(lazy(() => import('./edit-handover/EditHandover')));
const HandoverDetail = Loadable(lazy(() => import('./handover-detail/ViewHandover')));

const handoverRoutes = [
    { path: '/handover/add-handover', element: <AddNewHandover /> },
    { path: '/handover/handover-list', element: <HandoverList /> },
    { path: '/handover/edit-handover', element: <EditHandover /> },
    { path: '/handover/view-handover', element: <HandoverDetail /> },
];

export default handoverRoutes;