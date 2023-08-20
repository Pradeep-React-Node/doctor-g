import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NewDrawing = Loadable(lazy(() => import('./new-drawing/NewDrawing')));
const DrawingDetail = Loadable(lazy(() => import('./drawing-detail/ViewDrawing')));
const DrawingList = Loadable(lazy(() => import('./drawing-list/DrawingList')));
const EditDrawing = Loadable(lazy(() => import('./edit-drawing/EditDrawing')));


const drawingRoutes = [
  {
    path: '/drawing/drawing-list',
    element: <DrawingList />,
  },
  {
    path: '/drawing/new-drawing',
    element: <NewDrawing />,
  },
  {
    path: '/drawing/view-drawing',
    element: <DrawingDetail />,
  },
  {
    path: '/drawing/edit-drawing',
    element: <EditDrawing />,
  },
];

export default drawingRoutes;
