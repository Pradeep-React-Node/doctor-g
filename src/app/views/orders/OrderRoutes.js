import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./order-list/AppTable')));
const OrderForm = Loadable(lazy(() => import('./new-order/OrderForm')));
const OrderDetails = Loadable(lazy(() => import('./order-details/OrderDetails')));
const EditOrder = Loadable(lazy(() => import('./edit-order/EditOrder')));


const orderRoutes = [
  {
    path: '/orders/order-list',
    element: <AppTable />,
  },
  {
    path: '/orders/new-order',
    element: <OrderForm />,
  },
  {
    path: '/orders/order-details',
    element: <OrderDetails />,
  },
  {
    path: '/orders/edit-order',
    element: <EditOrder />,
  },
];

export default orderRoutes;
