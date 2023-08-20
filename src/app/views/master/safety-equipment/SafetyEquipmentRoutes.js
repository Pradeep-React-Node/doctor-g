import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const EquipmentList = Loadable(lazy(() => import('./equipment-list/EquipmentList')));
const AddNewEquipment = Loadable(lazy(() => import('./add-equipment/AddNewEquipment')));
const EditEquipment = Loadable(lazy(() => import('./edit-equipment/EditEquipment')));


const saftyEquipmentRoutes = [
  {
    path: '/safety-equipment/equipment-list',
    element: <EquipmentList />,
  },
  {
    path: '/safety-equipment/add-equipment',
    element: <AddNewEquipment />,
  },
  {
    path: '/safety-equipment/edit-equipment',
    element: <EditEquipment />,
  },

];

export default saftyEquipmentRoutes;
