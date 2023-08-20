import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const AddNewGlassAcpHplFixing = Loadable(lazy(() => import('./add-glassacphplfixing/AddNewGlassAcpHplFixing')));

const GlassAcpHplFixingList = Loadable(lazy(() => import('./glassacphplfixing-list/GlassAcpHplFixingList')));

const EditGlassAcpHplFixing = Loadable(lazy(() => import('./edit-glassacphplfixing/EditGlassAcpHplFixing')));

const GlassAcpHplFixingDetail = Loadable(lazy(() => import('./glassacphplfixing-detail/ViewGlassAcpHplFixing')));

const glassacphplfixingRoutes = [
    { path: '/glassacphplfixing/add-glassacphplfixing', element: <AddNewGlassAcpHplFixing /> },
    { path: '/glassacphplfixing/glassacphplfixing-list', element: <GlassAcpHplFixingList /> },
    { path: '/glassacphplfixing/edit-glassacphplfixing', element: <EditGlassAcpHplFixing /> },
    { path: '/glassacphplfixing/view-glassacphplfixing', element: <GlassAcpHplFixingDetail /> },
];

export default glassacphplfixingRoutes;