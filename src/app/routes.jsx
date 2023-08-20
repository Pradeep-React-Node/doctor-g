import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import orderRoutes from 'app/views/orders/OrderRoutes';
import NotFound from 'app/views/sessions/NotFound';
import userRoutes from 'app/views/users/UserRoutes';
import surveyRoutes from 'app/views/survey/SurveyRoutes';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import productRoutes from 'app/views/product/ProductRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import clientRoutes from './views/master/clients/ClientRoutes';
import employeeRoutes from './views/master/employees/EmployeeRoutes';
import paymentList from './views/master/payments/PaymentRoutes';
import saftyEquipmentRoutes from './views/master/safety-equipment/SafetyEquipmentRoutes';
import quotationRoutes from './views/master/quotations/QuotationRoutes';
import profileRoutes from './views/profile/ProfileRoutes';
import handoverRoutes from './views/handover/handoverRoutes';
import empRoutes from './views/EmployeePannel/EmployeeRoute';
import drawingRoutes from './views/drawing/DrawingRoute';
import approveddrawingRoutes from './views/approved drawing/ApprovedDrawingRoute';
import aluminiumRoutes from './views/aluminium/AluminiumRoutes';
import glassacphplfixingRoutes from './views/glassacphplfixing/glassacphplfixingRoutes';
import notificationRoutes from './views/notification/notificationRoutes'
import screenRoute from './views/screenSaver/ScreenRoutes';
const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),

    children: [
      ...dashboardRoutes,
      ...quotationRoutes,
      ...chartsRoute,
      ...orderRoutes,
      ...userRoutes,
      ...surveyRoutes,
      ...productRoutes,
      ...clientRoutes,
      ...employeeRoutes,
      ...paymentList,
      ...saftyEquipmentRoutes,
      ...profileRoutes,
      ...empRoutes,
      ...drawingRoutes,
      ...approveddrawingRoutes,
      ...handoverRoutes,
      ...aluminiumRoutes,
      ...glassacphplfixingRoutes,
      ...screenRoute,
      ...notificationRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
