import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const PaymnetList = Loadable(lazy(() => import('./payment-list/PaymentList')));
const EditPayentt = Loadable(lazy(() => import('./edit-payment/EditPayment')));
const AddPayment = Loadable(lazy(() => import('./add-payment/AddPayment')));
const ViewPayment = Loadable(lazy(() => import('./view-payment/ViewPayment')));


const paymentRoutes = [
  {
    path: '/payment/payment-list',
    element: <PaymnetList />,
  },
  {
    path: '/payment/edit-payment',
    element: <EditPayentt />,
  },
  {
    path: '/payment/add-payment',
    element: <AddPayment />,
  },
  {
    path: '/payment/view-payment',
    element: <ViewPayment />,
  },

];

export default paymentRoutes;
