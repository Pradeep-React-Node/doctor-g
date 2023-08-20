import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NewApprovedDrawing = Loadable(lazy(() => import('./new-approved-drawing/NewApprovedDrawing')));
const ApprovedDrawingDetail = Loadable(lazy(() => import('./approved-drawing-view/ApprovedDrawingView')));
const ApprovedDrawingList = Loadable(lazy(() => import('./approved-drawing-list/ApprovedDrawingList')));
const EditApprovedDrawing = Loadable(lazy(() => import('./edit-approve-drawing/EditApproveDrawing')));


const approveddrawingRoutes = [
  {
    path: '/approved-drawing/new-approved-drawing',
    element: <NewApprovedDrawing />,
  },
  {
    path: '/approved-drawing/approved-drawing-list',
    element: <ApprovedDrawingList />,
  },
  {
    path: '/approved-drawing/approved-drawing-view',
    element: <ApprovedDrawingDetail />,
  },
  {
    path: '/approved-drawing/edit-approved-drawing',
    element: <EditApprovedDrawing />,
  },
];

export default approveddrawingRoutes;
