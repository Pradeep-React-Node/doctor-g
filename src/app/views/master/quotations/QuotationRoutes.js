import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const QuotationList = Loadable(lazy(() => import('./quotation-list/QuotationList')));
const AddQuotation = Loadable(lazy(() => import('./add-quotations/QuotationsForm')));
const ViewQuotation = Loadable(lazy(() => import('./view-quotaion/ViewQuotation')));


const quotationRoutes = [
  {
    path: '/quotation/quotation-list',
    element: <QuotationList />,
  },
  {
    path: '/quotation/add-quotation',
    element: <AddQuotation />,
  },
  {
    path: '/quotation/view-quotation',
    element: <ViewQuotation />,
  },

];

export default quotationRoutes;
